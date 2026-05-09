'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Download, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouse)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'py-3 bg-dark/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Animated Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Glow effect following mouse */}
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.4) 0%, transparent 70%)`,
                }}
              />

              {/* Main Logo Container */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  rotate: [0, 5, -5, 0],
                  borderRadius: ['20%', '30%', '20%', '25%', '20%']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-accent via-purple-500 to-pink-500 flex items-center justify-center shadow-lg overflow-hidden"
              >
                {/* Inner glow */}
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-1 bg-white/20 rounded-xl"
                />

                {/* Animated letters */}
                <motion.span
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  className="text-lg font-black text-white relative z-10"
                >
                  RK
                </motion.span>

                {/* Sparkle effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      rotate: [0, 180],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.6,
                    }}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      top: `${20 + i * 25}%`,
                      right: `${i === 1 ? 0 : i === 2 ? '20%' : '10%'}`,
                    }}
                  />
                ))}
              </motion.div>

              {/* Shadow glow */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-2 bg-gradient-to-br from-accent to-pink-500 rounded-2xl blur-lg -z-10"
              />
            </div>
            <motion.span
              whileHover={{ scale: 1.05, x: 5 }}
              className="font-bold text-lg hidden sm:block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Rohit Kumar
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg text-secondary hover:text-primary hover:bg-white/5 transition-all text-sm font-medium group overflow-hidden"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="relative z-10 inline-block"
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <motion.a
              href="/resume.pdf"
              download="Rohit_Kumar_Resume.pdf"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-all"
            >
              <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <Download size={16} />
              </motion.div>
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Resume</span>
            </motion.a>

            <motion.a
              href="mailto:rktinku768@gmail.com"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent to-purple-500 text-white text-sm font-bold transition-all overflow-hidden relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <span>Hire Me</span>
                <motion.div animate={{ x: [0, 3, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                  <ExternalLink size={14} />
                </motion.div>
              </span>
            </motion.a>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-secondary hover:text-primary hover:bg-white/5 transition-all font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="/resume.pdf"
                download
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 font-medium mt-4"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
              <motion.a
                href="mailto:rktinku768@gmail.com"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-accent to-purple-500 text-white font-bold mt-2"
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}