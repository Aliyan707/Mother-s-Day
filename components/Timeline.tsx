'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Baby, Heart, GraduationCap, Home, Sparkles, Crown } from 'lucide-react'

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const milestones = [
    {
      id: 1,
      icon: Baby,
      title: 'First Steps',
      description: 'When you held my hand and taught me to walk through life',
      year: 'Childhood',
      color: 'from-neon-pink to-neon-purple',
    },
    {
      id: 2,
      icon: Heart,
      title: 'Unconditional Love',
      description: 'Every hug, every kiss, every moment of endless care and devotion',
      year: 'Always',
      color: 'from-neon-purple to-neon-cyan',
    },
    {
      id: 3,
      icon: GraduationCap,
      title: 'Life Lessons',
      description: 'The wisdom, values, and strength you instilled in my soul',
      year: 'Growing Up',
      color: 'from-neon-cyan to-neon-pink',
    },
    {
      id: 4,
      icon: Crown,
      title: 'My Queen',
      description: 'You are and will always be the queen of my heart',
      year: 'Forever',
      color: 'from-neon-pink via-neon-purple to-neon-cyan',
    },
  ]

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-neon-purple/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-playfair font-black gradient-text-dark mb-6 text-neon-glow">
            Mother's Love Timeline
          </h2>
          <p className="text-xl text-gray-400">
            A journey through precious moments and eternal love
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-pink via-neon-purple to-neon-cyan hidden md:block opacity-30" />

          {/* Milestones */}
          <div className="space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="w-full md:w-5/12 glass-dark rounded-3xl p-8 relative group card-reflection border border-white/10"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute -inset-1 bg-gradient-to-r ${milestone.color} rounded-3xl blur-lg opacity-30 group-hover:opacity-70 transition duration-500`}
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />

                    <div className="relative">
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`p-4 bg-gradient-to-br ${milestone.color} rounded-2xl relative`}>
                          <Icon className="w-7 h-7 text-white" />
                          <div className="absolute inset-0 blur-xl bg-white opacity-30" />
                        </div>
                        <span className="text-sm font-bold text-neon-cyan uppercase tracking-wider">
                          {milestone.year}
                        </span>
                      </div>

                      <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Icon */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-2xl relative`}
                    >
                      <Sparkles className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 blur-2xl bg-white opacity-50" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
