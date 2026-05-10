'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Sparkles, Camera, Heart } from 'lucide-react'
import { useState } from 'react'
import confetti from 'canvas-confetti'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const handleCelebrate = () => {
    // Confetti explosion
    const count = 200
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#ff4da6', '#a855f7', '#06b6d4'],
    }

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      })
    }

    fire(0.25, { spread: 26, startVelocity: 55 })
    fire(0.2, { spread: 60 })
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 })
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 })
    fire(0.1, { spread: 120, startVelocity: 45 })

    // Scroll to memories
    document.getElementById('memories')?.scrollIntoView({ behavior: 'smooth' })
  }

  const floatingHearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.3,
    x: (i % 2 === 0 ? 1 : -1) * (80 + Math.random() * 150),
    y: -80 - Math.random() * 150,
  }))

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-1/2 -left-1/4 w-[600px] h-[600px] bg-gradient-radial from-neon-pink/30 via-neon-purple/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [90, 0, 90],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-gradient-radial from-neon-purple/30 via-neon-cyan/20 to-transparent rounded-full blur-3xl"
        />
      </motion.div>

      {/* Floating Hearts Around Hero */}
      {floatingHearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.2, 0],
            x: heart.x,
            y: heart.y,
          }}
          transition={{
            duration: 4,
            delay: heart.delay,
            repeat: Infinity,
            repeatDelay: 3,
          }}
          className="absolute top-1/2 left-1/2 z-10"
        >
          <Heart className="w-8 h-8 text-neon-pink fill-neon-pink" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 77, 166, 0.8))' }} />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        {/* Sparkle Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <Sparkles className="w-16 h-16 text-neon-cyan" />
            <div className="absolute inset-0 blur-2xl bg-neon-cyan opacity-60" />
          </motion.div>
        </motion.div>

        {/* Main Heading with Typewriter Effect */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-playfair font-black mb-8 text-neon-glow leading-tight"
        >
          <span className="gradient-text-dark">Happy Mother's Day</span>
          <motion.span
            animate={{
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block ml-6"
          >
            ❤️
          </motion.span>
        </motion.h1>

        {/* Subtitle with Blur Fade */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 font-light max-w-4xl mx-auto leading-relaxed"
        >
          The purest love ever created deserves the most beautiful celebration.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCelebrate}
            className="group relative px-10 py-5 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan text-white rounded-full font-bold text-lg shadow-2xl overflow-hidden magnetic-button"
          >
            {/* Animated Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative flex items-center gap-3">
              Celebrate Mom 💖
            </span>
            {/* Glow Effect */}
            <div className="absolute inset-0 blur-2xl bg-neon-pink opacity-0 group-hover:opacity-60 transition-opacity" />
          </motion.button>

          {/* Secondary Button */}
          <motion.a
            href="#memories"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 glass-dark neon-glow rounded-full font-bold text-lg text-white hover:text-neon-pink transition-colors flex items-center gap-3 magnetic-button"
          >
            <Camera className="w-6 h-6" />
            Create Memories ✨
            <div className="absolute inset-0 blur-2xl bg-neon-purple opacity-0 group-hover:opacity-40 transition-opacity" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-8 h-12 border-2 border-neon-pink rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-2 h-2 bg-neon-pink rounded-full"
              style={{ boxShadow: '0 0 10px rgba(255, 77, 166, 0.8)' }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
