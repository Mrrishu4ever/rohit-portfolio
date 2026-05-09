'use client'

import { useState, useEffect } from 'react'
import { ArrowRightLeft, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const currencies = [
  { code: 'USD', flag: '🇺🇸' }, { code: 'EUR', flag: '🇪🇺' }, { code: 'GBP', flag: '🇬🇧' },
  { code: 'INR', flag: '🇮🇳' }, { code: 'JPY', flag: '🇯🇵' }, { code: 'AUD', flag: '🇦🇺' },
  { code: 'CAD', flag: '🇨🇦' }, { code: 'CHF', flag: '🇨🇭' }, { code: 'CNY', flag: '🇨🇳' }, { code: 'BRL', flag: '🇧🇷' },
]

export default function CurrencyConverter() {
  const [amount, setAmount] = useState<number>(1)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [result, setResult] = useState<number | null>(null)
  const [rate, setRate] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchRate = async () => {
    if (!amount || amount <= 0) { setResult(null); setRate(null); return }
    setLoading(true)
    try {
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
      const data = await res.json()
      if (data.rates && data.rates[to]) {
        const r = data.rates[to]
        setRate(r)
        setResult(amount * r)
      }
    } catch {
      const fallback: Record<string, number> = { USD: 1, EUR: 0.92, GBP: 0.79, INR: 83.12, JPY: 149.50, AUD: 1.53, CAD: 1.36, CHF: 0.88, CNY: 7.24, BRL: 4.97 }
      const r = fallback[to] / fallback[from]
      setRate(r)
      setResult(amount * r)
    }
    setLoading(false)
  }

  useEffect(() => { const t = setTimeout(fetchRate, 500); return () => clearTimeout(t) }, [amount, from, to])

  const swap = () => { setFrom(to); setTo(from) }
  const fmt = (v: number) => v >= 1000 ? v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : v >= 1 ? v.toFixed(4) : v.toFixed(6)

  return (
    <div className="max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6">Currency Converter</h3>

      <div className="mb-6">
        <label className="block text-muted text-sm mb-2">Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 rounded-xl bg-dark border border-white/10 focus:border-accent focus:outline-none transition-colors text-lg font-mono" />
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-muted text-sm mb-2">From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-dark border border-white/10 focus:border-accent focus:outline-none transition-colors cursor-pointer">
            {currencies.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
          </select>
        </div>
        <button onClick={swap} className="mt-7 p-3 rounded-xl bg-accent/20 border border-accent/30 text-accent hover:bg-accent/30 transition-colors">
          <ArrowRightLeft size={20} />
        </button>
        <div className="flex-1">
          <label className="block text-muted text-sm mb-2">To</label>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-dark border border-white/10 focus:border-accent focus:outline-none transition-colors cursor-pointer">
            {currencies.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.code}</option>)}
          </select>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={result} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-purple-500/10 border border-accent/20 text-center">
          {loading ? (
            <div className="flex items-center justify-center gap-2 text-accent"><Loader2 size={20} className="animate-spin" /> Converting...</div>
          ) : result !== null ? (
            <>
              <div className="text-4xl font-bold gradient-text mb-2">{fmt(result)}</div>
              <div className="text-muted text-sm">{currencies.find((c) => c.code === to)?.flag} {to}</div>
              {rate && <div className="mt-3 text-xs text-muted">1 {from} = {rate.toFixed(4)} {to}</div>}
            </>
          ) : (
            <div className="text-muted">Enter an amount to convert</div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}