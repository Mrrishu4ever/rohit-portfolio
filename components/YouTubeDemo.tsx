'use client'

import { useState } from 'react'
import { Search, Play } from 'lucide-react'

const videos = [
  { id: '1', title: 'Build a Modern Web App in 2024', channel: 'Tech Tutorials', views: '125K views', color: 'from-red-500 to-rose-600' },
  { id: '2', title: 'React.js Best Practices', channel: 'Code Master', views: '89K views', color: 'from-blue-500 to-cyan-600' },
  { id: '3', title: 'AWS for Beginners', channel: 'Cloud Academy', views: '201K views', color: 'from-orange-500 to-amber-600' },
  { id: '4', title: 'Node.js Performance Tips', channel: 'Dev Masters', views: '67K views', color: 'from-green-500 to-emerald-600' },
]

export default function YouTubeDemo() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(videos)
  const [playing, setPlaying] = useState<typeof videos[0] | null>(null)

  const handleSearch = async () => {
    if (!query.trim()) return
    const filtered = videos.filter((v) => v.title.toLowerCase().includes(query.toLowerCase()))
    setResults(filtered.length ? filtered : videos)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">YouTube Ad-Free Player</h3>
      <div className="flex gap-3 mb-6">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSearch()} placeholder="Search videos..." className="flex-1 px-4 py-3 rounded-xl bg-dark border border-white/10 focus:border-accent focus:outline-none" />
        <button onClick={handleSearch} className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors"><Search size={18} />Search</button>
      </div>
      {playing && (
        <div className="mb-6 p-4 rounded-xl bg-dark border border-white/5">
          <div className="flex items-center gap-4">
            <div className={`w-24 h-16 rounded-lg bg-gradient-to-br ${playing.color} flex items-center justify-center`}><Play size={24} className="text-white" /></div>
            <div className="flex-1"><h4 className="text-white font-medium">{playing.title}</h4><p className="text-muted text-sm">{playing.channel}</p></div>
            <button onClick={() => setPlaying(null)} className="p-2 rounded-lg hover:bg-white/10">✕</button>
          </div>
          <p className="mt-3 text-sm text-green-400">✓ Ad-free playback enabled</p>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4">
        {results.map((v) => (
          <div key={v.id} onClick={() => setPlaying(v)} className="p-4 rounded-xl bg-dark border border-white/5 hover:border-accent/30 cursor-pointer transition-colors">
            <div className={`aspect-video rounded-lg bg-gradient-to-br ${v.color} flex items-center justify-center mb-3`}><Play size={32} className="text-white/50" /></div>
            <h4 className="text-white font-medium line-clamp-2">{v.title}</h4>
            <p className="text-muted text-sm mt-1">{v.channel}</p>
            <p className="text-muted text-xs">{v.views}</p>
          </div>
        ))}
      </div>
    </div>
  )
}