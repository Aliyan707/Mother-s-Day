'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="loading-screen"
    >
      <div className="text-center">
        {/* Animated Heart */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="inline-block mb-8"
        >
          <Heart className="w-24 h-24 text-neon-pink fill-neon-pink neon-glow-strong" />
        </motion.div>

        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl font-playfair font-bold gradient-text-dark mb-4"
        >
          Loading Love...
        </motion.h2>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-dark-surface rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan"
          />
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 bg-neon-pink rounded-full blur-sm"
            style={{
              left: `${30 + i * 10}%`,
              top: `${50 + (i % 2) * 10}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
