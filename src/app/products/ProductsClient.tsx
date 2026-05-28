'use client'

import Link from 'next/link'
import { useState } from 'react'

// ── 产品数据 ──
const allProducts = [
  // 成品
  { id: 1, name: '冰种翡翠手镯', category: '成品', type: '手镯', desc: '冰透水润，飘花灵动，圈口58mm', price: '￥68,000', image: '💎' },
  { id: 2, name: '帝王绿蛋面戒指', category: '成品', type: '戒指', desc: '正阳浓绿，收藏级，18K金镶', price: '￥128,000', image: '💍' },
  { id: 3, name: '玻璃种观音挂件', category: '成品', type: '挂件', desc: '通透起光，雕工精湛', price: '￥45,000', image: '📿' },
  { id: 4, name: '紫罗兰翡翠项链', category: '成品', type: '项链', desc: '紫气东来，种水俱佳', price: '￥86,000', image: '💎' },
  { id: 5, name: '春带彩平安扣', category: '成品', type: '挂件', desc: '紫绿双色，圆润饱满', price: '￥32,000', image: '💎' },
  { id: 6, name: '冰种飘花如意', category: '成品', type: '挂件', desc: '冰透飘花，如意呈祥', price: '￥28,000', image: '💎' },
  { id: 7, name: '黄翡貔貅手把件', category: '成品', type: '手把件', desc: '金黄滋润，招财纳福', price: '￥18,000', image: '💎' },
  { id: 8, name: '墨翠关公牌', category: '成品', type: '挂件', desc: '墨翠打灯透绿，威武庄严', price: '￥56,000', image: '💎' },
  // 原石
  { id: 9, name: '莫西沙场口原石', category: '原石', type: '明料', desc: '皮壳老辣，赌色料，3.2kg', price: '面议', image: '🪨' },
  { id: 10, name: '木那场口开窗料', category: '原石', type: '开窗', desc: '开窗见绿，种老肉细，1.8kg', price: '面议', image: '🪨' },
  { id: 11, name: '后江场口色料', category: '原石', type: '色料', desc: '满色表现，裂少可出挂件', price: '面议', image: '🪨' },
  { id: 12, name: '大马坎水石', category: '原石', type: '水石', desc: '皮薄肉细，黄加绿表现', price: '面议', image: '🪨' },
]

export default function ProductsClient() {
  const [filter, setFilter] = useState<'全部' | '成品' | '原石'>('全部')

  const filtered = filter === '全部' ? allProducts : allProducts.filter(p => p.category === filter)

  return (
    <div className="min-h-screen">
      {/* 导航 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-rich-900/90 backdrop-blur border-b border-burma-400/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold font-serif text-burma-300 tracking-widest">压箱货</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-gray-400 hover:text-burma-300 transition-colors">首页</Link>
            <Link href="/products" className="text-sm text-burma-300 transition-colors">精品翡翠</Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-burma-300 transition-colors">关于我们</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs text-burma-400 tracking-[0.2em] uppercase">Collection</span>
            <h1 className="text-4xl font-serif font-bold text-ivory-50 mt-3 mb-4">精品翡翠</h1>
            <p className="text-gray-400 max-w-lg mx-auto text-sm">缅甸矿区直供，每一件皆为压箱之选</p>
          </div>

          {/* 筛选 */}
          <div className="flex justify-center gap-3 mb-12">
            {['全部', '成品', '原石'].map(f => (
              <button key={f} onClick={() => setFilter(f as typeof filter)}
                className={`px-5 py-2 text-sm rounded-full transition-colors ${
                  filter === f ? 'bg-burma-600 text-rich-900 font-semibold' : 'bg-rich-800 text-gray-400 border border-rich-600 hover:border-burma-400/30'
                }`}>
                {f}
              </button>
            ))}
          </div>

          {/* 产品网格 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map(p => (
              <div key={p.id} className="group bg-rich-800/80 border border-rich-600 rounded-xl overflow-hidden hover:border-burma-400/40 transition-all duration-500">
                <div className="aspect-square bg-gradient-to-br from-jade-950/60 via-rich-800 to-burma-900/20 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700">{p.image}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] text-burma-400 tracking-wider uppercase">{p.category}</span>
                    <span className="text-[10px] text-gray-600">·</span>
                    <span className="text-[10px] text-gray-500">{p.type}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-ivory-100 group-hover:text-burma-300 transition-colors">{p.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{p.desc}</p>
                  <p className="text-sm font-bold text-burma-300 mt-3">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-rich-900 border-t border-burma-400/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-[10px] text-gray-600">© 2026 压箱货 版权所有</p>
        </div>
      </footer>
    </div>
  )
}
