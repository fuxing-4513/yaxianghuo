'use client'

import Link from 'next/link'

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero */}
      <section className="relative pt-24 pb-16 border-b border-gold-400/5">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] glow-gold" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">About</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-rich-800 mt-4 mb-4">
            关于<span className="text-gold-gradient">压箱货</span>
          </h1>
          <div className="divider-gold-center mb-6" />
          <p className="text-rich-500 max-w-xl mx-auto text-sm leading-relaxed">
            缅甸之灵 · 德宏之韵
          </p>
        </div>
      </section>

      {/* 品牌故事 */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">Brand Story</span>
            <h2 className="text-2xl font-serif font-bold text-rich-800 mt-3 mb-6">缅甸之灵，德宏之韵</h2>
            <div className="space-y-4 text-sm text-rich-500 leading-relaxed">
              <p>
                压箱货诞生于中缅边境的德宏傣族景颇族自治州。这里与缅甸山水相连，是中国通往缅甸的重要门户，也是翡翠进入中国市场的最前沿。
              </p>
              <p>
                创始人世代从事翡翠贸易，在缅甸帕敢矿区拥有深厚的资源网络。每一块原石从矿区开采、筛选到运输，都经过严格把控，确保品质纯正、来源可靠。
              </p>
              <p>
                「压箱货」这个名字，来源于中国传统中人们将最珍贵的物品压在箱底以示珍重的习俗。我们希望每一件从压箱货走出翡翠，都能成为藏家心中真正值得压箱传家的珍品。
              </p>
            </div>
          </div>

          {/* 装饰区块 */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-jade-950/40 via-rich-800 to-gold-900/15 rounded-xl border border-gold-400/10 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gold-pattern opacity-30" />
              <div className="relative z-10 text-center p-12">
                {/* 佛塔 SVG */}
                <svg viewBox="0 0 100 120" className="w-24 h-28 mx-auto mb-6" fill="none">
                  <defs>
                    <linearGradient id="abtGold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#fde68a" /><stop offset="50%" stopColor="#c8960c" /><stop offset="100%" stopColor="#8b6508" />
                    </linearGradient>
                  </defs>
                  <ellipse cx="50" cy="115" rx="35" ry="3" fill="url(#abtGold)" opacity="0.1" />
                  <rect x="20" y="100" width="60" height="8" rx="1" fill="url(#abtGold)" opacity="0.3" />
                  <rect x="25" y="94" width="50" height="7" rx="1" fill="url(#abtGold)" opacity="0.35" />
                  <polygon points="50,70 30,80 30,94 70,94 70,80" fill="url(#abtGold)" opacity="0.4" />
                  <path d="M32 80 Q50 45 50 28 Q50 45 68 80 Z" fill="url(#abtGold)" opacity="0.45" />
                  <ellipse cx="50" cy="40" rx="10" ry="2.5" fill="url(#abtGold)" opacity="0.35" />
                  <line x1="50" y1="28" x2="50" y2="12" stroke="url(#abtGold)" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="50" cy="8" r="3" fill="#fde68a" opacity="0.5" />
                </svg>
                <p className="text-xs text-gold-400/60 leading-relaxed">
                  缅甸帕敢矿区<br />亿万年地质淬炼<br />只为这一刻的相遇
                </p>
              </div>
            </div>
            {/* 装饰环 */}
            <div className="absolute -inset-4 border border-gold-400/5 rounded-xl -z-10" />
          </div>
        </div>
      </section>

      {/* 德宏与缅甸 */}
      <section className="border-t border-gold-400/5 bg-cream-100/30">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">Where We Are</span>
            <h2 className="text-2xl font-serif font-bold text-rich-800 mt-3 mb-4">德宏 · 中缅边境翡翠门户</h2>
            <div className="divider-gold-center mb-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-cream-100/60 border border-cream-200/40 rounded-xl p-8">
              <h3 className="text-lg font-serif font-bold text-gold-300 mb-4">🇲🇲 缅甸帕敢</h3>
              <p className="text-xs text-rich-500 leading-relaxed mb-4">
                缅甸克钦邦帕敢（Hpakant）地区是世界上最大、最优质的翡翠产区。这里出产的翡翠以质地细腻、色泽浓艳而闻名。
              </p>
              <p className="text-xs text-rich-400 leading-relaxed">
                我们与帕敢多家矿区建立了长期稳定的合作关系，从源头上确保每块翡翠的品质与来源可靠性。所有原石均经过专业地质鉴定，确保天然A货。
              </p>
            </div>

            <div className="bg-cream-100/60 border border-cream-200/40 rounded-xl p-8">
              <h3 className="text-lg font-serif font-bold text-gold-300 mb-4">🇨🇳 云南德宏</h3>
              <p className="text-xs text-rich-500 leading-relaxed mb-4">
                德宏傣族景颇族自治州与缅甸接壤，拥有瑞丽、畹町等多个国家级口岸，是中缅翡翠贸易的核心枢纽。
              </p>
              <p className="text-xs text-rich-400 leading-relaxed">
                我们在德宏州瑞丽市设立品牌运营中心，借助地理优势第一时间获取矿区最新货源。同时为全国藏家提供线下品鉴、实物看货等专属服务。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 联系我们 */}
      <section id="contact" className="border-t border-gold-400/5">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">Contact</span>
            <h2 className="text-2xl font-serif font-bold text-rich-800 mt-3 mb-4">联系我们</h2>
            <div className="divider-gold-center mb-6" />
            <p className="text-rich-500 text-sm">预约专属私洽服务 · 线下品鉴 · 藏品咨询</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: '📍', title: '地址', content: '云南省德宏傣族景颇族自治州\n瑞丽市' },
              { icon: '📧', title: '邮箱', content: 'contact@yaxianghuo.com' },
              { icon: '💬', title: '微信', content: '关注微信公众号\n获取最新藏品资讯' },
            ].map((c, i) => (
              <div key={i} className="bg-cream-100/60 border border-cream-200/40 rounded-xl p-8 text-center hover:border-gold-400/15 transition-colors">
                <span className="text-3xl mb-4 block">{c.icon}</span>
                <h3 className="text-sm font-semibold text-rich-800 mb-3">{c.title}</h3>
                <p className="text-xs text-rich-400 leading-relaxed whitespace-pre-line">{c.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/"
              className="inline-flex items-center gap-2 text-xs text-gold-400 hover:text-gold-300 border-b border-gold-400/30 hover:border-gold-400/60 pb-1 transition-colors tracking-wide">
              ← 返回首页
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
