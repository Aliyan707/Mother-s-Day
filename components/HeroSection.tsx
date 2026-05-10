'use client'

import { motion } from 'framer-motion'
import { Heart, Camera, Sparkles } from 'lucide-react'
import { confetti } from '@/lib/utils'

export default function HeroSection() {
  const handleCelebrate = () => {
    confetti()
    // Scroll to memories section
    document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })
  }

  const floatingHearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 0.2,
    x: (i % 2 === 0 ? 1 : -1) * (50 + Math.random() * 100),
    y: -50 - Math.random() * 100,
  }))

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-rose-pink/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-tl from-lavender-soft/30 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Floating Hearts Around Hero */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: heart.x,
            y: heart.y,
          }}
          transition={{
            duration: 3,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
          className="absolute top-1/2 left-1/2"
        >
          <Heart className="w-6 h-6 text-rose-pink fill-rose-pink" />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Sparkle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Sparkles className="w-12 h-12 text-yellow-400" />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 text-glow"
        >
          <span className="gradient-text">Happy Mother's Day</span>
          <motion.span
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block ml-4"
          >
            ❤️
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-12 font-light max-w-3xl mx-auto leading-relaxed"
        >
          A mother's love is the purest blessing in the world.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 77, 141, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCelebrate}
            className="group relative px-8 py-4 bg-gradient-to-r from-rose-pink to-lavender-soft text-white rounded-full font-semibold text-lg shadow-lg overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative flex items-center gap-2">
              Celebrate Mom 💖
            </span>
          </motion.button>

          <motion.a
            href="#memories"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass glow rounded-full font-semibold text-lg text-gray-700 hover:text-rose-pink transition-colors flex items-center gap-2"
          >
            <Camera className="w-5 h-5" />
            Upload Memories 📸
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-6 h-10 border-2 border-rose-pink rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1.5 h-1.5 bg-rose-pink rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
