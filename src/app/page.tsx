'use client'

import Link from 'next/link'
import { useState } from 'react'

// ── 缅甸佛塔 SVG ──
function PagodaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} fill="none">
      <path d="M20 2L4 18H36L20 2Z" fill="currentColor" opacity="0.9"/>
      <path d="M6 18H34L28 32H12L6 18Z" fill="currentColor" opacity="0.75"/>
      <path d="M10 32H30L24 44H16L10 32Z" fill="currentColor" opacity="0.6"/>
      <rect x="18" y="44" width="4" height="4" fill="currentColor" opacity="0.5"/>
    </svg>
  )
}

// ── 产品数据（占位） ──
const featuredProducts = [
  { id: 1, name: '冰种翡翠手镯', category: '成品', desc: '冰透水润，飘花灵动', price: '￥68,000', image: null },
  { id: 2, name: '帝王绿蛋面戒指', category: '成品', desc: '正阳浓绿，收藏级', price: '￥128,000', image: null },
  { id: 3, name: '玻璃种观音挂件', category: '成品', desc: '通透起光，雕工精湛', price: '￥45,000', image: null },
  { id: 4, name: '莫西沙场口原石', category: '原石', desc: '皮壳老辣，赌色料', price: '面议', image: null },
]

// ── 缅甸几何纹样 ──
function BurmaPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden select-none">
      <div className="absolute -top-20 -right-20 w-80 h-80 border border-burma-400 rounded-full" />
      <div className="absolute -top-16 -right-16 w-72 h-72 border border-burma-400/60 rounded-full" />
      <div className="absolute -top-12 -right-12 w-64 h-64 border border-burma-400/30 rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 border border-jade-600/40 rotate-45" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 border border-jade-600/25 rotate-45" />
    </div>
  )
}

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <BurmaPattern />

      {/* ── 导航 ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-rich-900/90 backdrop-blur border-b border-burma-400/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <PagodaIcon className="w-6 h-7 text-burma-400" />
            <span className="text-xl font-bold font-serif text-burma-300 tracking-widest">压箱货</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-ivory-100 hover:text-burma-300 transition-colors">首页</Link>
            <Link href="/products" className="text-sm text-gray-400 hover:text-burma-300 transition-colors">精品翡翠</Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-burma-300 transition-colors">关于我们</Link>
            <Link href="/about#contact" className="text-sm bg-burma-600 hover:bg-burma-500 text-rich-900 font-semibold px-4 py-1.5 rounded transition-colors">预约咨询</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* 背景光晕 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-jade-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-burma-700/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 w-full py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-burma-400/10 border border-burma-400/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-jade-400" />
                <span className="text-xs text-burma-300 tracking-wide">缅甸矿区 · 德宏直营</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-ivory-50 leading-tight mb-6">
                压箱之宝<br />
                <span className="text-burma-300">翡翠传家</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-2 max-w-lg">
                源自缅甸矿区，落地中缅边境德宏。
              </p>
              <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-lg">
                每一件压箱货，都是大自然的鬼斧神工与匠人精神的完美融合。
                中高端翡翠成品与原石直供——为有品位的人，留一件压箱之宝。
              </p>
              <div className="flex gap-4">
                <Link href="/products" className="bg-burma-500 hover:bg-burma-400 text-rich-900 font-semibold px-8 py-3 rounded transition-colors tracking-wide">探索精品</Link>
                <Link href="/about#contact" className="border border-burma-400/30 text-burma-300 hover:bg-burma-400/10 px-8 py-3 rounded transition-colors tracking-wide">预约私洽</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-72 h-72">
                {/* 几何装饰：缅甸金刚座造型 */}
                <div className="absolute inset-0 border-2 border-burma-400/20 rounded-sm rotate-3" />
                <div className="absolute inset-4 border border-jade-600/30 rounded-sm -rotate-3" />
                <div className="absolute inset-8 flex items-center justify-center">
                  <PagodaIcon className="w-20 h-24 text-burma-400/40" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-jade-500/20 flex items-center justify-center">
                    <span className="text-7xl">💎</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 品牌标语条 ── */}
      <section className="border-y border-burma-400/10 bg-rich-800/50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { title: '缅甸源头', desc: '矿区直供，源头品质保障', icon: '⛰️' },
            { title: '德宏落地', desc: '中缅边境，一手货源直达', icon: '🏛️' },
            { title: '压箱之选', desc: '每件皆精品，可传家之物', icon: '✨' },
          ].map((item, i) => (
            <div key={i} className="p-6">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-lg font-serif font-bold text-ivory-100 mt-3 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 精选展示 ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-xs text-burma-400 tracking-[0.2em] uppercase">Featured Collection</span>
          <h2 className="text-3xl font-serif font-bold text-ivory-50 mt-3 mb-4 border-burma">精选藏品</h2>
          <p className="text-gray-400 max-w-md mx-auto">每一件皆为压箱之宝，等待懂它的人</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p, i) => (
            <Link href="/products" key={p.id}
              className={`group bg-rich-800/80 border border-rich-600 rounded-xl overflow-hidden hover:border-burma-400/40 transition-all duration-500 animate-fade-up animate-fade-up-delay-${i + 1}`} >
              {/* 产品图片占位 */}
              <div className="aspect-square bg-gradient-to-br from-jade-950/60 via-rich-800 to-burma-900/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 animate-shimmer" />
                <span className="text-5xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700">
                  {p.category === '原石' ? '🪨' : '💎'}
                </span>
              </div>
              <div className="p-5">
                <span className="text-[10px] text-burma-400 tracking-wider uppercase">{p.category}</span>
                <h3 className="text-sm font-semibold text-ivory-100 mt-1 group-hover:text-burma-300 transition-colors">{p.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{p.desc}</p>
                <p className="text-sm font-bold text-burma-300 mt-3">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="text-sm text-burma-400 hover:text-burma-300 underline underline-offset-4 transition-colors">
            查看全部藏品 →
          </Link>
        </div>
      </section>

      {/* ── 品牌故事片段 ── */}
      <section className="bg-rich-800/50 border-y border-burma-400/10">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <span className="text-xs text-burma-400 tracking-[0.2em] uppercase">Brand Story</span>
          <h2 className="text-2xl font-serif font-bold text-ivory-50 mt-3 mb-8">缅甸之灵，德宏之韵</h2>
          <p className="text-gray-400 leading-loose max-w-2xl mx-auto text-sm">
            压箱货——源于缅甸矿区深处，每一块翡翠原石都历经亿万年的地壳淬炼。
            我们在中缅边境德宏设立运营中心，将缅甸矿区的一手货源带给每一位追求品质的藏家。
            <br /><br />
            不追求喧嚣的流量，只为少数懂翡翠的人，留存真正值得压箱的传家之宝。
          </p>
          <Link href="/about" className="inline-block mt-8 text-sm border border-burma-400/30 text-burma-300 hover:bg-burma-400/10 px-6 py-2 rounded transition-colors">
            了解更多 →
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-rich-900 border-t border-burma-400/10">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PagodaIcon className="w-5 h-5 text-burma-400" />
              <span className="text-lg font-bold font-serif text-burma-300 tracking-widest">压箱货</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              源自缅甸，兴于德宏。<br />
              中高端翡翠成品与原石。<br />
              压箱之宝，翡翠传家。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ivory-100 mb-4">快速导航</h4>
            <div className="space-y-2">
              <Link href="/products" className="block text-xs text-gray-400 hover:text-burma-300 transition-colors">精品翡翠</Link>
              <Link href="/about" className="block text-xs text-gray-400 hover:text-burma-300 transition-colors">关于我们</Link>
              <Link href="/about#contact" className="block text-xs text-gray-400 hover:text-burma-300 transition-colors">联系我们</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ivory-100 mb-4">联系方式</h4>
            <div className="space-y-2 text-xs text-gray-400">
              <p>📍 云南省德宏州瑞丽市</p>
              <p>📧 contact@yaxianghuo.com</p>
              <p className="text-burma-400 mt-4">关注公众号获取最新藏品</p>
            </div>
          </div>
        </div>
        <div className="border-t border-rich-600 py-6 text-center">
          <p className="text-[10px] text-gray-600">© 2026 压箱货 版权所有 · 缅甸翡翠 · 德宏直营</p>
        </div>
      </footer>
    </div>
  )
}
