'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Sparkles } from 'lucide-react'

const quickLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact']
const socials = [
  { icon: '💻', href: 'https://github.com/mrrishu4ever' },
  { icon: '💼', href: 'https://linkedin.com/in/rohitx05' },
  { icon: '🐦', href: '#' },
  { icon: '📧', href: 'mailto:rktinku768@gmail.com' },
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="py-16 border-t border-white/5 bg-card/30 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              {/* Animated RK Logo */}
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="relative">
                <motion.div animate={{ rotate: [0, 5, -5, 0], borderRadius: ['20%', '30%', '20%', '25%', '20%'] }} transition={{ duration: 2, repeat: Infinity }} className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg overflow-hidden">
                  <motion.span animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="text-lg relative z-10">RK</motion.span>
                  {[...Array(4)].map((_, i) => (
                    <motion.div key={i} animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }} className="absolute w-1.5 h-1.5 bg-white rounded-full" style={{ top: `${15 + i * 20}%`, right: i % 2 === 0 ? '-4px' : 'auto', left: i % 2 !== 0 ? '-4px' : 'auto' }} />
                  ))}
                </motion.div>
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -inset-2 bg-gradient-to-br from-accent to-pink-500 rounded-2xl blur-lg -z-10" />
              </motion.div>
              <motion.span whileHover={{ scale: 1.05 }} className="text-xl font-bold">Rohit Kumar</motion.span>
            </div>
            <p className="text-muted text-sm mb-6 leading-relaxed">Full Stack Developer building production web applications with Java, Spring Boot, React.js, and AWS.</p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <motion.a key={i} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5, scale: 1.15 }} className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg hover:border-accent/30 transition-all">
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}><Sparkles size={18} className="text-accent" /></motion.div>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <motion.li key={link} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}><Sparkles size={18} className="text-accent" /></motion.div>
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm text-muted">
              <p className="hover:text-accent transition-colors">rktinku768@gmail.com</p>
              <p className="hover:text-accent transition-colors">+91 87575 87540</p>
              <p className="hover:text-accent transition-colors">Samastipur, Bihar, India</p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted text-sm flex items-center gap-1">
            Built with{' '}
            <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><Heart size={14} className="text-red-500" /></motion.span>
            using Next.js & Tailwind CSS
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-muted text-sm">
            © {new Date().getFullYear()}{' '}
            <motion.span animate={{ color: ['#6366f1', '#a855f7', '#ec4899', '#6366f1'] }} transition={{ duration: 4, repeat: Infinity }} className="font-semibold">Rohit Kumar</motion.span>
            . All rights reserved.
          </motion.p>
        </motion.div>
      </div>

      {/* Back to Top */}
      <motion.button onClick={scrollToTop} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} whileHover={{ scale: 1.15, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }} whileTap={{ scale: 0.9 }} className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-gradient-to-r from-accent to-purple-500 text-white flex items-center justify-center shadow-lg z-50">
        <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><ArrowUp size={22} /></motion.div>
      </motion.button>
    </footer>
  )
}