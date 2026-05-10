'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Heart } from 'lucide-react'
import { useState } from 'react'

export default function AIChatBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const quickMessages = [
    'I love you Mom ❤️',
    'Thank you for everything 🙏',
    'You are my inspiration 💫',
    'Best mom ever! 🌟',
  ]

  const handleSendMessage = (text: string) => {
    // In a real app, this would send the message
    console.log('Sending message:', text)
    setMessage('')
    // Show success animation
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-40 p-5 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-full shadow-2xl group"
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
          className="absolute inset-0 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan rounded-full blur-xl opacity-60"
        />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white relative z-10" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6 text-white relative z-10" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap glass-dark px-4 py-2 rounded-full text-sm text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Send Love to Mom 💌
          </motion.div>
        )}
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 left-8 z-40 w-96 max-w-[calc(100vw-4rem)]"
          >
            <div className="glass-dark rounded-3xl border border-white/10 neon-glow overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan p-6">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <Heart className="w-6 h-6 text-white fill-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Send Love to Mom</h3>
                    <p className="text-white/80 text-sm">Express your feelings</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Quick Messages */}
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm mb-3">Quick messages:</p>
                  {quickMessages.map((msg, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSendMessage(msg)}
                      className="w-full text-left px-4 py-3 glass-dark rounded-2xl text-white hover:bg-white/5 transition-colors border border-white/5"
                    >
                      {msg}
                    </motion.button>
                  ))}
                </div>

                {/* Custom Message */}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-gray-400 text-sm mb-3">Or write your own:</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && message.trim() && handleSendMessage(message)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-3 bg-dark-surface/50 text-white rounded-2xl border border-white/10 focus:border-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink/20 transition-all placeholder-gray-500 text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => message.trim() && handleSendMessage(message)}
                      disabled={!message.trim()}
                      className="p-3 bg-gradient-to-r from-neon-pink to-neon-purple rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed relative"
                    >
                      <Send className="w-5 h-5 text-white relative z-10" />
                      <div className="absolute inset-0 blur-xl bg-neon-pink opacity-50" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
