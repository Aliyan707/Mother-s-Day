'use client'

import { useEffect, useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import UrduPoetry from '@/components/UrduPoetry'
import MemoryGallery from '@/components/MemoryGallery'
import Timeline from '@/components/Timeline'
import AppreciationCards from '@/components/AppreciationCards'
import WishesWall from '@/components/WishesWall'
import Footer from '@/components/Footer'
import FloatingCursor from '@/components/FloatingCursor'
import MusicPlayer from '@/components/MusicPlayer'
import AIChatBubble from '@/components/AIChatBubble'
import Loader from '@/components/Loader'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [musicStarted, setMusicStarted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Loading screen duration
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Try to play music on any user interaction
    const startMusic = () => {
      if (audioRef.current && !musicStarted) {
        audioRef.current.play().then(() => {
          setMusicStarted(true)
        }).catch(error => {
          console.log('Auto-play prevented:', error)
        })
      }
    }

    // Add event listeners for user interaction
    document.addEventListener('click', startMusic)
    document.addEventListener('keydown', startMusic)
    document.addEventListener('touchstart', startMusic)

    return () => {
      document.removeEventListener('click', startMusic)
      document.removeEventListener('keydown', startMusic)
      document.removeEventListener('touchstart', startMusic)
    }
  }, [musicStarted])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Custom Cursor */}
          <FloatingCursor />

          {/* Simple Static Background */}
          <div className="fixed inset-0 -z-10">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card" />

            {/* Subtle static glow effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
          </div>

          {/* Main Content */}
          <main className="relative">
            <Navbar />
            <Hero />

            {/* Emotional Section */}
            <section className="relative py-32">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-black gradient-text-dark mb-8 text-neon-glow">
                    To the woman who gave us everything
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Your love is the foundation of our lives. Your strength inspires us every day.
                    Your wisdom guides us through every challenge. Today, we celebrate you and
                    everything you mean to us. You are our universe, our light, our eternal blessing.
                  </p>
                </motion.div>
              </div>
            </section>

            <UrduPoetry />
            <MemoryGallery />
            <Timeline />
            <AppreciationCards />
            <WishesWall />
            <Footer />
          </main>

          {/* Floating UI Elements */}
          <MusicPlayer />
          <AIChatBubble />

          {/* Hidden Background Music */}
          <audio
            ref={audioRef}
            loop
            preload="auto"
            className="hidden"
          >
            <source src="/Background-music.mp3.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </motion.div>
      )}
    </>
  )
}
