'use client'

import { motion } from 'framer-motion'
import { Music, Play, Pause, SkipForward, SkipBack } from 'lucide-react'
import { useState } from 'react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-8 right-8 z-40 hidden lg:block"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="glass-dark rounded-3xl p-6 border border-white/10 neon-glow w-80"
      >
        {/* Vinyl Animation */}
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            animate={{
              rotate: isPlaying ? 360 : 0,
            }}
            transition={{
              duration: 3,
              repeat: isPlaying ? Infinity : 0,
              ease: 'linear',
            }}
            className="relative w-16 h-16 bg-gradient-to-br from-neon-pink via-neon-purple to-neon-cyan rounded-full flex items-center justify-center"
          >
            <div className="w-6 h-6 bg-dark-bg rounded-full" />
            <div className="absolute inset-0 blur-xl bg-neon-pink opacity-50" />
          </motion.div>

          <div className="flex-1">
            <h4 className="text-white font-bold text-sm mb-1">Mother's Love</h4>
            <p className="text-gray-400 text-xs">Emotional Melody</p>
          </div>

          <Music className="w-5 h-5 text-neon-cyan" />
        </div>

        {/* Audio Wave Animation */}
        <div className="flex items-center justify-center gap-1 h-12 mb-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                height: isPlaying ? [10, 30, 10] : 10,
              }}
              transition={{
                duration: 0.5,
                repeat: isPlaying ? Infinity : 0,
                delay: i * 0.05,
                ease: 'easeInOut',
              }}
              className="w-1 bg-gradient-to-t from-neon-pink to-neon-purple rounded-full"
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 glass-dark rounded-full border border-white/10"
          >
            <SkipBack className="w-4 h-4 text-gray-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full relative"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white" />
            )}
            <div className="absolute inset-0 blur-xl bg-neon-pink opacity-50" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 glass-dark rounded-full border border-white/10"
          >
            <SkipForward className="w-4 h-4 text-gray-400" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
