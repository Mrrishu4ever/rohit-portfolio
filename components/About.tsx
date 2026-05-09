'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, Calendar, Sparkles, Zap } from 'lucide-react'

const stats = [
  { icon: '⚡', value: '6+', label: 'Projects Shipped', color: 'from-blue-500 to-cyan-400' },
  { icon: '💼', value: '2+', label: 'Months Experience', color: 'from-purple-500 to-pink-400' },
  { icon: '🏆', value: '4', label: 'Certifications', color: 'from-amber-500 to-orange-400' },
  { icon: '🎓', value: '2026', label: 'Graduation Year', color: 'from-green-500 to-emerald-400' },
]

const highlights = [
  'Full Stack Developer specializing in Java, Spring Boot, React.js, Node.js, and AWS',
  'Built and deployed 6+ production web applications serving real users',
  'Reduced page load times by 20% through optimized data-fetching patterns',
  'Automated portfolio generation cutting build time from hours to 60 seconds',
  'Published npm package with global accessibility via npx command',
]

export default function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-wider uppercase">
            <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}><Sparkles size={16} /></motion.span>
            Get to know me
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold mt-2">
            About <span className="gradient-text glow-text">Me</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Card with Animated RK Logo */}
          <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
            <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-gradient-to-br from-accent via-purple-500 to-pink-500 rounded-3xl blur-3xl" />

            <div className="relative p-8 rounded-3xl bg-card/80 backdrop-blur-xl border border-white/5">
              {/* Animated RK Logo */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-40 h-40 mx-auto mb-6 relative"
              >
                {/* Glow ring */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30" />

                {/* Main circle */}
                <motion.div className="absolute inset-2 rounded-full bg-gradient-to-br from-accent via-purple-500 to-pink-500 flex items-center justify-center shadow-xl overflow-hidden">
                  <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 bg-white/20" />
                  <motion.span animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity }} className="text-5xl font-black text-white relative z-10">
                    RK
                  </motion.span>
                  {/* Sparkles */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div key={i} animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0], rotate: [0, 180] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} className="absolute w-2 h-2 bg-white rounded-full" style={{ top: `${10 + i * 15}%`, right: `${i % 2 === 0 ? '-8%' : 'auto'}`, left: `${i % 2 !== 0 ? '-8%' : 'auto'}` }} />
                  ))}
                </motion.div>

                {/* Outer glow */}
                <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -inset-4 bg-gradient-to-br from-accent to-pink-500 rounded-full blur-xl -z-10" />
              </motion.div>

              <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-center mb-1">
                Rohit Kumar
              </motion.h3>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-accent text-center font-medium mb-6">
                Full Stack Developer
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                {[
                  { icon: MapPin, value: 'Samastipur, Bihar, India' },
                  { icon: Mail, value: 'rktinku768@gmail.com' },
                  { icon: Phone, value: '+91 87575 87540' },
                  { icon: Calendar, value: 'Expected Graduation: 2026' },
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 10 }} className="flex items-center gap-3">
                    <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} className="p-2 rounded-lg bg-accent/10 text-accent">
                      <item.icon size={18} />
                    </motion.div>
                    <span className="text-secondary text-sm">{item.value}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Floating Badges */}
              <motion.div animate={{ y: [0, -8, 0], rotate: [0, 3, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-3 -right-3 px-4 py-2 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 text-sm font-bold">
                Available
              </motion.div>

              <motion.div animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-3 -left-3 px-4 py-2 rounded-xl bg-accent/20 border border-accent/30 text-accent text-sm font-bold flex items-center gap-1">
                <Zap size={14} className="text-yellow-400" /> B.E. CSE | 7.5 CGPA
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05, y: -5, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.2)' }} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-white/5 cursor-pointer">
                  <motion.div animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }} className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-xl mb-3`}>
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}><Sparkles size={20} className="text-accent" /></motion.span>
                What I Do
              </h3>
              <ul className="space-y-3">
                {highlights.map((highlight, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-3">
                    <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-accent to-purple-500 flex-shrink-0" />
                    <span className="text-secondary">{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <motion.a href="#contact" whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99, 102, 241, 0.5)' }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-purple-500 text-white font-bold btn-glow">
                Let's Work Together
              </motion.a>
              <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 font-bold hover:bg-white/5 transition-all">
                See My Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}