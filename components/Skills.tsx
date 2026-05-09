'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code, Award, Zap } from 'lucide-react'

const skills = [
  { name: 'JavaScript', level: 92, color: 'from-yellow-400 to-amber-500' },
  { name: 'React.js', level: 88, color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', level: 85, color: 'from-green-400 to-emerald-500' },
  { name: 'Java', level: 85, color: 'from-orange-400 to-red-500' },
  { name: 'Spring Boot', level: 80, color: 'from-green-400 to-teal-500' },
  { name: 'AWS', level: 72, color: 'from-orange-400 to-amber-500' },
  { name: 'MySQL', level: 82, color: 'from-blue-400 to-indigo-500' },
  { name: 'MongoDB', level: 75, color: 'from-green-400 to-emerald-600' },
]

const techStack = ['React', 'Node.js', 'Java', 'Spring', 'AWS', 'TypeScript', 'MongoDB', 'MySQL', 'Git', 'Docker', 'Vercel', 'Firebase']
const certifications = [
  { name: 'AWS Cloud Practitioner', issuer: 'AWS', date: '2024' },
  { name: 'Full Stack Development', issuer: 'Infosys', date: '2024' },
  { name: 'Machine Learning with Python', issuer: 'Infosys', date: '2024' },
  { name: 'Deep Learning', issuer: 'Infosys', date: '2024' },
]

const techColors = ['from-cyan-500 to-blue-500', 'from-green-500 to-emerald-500', 'from-orange-500 to-red-500', 'from-green-500 to-teal-500', 'from-orange-400 to-amber-500', 'from-blue-400 to-indigo-500', 'from-green-500 to-emerald-600', 'from-blue-500 to-indigo-600', 'from-orange-400 to-red-500', 'from-blue-400 to-cyan-500', 'from-gray-400 to-zinc-500', 'from-yellow-400 to-amber-500']

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-card/30 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-wider uppercase">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}><Code size={16} /></motion.div>
            What I Know
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold mt-2">
            Technical <span className="gradient-text glow-text">Skills</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills Progress */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-6">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}><Sparkles size={20} className="text-accent" /></motion.div>
              Core Competencies
            </h3>
            {skills.map((skill, i) => (
              <motion.div key={skill.name} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="flex justify-between mb-2">
                  <motion.span whileHover={{ scale: 1.05, x: 5 }} className="font-medium group-hover:text-accent transition-colors cursor-pointer">{skill.name}</motion.span>
                  <span className="text-muted font-mono">{skill.level}%</span>
                </div>
                <div className="h-3 bg-dark rounded-full overflow-hidden relative">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.1 }} className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}>
                    <motion.div animate={{ x: ['-100%', '200%'] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tech Stack & Certifications */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-10">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 4, repeat: Infinity }}><Zap size={20} className="text-accent" /></motion.div>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <motion.span key={tech} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05, type: 'spring' }} whileHover={{ scale: 1.15, y: -5, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }} className={`px-4 py-2.5 rounded-xl bg-gradient-to-r ${techColors[i]} text-white text-sm font-bold cursor-default shadow-lg`}>
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}><Award size={20} className="text-accent" /></motion.div>
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <motion.div key={cert.name} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 10, borderColor: 'rgba(99, 102, 241, 0.5)' }} className="flex items-center justify-between p-4 rounded-xl bg-dark/50 border border-white/5 transition-all cursor-pointer group">
                    <div>
                      <motion.div whileHover={{ x: 5 }} className="font-medium group-hover:text-accent transition-colors">{cert.name}</motion.div>
                      <div className="text-sm text-muted">{cert.issuer}</div>
                    </div>
                    <motion.span animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} className="px-3 py-1 rounded-full bg-accent/20 text-accent text-sm font-bold">
                      {cert.date}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}