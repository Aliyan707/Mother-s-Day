'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function MemoryGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Fixed memory cards with uploaded images
  const memories = [
    {
      id: 1,
      title: 'Precious Moments',
      description: 'Every moment with you is a treasure',
      gradient: 'from-neon-pink to-neon-purple',
      image: '/Ima.jpeg',
    },
    {
      id: 2,
      title: 'Endless Love',
      description: 'Your love knows no bounds',
      gradient: 'from-neon-purple to-neon-cyan',
      image: '/Image.jpeg',
    },
    {
      id: 3,
      title: 'Beautiful Memories',
      description: 'Creating memories that last forever',
      gradient: 'from-neon-cyan to-neon-pink',
      image: '/Images.jpeg',
    },
    {
      id: 4,
      title: 'Forever Grateful',
      description: 'Thank you for everything, Mom',
      gradient: 'from-neon-pink via-neon-purple to-neon-cyan',
      image: '/imagine.jpeg',
    },
  ]

  return (
    <section
      id="memories"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-[700px] h-[700px] bg-gradient-radial from-neon-cyan/30 to-transparent rounded-full blur-3xl"
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
            Memories with Mom ❤️
          </h2>
          <p className="text-xl text-gray-400">
            Cherishing every precious moment together
          </p>
        </motion.div>

        {/* Fixed Memory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                zIndex: 10,
              }}
              className="relative group card-reflection"
            >
              {/* Glow Effect */}
              <motion.div
                className={`absolute -inset-1 bg-gradient-to-r ${memory.gradient} rounded-3xl blur-lg opacity-40 group-hover:opacity-80 transition duration-300`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Card Container */}
              <div className="relative glass-dark rounded-3xl overflow-hidden border border-white/10 h-80">
                {/* Actual Image */}
                <Image
                  src={memory.image}
                  alt={memory.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-5 h-5 text-neon-cyan" />
                      <h3 className="text-xl font-bold text-white">
                        {memory.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {memory.description}
                    </p>
                  </motion.div>
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
                  className="absolute -top-3 -right-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-full blur-sm" style={{ boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)' }} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Decorative Element */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl font-playfair text-gray-400 italic">
            "A mother's love is written in every memory we share"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
