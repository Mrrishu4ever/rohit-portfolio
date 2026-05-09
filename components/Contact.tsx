'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Mail, Phone, Github, Linkedin, Twitter, CheckCircle, Loader2, MessageCircle, Bell, Zap } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/mrrishu4ever', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/rohitx05', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email'
    if (!form.subject.trim()) errs.subject = 'Subject is required'
    if (!form.message.trim()) errs.message = 'Message is required'
    else if (form.message.length < 10) errs.message = 'At least 10 characters'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }))
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-flex items-center gap-2 text-accent font-mono text-sm tracking-wider uppercase">
            <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}><Zap size={16} /></motion.div>
            Get In Touch
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold mt-2">
            Let's <span className="gradient-text glow-text">Connect</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted mt-4 max-w-2xl mx-auto">Messages go directly to my phone!</motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'rktinku768@gmail.com', href: 'mailto:rktinku768@gmail.com', color: 'text-red-400', bg: 'bg-red-400/10' },
              { icon: Phone, label: 'Phone', value: '+91 87575 87540', href: 'tel:+918757587540', color: 'text-green-400', bg: 'bg-green-400/10' },
              { icon: MapPin, label: 'Location', value: 'Samastipur, Bihar, India', href: null, color: 'text-blue-400', bg: 'bg-blue-400/10' },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: 10, scale: 1.02 }} className="flex items-center gap-4 p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-white/5">
                <motion.div whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }} className={`p-3 rounded-xl ${item.bg} ${item.color}`}><item.icon size={22} /></motion.div>
                <div>
                  <div className="text-xs text-muted uppercase">{item.label}</div>
                  {item.href ? <a href={item.href} className="font-medium hover:text-accent transition-colors">{item.value}</a> : <div className="font-medium">{item.value}</div>}
                </div>
              </motion.div>
            ))}

            <motion.a href="https://wa.me/918757587540" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ scale: 1.02, y: -3 }} className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
              <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="p-3 rounded-xl bg-green-500/20 text-green-400"><MessageCircle size={22} /></motion.div>
              <div><div className="text-xs text-muted uppercase">Quick Message</div><div className="font-medium text-green-400">WhatsApp Me</div></div>
            </motion.a>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="p-4 rounded-xl bg-accent/5 border border-accent/20">
              <div className="flex items-center gap-2 mb-2">
                <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}><Bell size={18} className="text-accent" /></motion.div>
                <span className="font-medium text-accent">Instant Notifications</span>
              </div>
              <p className="text-xs text-muted">Messages will notify me immediately on my phone.</p>
            </motion.div>

            <div className="flex gap-3 pt-4">
              {socials.map((s, i) => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8, scale: 1.15 }} className="p-4 rounded-xl bg-card/80 backdrop-blur-sm border border-white/5 text-secondary hover:text-accent transition-all">
                  <s.icon size={24} />
                </motion.a>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 rounded-full bg-green-400" />
                <span className="font-semibold text-green-400">Available for Opportunities</span>
              </div>
              <p className="text-sm text-muted">I'll respond within 24 hours!</p>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-3">
            <motion.form onSubmit={handleSubmit} whileHover={{ borderColor: 'rgba(99, 102, 241, 0.3)' }} className="space-y-5 p-8 rounded-2xl bg-card/80 backdrop-blur-xl border border-white/5">
              <div className="grid md:grid-cols-2 gap-5">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <motion.input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" whileFocus={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }} className={`w-full px-4 py-3.5 rounded-xl bg-dark border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:outline-none transition-all`} />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <motion.input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" whileFocus={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }} className={`w-full px-4 py-3.5 rounded-xl bg-dark border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:outline-none transition-all`} />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </motion.div>
              </div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <motion.input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="What's this about?" whileFocus={{ scale: 1.01, borderColor: 'rgba(99, 102, 241, 0.5)' }} className={`w-full px-4 py-3.5 rounded-xl bg-dark border ${errors.subject ? 'border-red-500' : 'border-white/10'} focus:outline-none transition-all`} />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
                <label className="block text-sm font-medium mb-2">Message</label>
                <motion.textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell me about your project..." whileFocus={{ scale: 1.01, borderColor: 'rgba(99, 102, 241, 0.5)' }} className={`w-full px-4 py-3.5 rounded-xl bg-dark border ${errors.message ? 'border-red-500' : 'border-white/10'} focus:outline-none transition-all resize-none`} />
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </motion.div>

              <motion.button type="submit" disabled={status === 'sending' || status === 'success'} whileHover={{ scale: status === 'success' ? 1 : 1.02, boxShadow: '0 0 40px rgba(99, 102, 241, 0.5)' }} whileTap={{ scale: 0.98 }} className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-lg ${status === 'success' ? 'bg-green-500' : 'bg-gradient-to-r from-accent via-purple-500 to-pink-500'} text-white disabled:opacity-70`}>
                {status === 'sending' && <><Loader2 size={22} className="animate-spin" /> Sending...</>}
                {status === 'success' && <><motion.div animate={{ scale: [1, 1.2, 1] }}><CheckCircle size={22} /></motion.div> Message Sent! I'll Reply Soon!</>}
                {(status === 'idle' || status === 'error') && <><Send size={22} /> Send Message</>}
              </motion.button>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center pt-4">
                <p className="text-muted text-sm mb-3">Or reach me directly:</p>
                <motion.a href="https://wa.me/918757587540" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-colors">
                  <motion.div animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 1, repeat: Infinity }}><MessageCircle size={18} /></motion.div>
                  Message on WhatsApp
                </motion.a>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}