'use client'

import { motion } from 'framer-motion'
import { Heart, Instagram, Facebook, Twitter, Mail, Github } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: '#', label: 'Email' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="relative py-20 overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-neon-pink/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent mb-16"
        />

        {/* Main Content */}
        <div className="text-center space-y-10">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <Heart className="w-12 h-12 text-neon-pink fill-neon-pink" />
              <div className="absolute inset-0 blur-2xl bg-neon-pink opacity-60" />
            </motion.div>
            <h3 className="text-4xl font-playfair font-black gradient-text-dark">
              Mother's Day
            </h3>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-3xl sm:text-4xl font-playfair text-white mb-4 text-neon-glow">
              "Paradise lies beneath the feet of mothers"
            </p>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="text-5xl"
            >
              ❤️
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass-dark rounded-full hover:neon-glow transition-all border border-white/10 group relative"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 text-neon-pink group-hover:text-white transition-colors" />
                  <div className="absolute inset-0 blur-xl bg-neon-pink opacity-0 group-hover:opacity-50 transition-opacity" />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm text-gray-500 space-y-3 pt-8"
          >
            <p className="text-lg text-gray-400">Made with ❤️ for all the amazing mothers in the world</p>
            <p>© 2026 Mother's Day Celebration. All rights reserved.</p>
          </motion.div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-neon-pink rounded-full blur-sm"
            style={{
              left: `${15 + i * 10}%`,
              bottom: `${10 + (i % 3) * 5}%`,
            }}
          />
        ))}
      </div>
    </footer>
  )
}
