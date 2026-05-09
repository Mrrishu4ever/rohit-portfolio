'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const experiences = [
  { title: 'Frontend Developer Intern', company: 'Orbytez.com', date: 'Mar 2025 - Apr 2025', description: 'Delivered responsive UI modules in React.js with cross-browser compatibility.', highlights: ['Built 3 responsive UI modules in React.js', 'Integrated 4 RESTful API endpoints', 'Reduced page load time by 20%', 'Refactored 500+ lines of legacy JavaScript'], gradient: 'from-accent to-purple-500' },
  { title: 'Full Stack Developer', company: 'Personal Projects', date: '2022 - Present', description: 'Building and maintaining production applications including SaaS tools and developer utilities.', highlights: ['Shipped 6+ production web applications', 'Built end-to-end bulk email SaaS', 'Created npm package with global accessibility', 'Integrated multiple third-party APIs'], gradient: 'from-purple-500 to-pink-500' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-card/30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-wider uppercase">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}><Sparkles size={16} /></motion.div>
            My Journey
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold mt-2">
            Work <span className="gradient-text glow-text">Experience</span>
          </motion.h2>
        </motion.div>

        <div className="relative">
          <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true }} className="absolute left-8 md:left-1/2 top-0 w-px bg-gradient-to-b from-accent via-purple-500 to-pink-500" />

          {experiences.map((exp, i) => (
            <motion.div key={exp.title} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className={`relative flex flex-col md:flex-row gap-8 mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} animate={{ boxShadow: ['0 0 0 0 rgba(99, 102, 241, 0.4)', '0 0 0 15px rgba(99, 102, 241, 0)', '0 0 0 0 rgba(99, 102, 241, 0.4)'] }} transition={{ duration: 2, repeat: Infinity }} className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-accent to-purple-500 border-4 border-dark z-10" />

              <div className={`flex-1 ml-16 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <motion.div whileHover={{ scale: 1.02, y: -5, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }} className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-white/5">
                  <motion.div animate={{ background: ['linear-gradient(90deg, #6366f1, #a855f7)', 'linear-gradient(90deg, #a855f7, #ec4899)', 'linear-gradient(90deg, #6366f1, #a855f7)'] }} transition={{ duration: 4, repeat: Infinity }} className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4">
                    {exp.date}
                  </motion.div>

                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <p className="text-accent text-sm mb-4 font-medium">{exp.company}</p>
                  <p className="text-secondary text-sm mb-4">{exp.description}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <motion.li key={j} initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: j * 0.1 }} className="flex items-start gap-2 text-sm text-secondary">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-r from-accent to-purple-500 flex-shrink-0" />
                        {h}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {['React.js', 'JavaScript', 'Node.js', 'REST APIs'].map((t) => <span key={t} className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs">{t}</span>)}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education with Animated RK Logo */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }} className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20">
          <div className="flex items-center gap-3 mb-6">
            {/* Animated RK Badge */}
            <motion.div animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity }} className="text-lg font-black text-white">RK</motion.span>
              {[...Array(4)].map((_, i) => (
                <motion.div key={i} animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} className="absolute w-1.5 h-1.5 bg-white rounded-full" style={{ top: '10%', right: i % 2 === 0 ? '-5%' : 'auto', left: i % 2 !== 0 ? '-5%' : 'auto' }} />
              ))}
            </motion.div>
            <h3 className="text-xl font-bold">Education</h3>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="font-bold text-lg">B.E. in Computer Science & Engineering</div>
              <div className="text-secondary">Vinayaka Mission Kirupananda Variyar Engineering College</div>
              <div className="text-muted text-sm">Salem, Tamil Nadu</div>
            </div>

            <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} className="text-right">
              <div className="text-4xl font-bold gradient-text">7.5 / 10</div>
              <div className="text-muted text-sm">CGPA</div>
              <div className="text-muted text-sm">2022 - 2026</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}