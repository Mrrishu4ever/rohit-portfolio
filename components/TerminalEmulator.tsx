'use client'

import { useState, useRef, useEffect } from 'react'

const commands: Record<string, string> = {
  help: `Available Commands:
  about      - Learn about Rohit
  skills     - View technical skills
  projects   - List featured projects
  contact    - Get contact info
  clear      - Clear terminal
  github     - Open GitHub
  linkedin   - Open LinkedIn`,
  about: `┌────────────────────────────────────────┐
│  ROHIT KUMAR - Full Stack Developer    │
│                                        │
│  B.E. CSE Student (2026)               │
│  Specializing in:                     │
│  • Java, Spring Boot                  │
│  • React.js, Node.js                  │
│  • AWS, MySQL, MongoDB                │
│                                        │
│  "Building things that matter."       │
└────────────────────────────────────────┘`,
  skills: `Technical Skills:
  Languages    Java, JavaScript, TypeScript
  Frameworks   Spring Boot, React.js, Node.js
  Databases    MySQL, MongoDB, Firebase
  Cloud        AWS (EC2, S3), Vercel, Render
  APIs         RESTful, Google OAuth, Gmail API`,
  projects: `Featured Projects:
  1. Bulk Mail Sender - Node.js, Gmail API
  2. Crypto Dashboard - React.js, CoinGecko
  3. Terminal Portfolio - Node.js, npm
  4. Currency Converter - JavaScript, Forex API
  5. YouTube Player - YouTube Data API
  6. Portfolio Builder - React.js, REST API`,
  contact: `Contact Information:
  Email:    rktinku768@gmail.com
  Phone:    +91 87575 87540
  GitHub:   github.com/mrrishu4ever
  LinkedIn: linkedin.com/in/rohitx05`,
}

interface Line { type: 'input' | 'output' | 'error'; content: string }

export default function TerminalEmulator() {
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', content: 'Welcome to Rohit\'s Terminal Portfolio!' },
    { type: 'output', content: 'Type "help" for available commands.\n' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => bottomRef.current?.scrollIntoView(), [lines])

  const process = (cmd: string) => {
    const c = cmd.toLowerCase().trim()
    if (c === 'clear') { setLines([]); return }
    if (c === 'github') { window.open('https://github.com/mrrishu4ever', '_blank'); setLines((p) => [...p, { type: 'input', content: `> ${cmd}` }, { type: 'output', content: 'Opening GitHub...' }]); return }
    if (c === 'linkedin') { window.open('https://linkedin.com/in/rohitx05', '_blank'); setLines((p) => [...p, { type: 'input', content: `> ${cmd}` }, { type: 'output', content: 'Opening LinkedIn...' }]); return }
    if (commands[c]) setLines((p) => [...p, { type: 'input', content: `> ${cmd}` }, { type: 'output', content: commands[c] }])
    else setLines((p) => [...p, { type: 'input', content: `> ${cmd}` }, { type: 'error', content: `Command not found: ${cmd}. Type "help" for commands.` }])
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && input.trim()) {
      setHistory((p) => [...p, input]); setHistIdx(-1); process(input); setInput('')
    } else if (e.key === 'ArrowUp') {
      if (history.length) {
        const ni = histIdx < history.length - 1 ? histIdx + 1 : histIdx
        setHistIdx(ni); setInput(history[history.length - 1 - ni])
      }
    } else if (e.key === 'ArrowDown') {
      if (histIdx > 0) { const ni = histIdx - 1; setHistIdx(ni); setInput(history[history.length - 1 - ni]) }
      else { setHistIdx(-1); setInput('') }
    }
  }

  return (
    <div className="rounded-xl bg-black/90 border border-white/10 overflow-hidden" onClick={() => inputRef.current?.focus()}>
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
        <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-500" /><div className="w-3 h-3 rounded-full bg-yellow-500" /><div className="w-3 h-3 rounded-full bg-green-500" /></div>
        <div className="flex-1 text-center text-xs text-muted">rohit@portfolio ~ terminal</div>
      </div>
      <div className="p-4 h-[400px] overflow-y-auto font-mono text-sm">
        {lines.map((l, i) => (
          <div key={i} className={`mb-1 whitespace-pre-wrap ${l.type === 'input' ? 'text-accent' : l.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>{l.content}</div>
        ))}
        <div className="flex items-center"><span className="text-accent mr-2">{'>'}</span><input ref={inputRef} type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKey} className="flex-1 bg-transparent text-green-400 outline-none" autoFocus spellCheck={false} /></div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}