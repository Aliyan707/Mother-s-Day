'use client'

import { motion } from 'framer-motion'
import { Sparkles as SparklesIcon } from 'lucide-react'

export default function Sparkles() {
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: sparkle.left,
            top: sparkle.top,
          }}
        >
          <SparklesIcon className="w-4 h-4 text-yellow-300" />
        </motion.div>
      ))}
    </div>
  )
}
