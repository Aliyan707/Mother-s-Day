'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Upload, X, Image as ImageIcon } from 'lucide-react'

interface UploadedImage {
  id: string
  url: string
  file: File
}

export default function UploadGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [images, setImages] = useState<UploadedImage[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      handleFiles(Array.from(files))
    }
  }

  const handleFiles = (files: File[]) => {
    const newImages = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      url: URL.createObjectURL(file),
      file,
    }))
    setImages((prev) => [...prev, ...newImages])
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith('image/')
    )
    handleFiles(files)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const removeImage = (id: string) => {
    setImages((prev) => prev.filter((img) => img.id !== id))
  }

  return (
    <section
      id="memories"
      ref={ref}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold gradient-text mb-4">
            Memories with Mom ❤️
          </h2>
          <p className="text-xl text-gray-600">
            Upload and cherish your precious moments together
          </p>
        </motion.div>

        {/* Upload Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative glass rounded-3xl p-12 text-center transition-all duration-300 ${
              isDragging ? 'glow scale-105 border-rose-pink' : ''
            }`}
          >
            <motion.div
              animate={{
                scale: isDragging ? 1.1 : 1,
              }}
              className="flex flex-col items-center"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Upload className="w-16 h-16 text-rose-pink mb-4" />
              </motion.div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Upload Your Memories
              </h3>
              <p className="text-gray-600 mb-6">
                Drag and drop images here, or click to browse
              </p>

              <label className="cursor-pointer">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-rose-pink to-lavender-soft text-white rounded-full font-semibold shadow-lg"
                >
                  Choose Files
                </motion.div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </motion.div>

            {/* Animated Border */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute inset-0 rounded-3xl border-2 border-dashed border-rose-pink/30 pointer-events-none"
            />
          </div>
        </motion.div>

        {/* Image Gallery */}
        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative group aspect-square"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-pink to-lavender-soft rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300" />

                {/* Image Container */}
                <div className="relative h-full glass rounded-2xl overflow-hidden">
                  <img
                    src={image.url}
                    alt="Memory"
                    className="w-full h-full object-cover"
                  />

                  {/* Remove Button */}
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => removeImage(image.id)}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
