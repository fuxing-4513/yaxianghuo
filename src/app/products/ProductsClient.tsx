'use client'

import Link from 'next/link'
import { useState } from 'react'

const allProducts = [
  { id: 1, name: '冰种飘花翡翠手镯', category: '成品', type: '手镯', desc: '冰透水润，飘花灵动，圈口58mm', price: '¥68,000', tag: '精品' },
  { id: 2, name: '帝王绿翡翠蛋面戒指', category: '成品', type: '戒指', desc: '正阳浓绿，收藏级，18K金镶', price: '¥128,000', tag: '收藏' },
  { id: 3, name: '玻璃种观音翡翠挂件', category: '成品', type: '挂件', desc: '通透起光，大师雕工', price: '¥45,000', tag: '孤品' },
  { id: 4, name: '紫罗兰翡翠珠链', category: '成品', type: '项链', desc: '紫气东来，种水俱佳', price: '¥86,000', tag: '精品' },
  { id: 5, name: '春带彩翡翠平安扣', category: '成品', type: '挂件', desc: '紫绿双色，圆润饱满', price: '¥32,000' },
  { id: 6, name: '冰种飘花翡翠如意', category: '成品', type: '挂件', desc: '种老水足，如意呈祥', price: '¥28,000' },
  { id: 7, name: '黄翡貔貅手把件', category: '成品', type: '手把件', desc: '金黄滋润，招财纳福', price: '¥18,000' },
  { id: 8, name: '墨翠关公牌', category: '成品', type: '挂件', desc: '墨翠打灯透绿，威武庄严', price: '¥56,000' },
  { id: 9, name: '莫西沙场口翡翠原石', category: '原石', type: '明料', desc: '皮壳老辣，赌色料，3.2kg', price: '面议', tag: '矿区' },
  { id: 10, name: '木那场口开窗原石', category: '原石', type: '开窗', desc: '开窗见绿，种老肉细，1.8kg', price: '面议', tag: '矿区' },
  { id: 11, name: '后江场口色料原石', category: '原石', type: '色料', desc: '满色表现，裂少可出挂件', price: '面议', tag: '矿区' },
  { id: 12, name: '大马坎水石原石', category: '原石', type: '水石', desc: '皮薄肉细，黄加绿表现', price: '面议', tag: '矿区' },
]

export default function ProductsClient() {
  const [filter, setFilter] = useState<'全部' | '成品' | '原石'>('全部')
  const filtered = filter === '全部' ? allProducts : allProducts.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-rich-950">
      {/* 页面标题 */}
      <section className="relative pt-24 pb-16 border-b border-burma-400/5">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] glow-gold" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[200px] glow-jade" />

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-[11px] text-burma-400 tracking-[0.25em] uppercase">Collection</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-ivory-50 mt-4 mb-4">
            精品<span className="text-gold-gradient">翡翠</span>
          </h1>
          <div className="divider-gold-center mb-6" />
          <p className="text-gray-400 max-w-lg mx-auto text-sm">缅甸矿区直供 · 每件皆为压箱之选</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* 筛选 */}
        <div className="flex justify-center gap-2 mb-14">
          {['全部', '成品', '原石'].map(f => (
            <button key={f} onClick={() => setFilter(f as typeof filter)}
              className={`px-6 py-2 text-xs rounded-full transition-all duration-300 tracking-wide ${
                filter === f
                  ? 'bg-burma-500/20 border border-burma-400/40 text-burma-300'
                  : 'bg-rich-800/60 text-gray-500 border border-rich-600 hover:border-burma-400/20 hover:text-gray-300'
              }`}>
              {f}
            </button>
          ))}
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p, i) => (
            <div key={p.id}
              className="group bg-rich-800/70 border border-rich-600/40 rounded-xl overflow-hidden hover:border-burma-400/25 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-burma-900/10">
              <div className="aspect-square bg-gradient-to-br from-jade-950/50 via-rich-800 to-burma-900/15 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-950/50 via-transparent to-transparent" />
                </div>
                {p.tag && (
                  <span className="absolute top-3 left-3 text-[9px] bg-burma-500/80 text-rich-950 font-semibold px-2 py-0.5 rounded tracking-wider z-10">
                    {p.tag}
                  </span>
                )}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-jade-400/15 to-burma-400/8 border border-jade-500/25 flex items-center justify-center group-hover:scale-110 group-hover:border-burma-400/35 transition-all duration-500">
                  {p.category === '原石' ? (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-burma-400/50" fill="currentColor">
                      <path d="M12 2C6.5 2 2 6.5 2 12c0 2 1 3 2 4s3 1 4 2 1 3 2 4c1-1 1-3 2-4s3 0 4-2 2-2 2-4c0-5.5-4.5-10-10-10z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="w-8 h-8 text-jade-400/50" fill="currentColor">
                      <path d="M12 2L4 8l2 4-2 4 2 4-2 4 8 6 8-6-2-4 2-4-2-4 2-4-8-6z" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] text-burma-400 tracking-wider uppercase">{p.category}</span>
                  <span className="text-[10px] text-gray-600">{p.type}</span>
                </div>
                <h3 className="text-sm font-semibold text-ivory-100 group-hover:text-burma-300 transition-colors font-serif">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{p.desc}</p>
                <div className="mt-4 pt-4 border-t border-rich-600/40 flex items-center justify-between">
                  <span className="text-sm font-bold text-burma-300">{p.price}</span>
                  <span className="text-[10px] text-gray-500 group-hover:text-burma-400 transition-colors">询价 →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部说明 */}
        <div className="mt-20 text-center border-t border-burma-400/5 pt-12">
          <p className="text-xs text-gray-500 max-w-lg mx-auto leading-relaxed">
            以上为部分精选藏品展示。如需查看更多藏品或预约线下品鉴，
            <Link href="/about#contact" className="text-burma-400 hover:text-burma-300 underline underline-offset-2 mx-1">请联系我们</Link>
            预约专属服务。
          </p>
        </div>
      </main>
    </div>
  )
}
