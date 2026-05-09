'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Play, X, Zap, Star, Rocket } from 'lucide-react'
import CurrencyConverter from './CurrencyConverter'
import CryptoDashboard from './CryptoDashboard'
import TerminalEmulator from './TerminalEmulator'
import BulkMailDemo from './BulkMailDemo'
import YouTubeDemo from './YouTubeDemo'

const projects = [
  { id: 'currency', title: 'Bulk Mail Sender', subtitle: 'SaaS Tool', description: 'End-to-end bulk email SaaS with Google OAuth, Gmail API integration for sending to 1,000+ recipients per batch.', tech: ['Node.js', 'Express', 'Google OAuth', 'Gmail API'], gradient: 'from-blue-500 to-cyan-400', icon: '📧', demo: 'bulkmail', featured: true },
  { id: 'crypto', title: 'Crypto Dashboard', subtitle: 'Live Data', description: 'Real-time cryptocurrency tracking with live prices from CoinGecko API, portfolio management, and price alerts.', tech: ['React.js', 'CoinGecko API', 'Framer Motion'], gradient: 'from-purple-500 to-pink-500', icon: '💰', demo: 'crypto', featured: true },
  { id: 'terminal', title: 'Terminal Portfolio', subtitle: 'CLI Tool', description: 'Interactive terminal-based portfolio accessible via npx, demonstrating Node.js expertise and DevEx-first thinking.', tech: ['Node.js', 'npm', 'CLI'], gradient: 'from-green-500 to-emerald-400', icon: '💻', demo: 'terminal', featured: false },
  { id: 'currency-converter', title: 'Currency Converter', subtitle: 'Live Forex', description: 'Real-time currency converter with live exchange rates across 150+ currency pairs and beautiful UI.', tech: ['JavaScript', 'Forex API', 'REST API'], gradient: 'from-amber-500 to-orange-400', icon: '💱', demo: 'currency', featured: false },
  { id: 'youtube', title: 'YouTube Player', subtitle: 'API Integration', description: 'YouTube Data API integration for ad-free search and playback with smooth user experience.', tech: ['YouTube API', 'JavaScript', 'HTML/CSS'], gradient: 'from-red-500 to-rose-500', icon: '🎬', demo: 'youtube', featured: false },
  { id: 'portfolio', title: 'Portfolio Builder', subtitle: 'LinkedIn Integration', description: 'Automated portfolio generation from LinkedIn data, cutting build time from hours to 60 seconds.', tech: ['React.js', 'Node.js', 'REST API', 'OAuth'], gradient: 'from-indigo-500 to-violet-500', icon: '🎨', demo: 'portfolio', featured: false },
]

export default function Projects() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-wider uppercase">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}><Rocket size={16} /></motion.div>
            My Work
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text glow-text">Projects</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted mt-4 max-w-2xl mx-auto">Click "Try Demo" to interact with live working demos of each project.</motion.p>
        </motion.div>

        <AnimatePresence>
          {activeDemo && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4" onClick={() => setActiveDemo(null)}>
              <motion.div initial={{ scale: 0.8, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: 50 }} transition={{ type: 'spring', damping: 25 }} className="bg-card rounded-2xl border border-white/10 w-full max-w-3xl max-h-[85vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
                <div className="flex items-center justify-between p-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}><Zap size={20} className="text-accent" /></motion.div>
                    <h3 className="font-bold text-lg">Live Demo</h3>
                  </div>
                  <button onClick={() => setActiveDemo(null)} className="p-2 rounded-lg hover:bg-white/5 transition-colors"><X size={20} /></button>
                </div>
                <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
                  {activeDemo === 'bulkmail' && <BulkMailDemo />}
                  {activeDemo === 'crypto' && <CryptoDashboard />}
                  {activeDemo === 'terminal' && <TerminalEmulator />}
                  {activeDemo === 'currency' && <CurrencyConverter />}
                  {activeDemo === 'youtube' && <YouTubeDemo />}
                  {activeDemo === 'portfolio' && (
                    <div className="text-center py-12">
                      <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }} className="text-6xl mb-4">🎨</motion.div>
                      <h3 className="text-2xl font-bold mb-4">Portfolio Builder</h3>
                      <p className="text-muted mb-6">Live demo available on GitHub with full LinkedIn integration.</p>
                      <a href="https://github.com/mrrishu4ever" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-purple-500 text-white font-semibold inline-flex items-center gap-2">
                        View on GitHub <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div key={project.id} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10, scale: 1.02 }} onHoverStart={() => setHoveredId(project.id)} onHoverEnd={() => setHoveredId(null)} className="group relative rounded-2xl bg-card/80 backdrop-blur-sm border border-white/5 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className={`h-1.5 relative overflow-hidden`}>
                <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-50`} />
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`} />
              </div>

              <div className="p-6 relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div animate={hoveredId === project.id ? { rotate: [0, -10, 10, 0], scale: 1.15 } : {}} transition={{ duration: 0.5 }} className="text-4xl">{project.icon}</motion.div>
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold">
                        <Star size={12} /> Featured
                      </motion.span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.gradient} text-white`}>{project.subtitle}</span>
                  </div>
                </div>

                <motion.h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</motion.h3>
                <p className="text-muted text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => <span key={t} className="px-2 py-1 rounded-md bg-white/5 text-xs text-muted">{t}</span>)}
                </div>

                <div className="flex gap-3">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveDemo(project.demo)} className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-bold btn-glow`}>
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}><Play size={16} /></motion.span>
                    Try Demo
                  </motion.button>
                  <motion.a href="https://github.com/mrrishu4ever" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }} className="p-3 rounded-xl bg-white/5 border border-white/10 text-secondary hover:text-white transition-colors">
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-16">
          <motion.a href="https://github.com/mrrishu4ever" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.3)' }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 font-bold hover:bg-white/5 transition-all">
            View All Projects on GitHub <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}