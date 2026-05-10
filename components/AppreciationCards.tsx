'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

export default function AppreciationCards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      id: 1,
      text: 'Thank you for being my first teacher, my best friend, and my greatest inspiration. Your love shaped who I am.',
      author: 'Your Loving Child',
      gradient: 'from-neon-pink to-neon-purple',
    },
    {
      id: 2,
      text: 'Your sacrifices, your patience, and your endless love have molded me into the person I am today. Forever grateful.',
      author: 'Forever Grateful',
      gradient: 'from-neon-purple to-neon-cyan',
    },
    {
      id: 3,
      text: 'In your arms, I found comfort. In your words, I found wisdom. In your heart, I found my eternal home.',
      author: 'With All My Heart',
      gradient: 'from-neon-cyan to-neon-pink',
    },
    {
      id: 4,
      text: 'No words can express how much you mean to me. You are my everything, my world, my universe, Mom.',
      author: 'Your Biggest Fan',
      gradient: 'from-neon-pink via-neon-purple to-neon-cyan',
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [-100, 100, -100],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-radial from-neon-purple/30 to-transparent rounded-full blur-3xl"
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
            Words of Appreciation
          </h2>
          <p className="text-xl text-gray-400">
            Heartfelt messages for the most special person in the world
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
              }}
              className="relative group card-reflection"
            >
              {/* Animated Glow */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-500`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Card Content */}
              <div className="relative glass-dark rounded-3xl p-10 h-full backdrop-blur-2xl border border-white/10">
                {/* Quote Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className={`inline-block p-4 bg-gradient-to-br ${testimonial.gradient} rounded-2xl mb-8 relative`}
                >
                  <Quote className="w-7 h-7 text-white" />
                  <div className="absolute inset-0 blur-xl bg-white opacity-30" />
                </motion.div>

                {/* Text */}
                <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`h-1 w-16 bg-gradient-to-r ${testimonial.gradient} rounded-full`} />
                  <p className="text-sm font-bold text-neon-cyan uppercase tracking-wider">
                    {testimonial.author}
                  </p>
                </div>

                {/* Heartbeat Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute bottom-6 right-6 text-5xl opacity-20"
                >
                  ❤️
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
