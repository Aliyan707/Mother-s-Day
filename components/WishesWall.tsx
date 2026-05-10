'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Send, Heart } from 'lucide-react'

interface Wish {
  id: string
  text: string
  author: string
}

export default function WishesWall() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [wishes, setWishes] = useState<Wish[]>([
    { id: '1', text: 'Thank you for everything, Mom! You are my universe ❤️', author: 'Sarah' },
    { id: '2', text: 'You are my superhero and my inspiration! 💪', author: 'Michael' },
    { id: '3', text: 'Best mom in the entire world! 🌟', author: 'Emma' },
    { id: '4', text: 'Love you to the moon and back! 🌙', author: 'David' },
  ])
  const [newWish, setNewWish] = useState('')
  const [newAuthor, setNewAuthor] = useState('')

  // Load wishes from localStorage
  useEffect(() => {
    const savedWishes = localStorage.getItem('mothersDayWishes')
    if (savedWishes) {
      setWishes(JSON.parse(savedWishes))
    }
  }, [])

  // Save wishes to localStorage
  useEffect(() => {
    if (wishes.length > 0) {
      localStorage.setItem('mothersDayWishes', JSON.stringify(wishes))
    }
  }, [wishes])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newWish.trim() && newAuthor.trim()) {
      const wish: Wish = {
        id: Date.now().toString(),
        text: newWish,
        author: newAuthor,
      }
      setWishes([wish, ...wishes])
      setNewWish('')
      setNewAuthor('')
    }
  }

  const colors = [
    'from-neon-pink to-neon-purple',
    'from-neon-purple to-neon-cyan',
    'from-neon-cyan to-neon-pink',
    'from-neon-pink via-neon-purple to-neon-cyan',
  ]

  return (
    <section
      id="wishes"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[600px] h-[600px] bg-gradient-radial from-neon-pink/30 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-black gradient-text-dark mb-6 text-neon-glow">
            Wishes Wall
          </h2>
          <p className="text-xl text-gray-400">
            Share your love and appreciation for your mother
          </p>
        </motion.div>

        {/* Add Wish Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <form onSubmit={handleSubmit} className="glass-dark rounded-3xl p-8 border border-white/10 neon-glow">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  value={newWish}
                  onChange={(e) => setNewWish(e.target.value)}
                  placeholder="Write your wish for mom..."
                  className="w-full px-6 py-4 bg-dark-surface/50 text-white rounded-2xl border border-white/10 focus:border-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink/20 transition-all placeholder-gray-500"
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={newAuthor}
                  onChange={(e) => setNewAuthor(e.target.value)}
                  placeholder="Your name"
                  className="flex-1 px-6 py-4 bg-dark-surface/50 text-white rounded-2xl border border-white/10 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all placeholder-gray-500"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan text-white rounded-2xl font-bold shadow-2xl flex items-center gap-3 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                  />
                  <Send className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Send</span>
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>

        {/* Wishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.05,
                rotate: Math.random() * 6 - 3,
                zIndex: 10,
              }}
              className="relative group card-reflection"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-br ${
                  colors[index % colors.length]
                } rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition duration-300`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Card */}
              <div className="relative glass-dark rounded-2xl p-6 h-full backdrop-blur-2xl border border-white/10">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-3 -right-3"
                >
                  <Heart className="w-7 h-7 text-neon-pink fill-neon-pink" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 77, 166, 0.8))' }} />
                </motion.div>

                <p className="text-white mb-6 leading-relaxed text-lg">
                  {wish.text}
                </p>

                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className={`h-1 w-10 bg-gradient-to-r ${colors[index % colors.length]} rounded-full`} />
                  <span className="font-bold text-neon-cyan">— {wish.author}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
