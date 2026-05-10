'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function FloatingHearts() {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    size: 20 + Math.random() * 30,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-100vh',
            opacity: [0, 0.6, 0],
            x: [0, 50, -50, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: heart.left,
          }}
        >
          <Heart
            className="text-rose-pink fill-rose-pink opacity-30"
            style={{ width: heart.size, height: heart.size }}
          />
        </motion.div>
      ))}
    </div>
  )
}
