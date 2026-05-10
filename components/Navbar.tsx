'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const navOpacity = useTransform(scrollY, [0, 100], [0.8, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Poetry', href: '#poetry' },
    { name: 'Memories', href: '#memories' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Wishes', href: '#wishes' },
  ]

  return (
    <motion.nav
      style={{ opacity: navOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-dark neon-glow py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer group"
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
              <Heart className="w-8 h-8 text-neon-pink fill-neon-pink" />
              <div className="absolute inset-0 blur-xl bg-neon-pink opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <span className="text-2xl font-playfair font-bold gradient-text-dark">
              Mother's Day
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors group"
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-pink to-neon-purple group-hover:w-full transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-neon-purple/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-dark neon-glow"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-neon-pink" />
            ) : (
              <Menu className="w-6 h-6 text-neon-pink" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass-dark rounded-2xl p-4 neon-glow"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-neon-pink font-medium transition-colors border-b border-white/5 last:border-0"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{
          scaleX: useTransform(scrollY, [0, 2000], [0, 1]),
        }}
      />
    </motion.nav>
  )
}
