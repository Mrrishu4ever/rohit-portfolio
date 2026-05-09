'use client'

import { useState, useEffect, useRef } from 'react'
import { RefreshCw, TrendingUp, TrendingDown } from 'lucide-react'

const coins = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', color: 'from-orange-400 to-amber-500' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', color: 'from-purple-400 to-indigo-500' },
  { id: 'tether', name: 'Tether', symbol: 'USDT', color: 'from-green-400 to-emerald-500' },
  { id: 'binancecoin', name: 'BNB', symbol: 'BNB', color: 'from-yellow-400 to-amber-500' },
  { id: 'solana', name: 'Solana', symbol: 'SOL', color: 'from-cyan-400 to-blue-500' },
  { id: 'ripple', name: 'XRP', symbol: 'XRP', color: 'from-gray-400 to-zinc-500' },
]

export default function CryptoDashboard() {
  const [prices, setPrices] = useState<Record<string, { price: number; change: number }>>({})
  const [loading, setLoading] = useState(true)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchPrices = async () => {
    try {
      setLoading(true)
      const ids = coins.map((c) => c.id).join(',')
      const res = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`)
      const data = await res.json()
      const newPrices: Record<string, { price: number; change: number }> = {}
      coins.forEach((coin) => {
        if (data[coin.id]) {
          newPrices[coin.id] = { price: data[coin.id].usd, change: data[coin.id].usd_24h_change || 0 }
        }
      })
      setPrices(newPrices)
      setLastUpdate(new Date())
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPrices() }, [])
  useEffect(() => { const i = setInterval(fetchPrices, 60000); return () => clearInterval(i) }, [])

  const fmt = (p: number) => p >= 1000 ? `$${p.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : p >= 1 ? `$${p.toFixed(2)}` : `$${p.toFixed(6)}`

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">Live Crypto Prices</h3>
          <p className="text-muted text-sm">{lastUpdate ? `Updated: ${lastUpdate.toLocaleTimeString()}` : 'Loading...'}</p>
        </div>
        <button onClick={fetchPrices} disabled={loading} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors disabled:opacity-50">
          <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
          Refresh
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {coins.map((coin) => {
          const pd = prices[coin.id]
          const up = (pd?.change || 0) >= 0
          return (
            <div key={coin.id} className="p-4 rounded-xl bg-dark border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${coin.color} flex items-center justify-center font-bold text-white`}>{coin.symbol.charAt(0)}</div>
                <div>
                  <div className="font-semibold">{coin.symbol}</div>
                  <div className="text-xs text-muted">{coin.name}</div>
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold">{pd ? fmt(pd.price) : '...'}</div>
                <div className={`flex items-center gap-1 text-sm ${up ? 'text-green-400' : 'text-red-400'}`}>
                  {up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                  {pd ? `${up ? '+' : ''}${pd.change.toFixed(2)}%` : '...'}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <p className="text-center text-muted text-xs">Powered by CoinGecko API</p>
    </div>
  )
}