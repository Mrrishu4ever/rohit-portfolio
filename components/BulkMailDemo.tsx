'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, Send, CheckCircle, FileText } from 'lucide-react'

const sampleRecipients = [
  { email: 'john@example.com', name: 'John Smith' },
  { email: 'sarah@example.com', name: 'Sarah Jones' },
  { email: 'mike@example.com', name: 'Mike Wilson' },
  { email: 'emma@example.com', name: 'Emma Brown' },
  { email: 'david@example.com', name: 'David Lee' },
]

export default function BulkMailDemo() {
  const [recipients] = useState(sampleRecipients)
  const [subject, setSubject] = useState('Exciting Update from Our Team!')
  const [message, setMessage] = useState('Hi {name},\n\nWe have exciting news to share...\n\nBest,\nThe Team')
  const [sending, setSending] = useState(false)
  const [progress, setProgress] = useState(0)
  const [sent, setSent] = useState(false)

  const handleSend = async () => {
    setSending(true)
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((r) => setTimeout(r, 200))
      setProgress(i)
    }
    setSending(false)
    setSent(true)
  }

  if (sent) return (
    <div className="text-center py-12">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
        <CheckCircle size={40} className="text-green-500" />
      </motion.div>
      <h3 className="text-2xl font-bold mb-2">Emails Sent Successfully!</h3>
      <p className="text-muted mb-6">{recipients.length} emails delivered</p>
      <button onClick={() => { setSent(false); setProgress(0) }} className="px-6 py-3 rounded-xl bg-gradient-to-r from-accent to-purple-500 text-white font-semibold">Send Another</button>
    </div>
  )

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">Bulk Mail Sender Demo</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div onClick={() => {}} className="p-6 rounded-xl border-2 border-dashed border-white/20 hover:border-accent/50 bg-white/5 cursor-pointer transition-colors">
            <div className="flex flex-col items-center text-center">
              <Upload size={32} className="text-accent mb-3" />
              <p className="text-white font-medium">Drop CSV file here</p>
              <p className="text-muted text-sm">or click to browse</p>
            </div>
          </div>
          <div>
            <label className="block text-muted text-sm mb-2">Subject</label>
            <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-dark border border-white/10 focus:border-accent focus:outline-none" />
          </div>
          <div>
            <label className="block text-muted text-sm mb-2">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full px-4 py-3 rounded-xl bg-dark border border-white/10 focus:border-accent focus:outline-none resize-none" />
            <p className="text-muted text-xs mt-1">Use {'{name}'} for personalization</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-dark border border-white/5 text-center"><div className="text-3xl font-bold text-accent">{recipients.length}</div><div className="text-sm text-muted">Recipients</div></div>
            <div className="p-4 rounded-xl bg-dark border border-white/5 text-center"><div className="text-3xl font-bold text-purple-500">1000+</div><div className="text-sm text-muted">Max Capacity</div></div>
          </div>
          <div className="p-4 rounded-xl bg-dark border border-white/5 max-h-[200px] overflow-y-auto">
            <h4 className="text-white font-medium mb-3 flex items-center gap-2"><FileText size={16} className="text-purple-500" />Recipients</h4>
            {recipients.map((r, i) => <div key={i} className="flex justify-between text-sm py-1"><span className="text-white">{r.name}</span><span className="text-muted">{r.email}</span></div>)}
          </div>
          {sending && <div className="p-4 rounded-xl bg-dark border border-white/5"><div className="flex justify-between mb-2"><span className="text-white text-sm">Sending...</span><span className="text-accent font-mono">{progress}%</span></div><div className="h-2 bg-white/10 rounded-full"><motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full" /></div></div>}
          <button onClick={handleSend} disabled={sending} className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-purple-500 text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-50">
            <Send size={20} />{sending ? 'Sending...' : 'Send Emails'}
          </button>
        </div>
      </div>
    </div>
  )
}