'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function FloatingParticles() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    size: 15 + Math.random() * 25,
    type: Math.random() > 0.5 ? 'heart' : 'dot',
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: '110vh', opacity: 0 }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.6, 0.8, 0.6, 0],
            x: [0, 30, -30, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: particle.left,
          }}
        >
          {particle.type === 'heart' ? (
            <Heart
              className="text-neon-pink"
              style={{
                width: particle.size,
                height: particle.size,
                filter: 'drop-shadow(0 0 10px rgba(255, 77, 166, 0.6))',
              }}
            />
          ) : (
            <div
              className="rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan"
              style={{
                width: particle.size / 2,
                height: particle.size / 2,
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}
