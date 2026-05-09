'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Twitter, Mail, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'

const roles = ['Full Stack Developer', 'Java Backend Engineer', 'React.js Specialist', 'AWS Cloud Developer', 'Spring Boot Expert']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
        if (displayText === currentRole) setTimeout(() => setIsDeleting(true), 2500)
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
        if (displayText === '') { setIsDeleting(false); setRoleIndex((p) => (p + 1) % roles.length) }
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = []
    for (let i = 0; i < 100; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, size: Math.random() * 3 + 1, alpha: Math.random() * 0.5 + 0.2 })
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`; ctx.fill()
        particles.forEach((p2) => {
          const dx = p.x - p2.x, dy = p.y - p2.y, dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y); ctx.strokeStyle = `rgba(99, 102, 241, ${0.15 - dist / 1500})`; ctx.lineWidth = 0.5; ctx.stroke() }
        })
      })
      requestAnimationFrame(animate)
    }
    animate()
    const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden animated-gradient-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="particle" style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 15}s`, animationDuration: `${15 + Math.random() * 10}s` }} />
        ))}
      </div>

      <div className="absolute inset-0 scanlines pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -80 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="space-y-8">
            {/* Animated Badge */}
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium glow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Available for opportunities
              <motion.span animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                <Sparkles size={16} />
              </motion.span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary">Hi, I'm </span>
              <motion.span className="gradient-text glow-text" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                Rohit
              </motion.span>
              <br />
              <span className="text-primary">Kumar</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="h-14">
              <span className="text-2xl md:text-3xl text-secondary font-medium">
                {displayText}
                <span className="text-accent animate-pulse">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg text-muted max-w-lg leading-relaxed">
              Building production web applications with modern tech. Passionate about clean code, fast iterations, and measurable impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-4">
              <motion.a href="#projects" whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }} whileTap={{ scale: 0.95 }} className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-accent via-purple-500 to-pink-500 text-white font-bold text-lg btn-glow">
                View Projects
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowRight size={20} /></motion.span>
              </motion.a>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/20 text-primary font-bold text-lg hover:bg-white/5 transition-all">
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex gap-4 pt-4">
              {[
                { icon: Github, href: 'https://github.com/mrrishu4ever', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/rohitx05', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Mail, href: 'mailto:rktinku768@gmail.com', label: 'Email' },
              ].map((social, i) => (
                <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + i * 0.1 }} whileHover={{ y: -8, scale: 1.15, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }} className="relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group">
                  <social.icon size={24} />
                  <motion.span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Image with Animated RK Logo */}
          <motion.div initial={{ opacity: 0, scale: 0.5, rotate: -10 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.3, type: 'spring' }} className="relative flex justify-center lg:justify-end">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 border-2 border-dashed border-accent/30 rounded-full" />

            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="relative">
              <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0 bg-gradient-to-br from-accent via-purple-500 to-pink-500 rounded-full blur-3xl" />

              {/* Outer Ring with Dots */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute -inset-4">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="url(#grad)" strokeWidth="0.5" strokeDasharray="5 3" />
                  <defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6366f1" /><stop offset="100%" stopColor="#ec4899" /></linearGradient></defs>
                </svg>
              </motion.div>

              {/* Image */}
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-dark shadow-2xl"
              >
                <Image src="/profile.jpg" alt="Rohit Kumar" fill className="object-cover" />
              </motion.div>

              {/* Animated RK Badge Overlay */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 right-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent via-purple-500 to-pink-500 flex items-center justify-center shadow-xl border-4 border-dark"
              >
                <motion.span animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="text-2xl font-black text-white">
                  RK
                </motion.span>
                {/* Sparkles */}
                {[...Array(4)].map((_, i) => (
                  <motion.div key={i} animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], rotate: [0, 180] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} className="absolute w-1.5 h-1.5 bg-white rounded-full" style={{ top: `${15 + i * 20}%`, right: `${i % 2 === 0 ? -5 : 'auto'}`, left: `${i % 2 !== 0 ? -5 : 'auto'}` }} />
                ))}
              </motion.div>

              {/* Floating Badges */}
              <motion.div animate={{ y: [0, -15, 0], x: [0, 5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-2 -left-6 px-4 py-2 rounded-xl bg-card/90 backdrop-blur-sm border border-white/10 shadow-xl">
                <span className="text-sm font-bold text-green-400">● Open to Work</span>
              </motion.div>

              <motion.div animate={{ y: [0, 15, 0], x: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-1/3 -right-8 px-4 py-2 rounded-xl bg-card/90 backdrop-blur-sm border border-white/10 shadow-xl">
                <span className="text-sm font-bold flex items-center gap-1"><Zap size={14} className="text-yellow-400" /> 7.5 CGPA</span>
              </motion.div>

              {/* Tech Stack Floating Icons */}
              {['⚛️', '☕', '🟢', '☁️', '📦'].map((emoji, i) => (
                <motion.div key={emoji} animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6], rotate: [0, 10, -10, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }} className="absolute w-14 h-14 rounded-xl bg-card/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-2xl shadow-lg" style={{ top: `${15 + i * 18}%`, left: `${i % 2 === 0 ? '-12%' : 'auto'}`, right: `${i % 2 !== 0 ? '-12%' : 'auto'}` }}>
                  {emoji}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-3">
          <span className="text-xs text-muted uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-8 h-14 rounded-full border-2 border-white/20 flex justify-center pt-3">
            <motion.div animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-1.5 h-3 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}