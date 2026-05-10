'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-100 via-purple-100 to-pink-50"
      style={{ pointerEvents: 'none' }}
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="inline-block"
        >
          <Heart className="w-20 h-20 text-rose-pink fill-rose-pink" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-2xl font-playfair font-bold gradient-text"
        >
          Loading Love...
        </motion.h2>
      </div>
    </motion.div>
  )
}
