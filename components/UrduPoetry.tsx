'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function UrduPoetry() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const poems = [
    {
      id: 1,
      text: 'ماں کی دعا وقت تو کیا\nنصیب بھی بدل دیتی ہے ❤️',
      translation: "A mother's prayer changes not just time, but destiny itself",
    },
    {
      id: 2,
      text: 'جنت کا ہر لمحہ دیدار کیا تھا،\nماں نے جب گود میں اٹھایا تھا ❤️',
      translation: 'Every moment of paradise was witnessed, when mother held me in her lap',
    },
    {
      id: 3,
      text: 'دنیا کی ہر محبت سے حسین ہے ماں،\nخدا کی رحمت کا دوسرا نام ہے ماں ❤️',
      translation: "Mother is more beautiful than every love in the world, Mother is another name for God's mercy",
    },
  ]

  return (
    <section
      id="poetry"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[600px] h-[600px] bg-gradient-radial from-neon-purple/30 to-transparent rounded-full blur-3xl"
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
            Words of Love
          </h2>
          <p className="text-xl text-gray-400">
            Beautiful Urdu poetry celebrating mothers
          </p>
        </motion.div>

        {/* Poetry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {poems.map((poem, index) => (
            <motion.div
              key={poem.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="relative group card-reflection"
            >
              {/* Animated Glow Border */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition duration-500"
                animate={{
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Card Content */}
              <div className="relative glass-dark rounded-3xl p-10 h-full backdrop-blur-2xl border border-white/10">
                {/* Decorative Corners */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-neon-pink rounded-tr-3xl opacity-50" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-neon-purple rounded-bl-3xl opacity-50" />

                {/* Urdu Text */}
                <div className="text-center mb-8">
                  <p className="text-3xl sm:text-4xl font-urdu leading-loose text-white whitespace-pre-line text-neon-glow">
                    {poem.text}
                  </p>
                </div>

                {/* Translation */}
                <div className="text-center pt-6 border-t border-white/10">
                  <p className="text-sm text-gray-400 italic leading-relaxed">
                    {poem.translation}
                  </p>
                </div>

                {/* Floating Sparkle */}
                <motion.div
                  animate={{
                    y: [-8, 8, -8],
                    rotate: [0, 180, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-4 -right-4"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full blur-sm" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
