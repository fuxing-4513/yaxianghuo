'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

/* ════════════ 黄金佛塔 SVG (仰光大金塔风格) ════════════ */
function GoldenPagoda({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 280" className={className} fill="none">
      <defs>
        <linearGradient id="pgGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="30%" stopColor="#d4a017" />
          <stop offset="60%" stopColor="#c8960c" />
          <stop offset="85%" stopColor="#8b6508" />
          <stop offset="100%" stopColor="#6b4d06" />
        </linearGradient>
        <linearGradient id="pgGold2" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="50%" stopColor="#c8960c" />
          <stop offset="100%" stopColor="#6b4d06" />
        </linearGradient>
        <filter id="goldGlow">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* 底部光晕 */}
      <ellipse cx="100" cy="270" rx="80" ry="10" fill="url(#pgGold2)" opacity="0.15" filter="url(#softGlow)" />

      {/* 基座 - 多层方形 */}
      <rect x="35" y="220" width="130" height="16" rx="1" fill="url(#pgGold)" opacity="0.5" />
      <rect x="40" y="210" width="120" height="14" rx="1" fill="url(#pgGold)" opacity="0.55" />
      <rect x="45" y="198" width="110" height="16" rx="1" fill="url(#pgGold)" opacity="0.6" />
      <rect x="52" y="186" width="96" height="16" rx="1" fill="url(#pgGold)" opacity="0.65" />
      <rect x="60" y="175" width="80" height="15" rx="1" fill="url(#pgGold)" opacity="0.7" />

      {/* 八角形过渡 */}
      <polygon points="100,155 70,165 70,175 100,185 130,175 130,165" fill="url(#pgGold)" opacity="0.72" />

      {/* 钟形主体 */}
      <path d="M72 160 Q70 130 78 105 L122 105 Q130 130 128 160 Z" fill="url(#pgGold)" opacity="0.78" filter="url(#goldGlow)" />

      {/* 钟形上的环带装饰 */}
      <ellipse cx="100" cy="120" rx="24" ry="5" fill="none" stroke="#fde68a" strokeWidth="1.5" opacity="0.6" />
      <ellipse cx="100" cy="135" rx="26" ry="4" fill="none" stroke="#fde68a" strokeWidth="1" opacity="0.5" />

      {/* 莲花座 */}
      <path d="M82 108 Q90 98 100 98 Q110 98 118 108 L115 112 Q108 106 100 106 Q92 106 85 112 Z" fill="url(#pgGold2)" opacity="0.8" />

      {/* 塔尖 - 多重环 */}
      <ellipse cx="100" cy="88" rx="12" ry="3" fill="url(#pgGold2)" opacity="0.7" />
      <ellipse cx="100" cy="80" rx="9" ry="2.5" fill="url(#pgGold2)" opacity="0.6" />
      <ellipse cx="100" cy="73" rx="7" ry="2" fill="url(#pgGold2)" opacity="0.55" />
      <ellipse cx="100" cy="67" rx="5.5" ry="1.8" fill="url(#pgGold2)" opacity="0.5" />
      <ellipse cx="100" cy="61" rx="4" ry="1.4" fill="url(#pgGold2)" opacity="0.45" />
      <ellipse cx="100" cy="56" rx="3" ry="1" fill="url(#pgGold2)" opacity="0.4" />

      {/* 伞盖 */}
      <path d="M90 50 L110 50 L108 46 L92 46 Z" fill="#fde68a" opacity="0.8" />
      <path d="M92 44 L108 44 L106 41 L94 41 Z" fill="#fde68a" opacity="0.7" />
      <line x1="100" y1="41" x2="100" y2="30" stroke="#fde68a" strokeWidth="2" opacity="0.8" />

      {/* 钻石宝顶 */}
      <circle cx="100" cy="26" r="4" fill="#fef3c7" opacity="0.9" filter="url(#goldGlow)" />
      <circle cx="100" cy="26" r="2" fill="white" opacity="0.5" />

      {/* 底部台阶 */}
      <rect x="20" y="234" width="160" height="4" rx="1" fill="url(#pgGold)" opacity="0.25" />
      <rect x="10" y="242" width="180" height="4" rx="1" fill="url(#pgGold)" opacity="0.18" />
    </svg>
  )
}

/* ════════════ 蒲甘佛塔剪影 ════════════ */
function BaganSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 200" className={className} fill="none" preserveAspectRatio="none">
      <defs>
        <linearGradient id="baganFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8960c" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#c8960c" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* 地平线 */}
      <line x1="0" y1="180" x2="800" y2="180" stroke="url(#baganFade)" strokeWidth="1" />
      {/* 大佛塔 1 */}
      <path d="M60 180 L60 120 L55 120 L55 115 L50 115 L48 100 L52 100 L52 95 L60 80 L68 95 L68 100 L72 100 L70 115 L65 115 L65 120 L60 120 Z" fill="#c8960c" opacity="0.09" />
      <path d="M60 140 L60 180" stroke="#c8960c" strokeWidth="0.5" opacity="0.12" />
      {/* 佛塔群 */}
      <path d="M150 180 L150 130 L145 130 L145 108 L155 108 L155 130 L150 130 Z" fill="#c8960c" opacity="0.07" />
      <path d="M240 180 L240 145 L246 145 L246 140 L244 140 L244 125 L252 125 L252 130 L248 130 L248 140 L250 140 L250 145 L256 145 L256 180 Z" fill="#c8960c" opacity="0.06" />
      <path d="M340 180 L340 150 L343 150 L343 135 L345 135 L345 115 L355 115 L355 130 L353 130 L353 145 L355 145 L355 150 L360 150 L360 180 Z" fill="#c8960c" opacity="0.08" />
      <path d="M450 180 L450 140 L447 140 L447 125 L453 125 L453 140 L450 140 Z" fill="#c8960c" opacity="0.06" />
      <path d="M530 180 L530 135 L535 135 L535 125 L538 125 L538 105 L548 105 L548 120 L545 120 L545 130 L548 130 L548 135 L555 135 L555 180 Z" fill="#c8960c" opacity="0.08" />
      <path d="M640 180 L640 150 L643 150 L643 140 L640 140 L640 122 L650 122 L650 135 L647 135 L647 145 L650 145 L650 150 L655 150 L655 180 Z" fill="#c8960c" opacity="0.07" />
      <path d="M720 180 L720 155 L725 155 L725 148 L722 148 L722 130 L732 130 L732 145 L728 145 L728 155 L730 155 L730 180 Z" fill="#c8960c" opacity="0.06" />
      {/* 树木剪影 */}
      <path d="M110 180 Q108 165 112 155 Q115 165 113 180" fill="#c8960c" opacity="0.04" />
      <path d="M210 180 Q208 168 213 158 Q216 168 214 180" fill="#c8960c" opacity="0.04" />
      <path d="M420 180 Q418 165 422 156 Q425 165 423 180" fill="#c8960c" opacity="0.04" />
      <path d="M610 180 Q608 168 613 160 Q616 168 614 180" fill="#c8960c" opacity="0.04" />
      <path d="M760 180 Q758 170 763 162 Q766 170 764 180" fill="#c8960c" opacity="0.04" />
    </svg>
  )
}

/* ════════════ 帕敢矿山剪影 ════════════ */
function JadeMine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 300" className={className} fill="none" preserveAspectRatio="none">
      <defs>
        <linearGradient id="mineSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#064e3b" stopOpacity="0.3" />
          <stop offset="60%" stopColor="#111" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <linearGradient id="mineGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      {/* 远山轮廓 */}
      <path d="M0 120 Q80 60 160 100 Q240 40 320 85 Q400 30 480 75 Q560 50 640 90 Q720 60 800 100 L800 180 L0 180 Z" fill="#0f0f0f" opacity="0.6" />
      <path d="M0 140 Q100 90 200 120 Q300 70 400 110 Q500 80 600 115 Q700 85 800 130 L800 200 L0 200 Z" fill="#111" />

      {/* 矿山台阶 - 矿坑 */}
      <path d="M150 200 L180 180 L350 180 L380 200 Z" fill="#141414" />
      <path d="M180 180 L210 165 L340 165 L350 180 Z" fill="#161616" />
      <path d="M210 165 L235 152 L320 152 L340 165 Z" fill="#181818" />
      {/* 矿坑纹理 */}
      <path d="M200 200 L210 180 L230 180 M250 200 L260 165 L280 165 M300 200 L300 180 L310 180 M340 200 L330 165 L320 165" stroke="#1a1a1a" strokeWidth="1" />

      {/* 右矿山 */}
      <path d="M480 200 L510 170 L650 170 L680 200 Z" fill="#131313" />
      <path d="M510 170 L530 150 L630 150 L650 170 Z" fill="#151515" />
      <path d="M530 150 L550 135 L610 135 L630 150 Z" fill="#171717" />
      <path d="M520 180 L540 160 L550 160 M590 180 L600 155 L610 155 M640 180 L630 160 L620 160" stroke="#1a1a1a" strokeWidth="0.8" />

      {/* 前景 - 山脚地面 + 人物剪影 */}
      <path d="M0 230 Q200 200 400 220 Q600 195 800 230 L800 300 L0 300 Z" fill="#0a0a0a" />

      {/* 远处人物剪影 - 矿工 */}
      <g opacity="0.2">
        {/* 人物 1 */}
        <circle cx="250" cy="210" r="2" fill="#555" />
        <line x1="250" y1="212" x2="250" y2="222" stroke="#555" strokeWidth="1" />
        <line x1="248" y1="217" x2="252" y2="217" stroke="#555" strokeWidth="1" />
        <line x1="249" y1="222" x2="247" y2="228" stroke="#555" strokeWidth="0.8" />
        <line x1="250" y1="222" x2="251" y2="228" stroke="#555" strokeWidth="0.8" />
        {/* 人物 2 */}
        <circle cx="270" cy="215" r="1.8" fill="#555" />
        <line x1="270" y1="217" x2="270" y2="226" stroke="#555" strokeWidth="1" />
        {/* 人物 3 - 弯腰 */}
        <circle cx="295" cy="218" r="1.5" fill="#555" />
        <line x1="295" y1="220" x2="293" y2="226" stroke="#555" strokeWidth="1" />
        {/* 人物 4 */}
        <circle cx="580" cy="195" r="1.8" fill="#555" />
        <line x1="580" y1="197" x2="580" y2="207" stroke="#555" strokeWidth="1" />
        <circle cx="600" cy="198" r="1.5" fill="#555" />
        <line x1="600" y1="200" x2="600" y2="210" stroke="#555" strokeWidth="1" />
      </g>

      {/* 缅甸文字点缀 */}
      <text x="400" y="90" textAnchor="middle" fill="#c8960c" opacity="0.06" fontSize="14" fontFamily="serif">ဖားကန့် ကျောက်စိမ်း</text>
    </svg>
  )
}

/* ════════════ 缅甸几何纹样边框 ════════════ */
function BurmaOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 20" className={className} fill="none" preserveAspectRatio="none">
      <defs>
        <pattern id="burmaPat" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
          <path d="M0 10 L10 2 L20 10 L30 2 L40 10" stroke="#c8960c" strokeWidth="0.6" opacity="0.25" fill="none" />
          <circle cx="20" cy="10" r="1.5" fill="#c8960c" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="200" height="20" fill="url(#burmaPat)" />
    </svg>
  )
}

/* ════════════ 涟漪装饰圆 ════════════ */
function GoldRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-72 h-72 rounded-full border border-gold-400/5 animate-spin-slow" />
      <div className="absolute w-64 h-64 rounded-full border border-gold-400/8 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
      <div className="absolute w-56 h-56 rounded-full border border-gold-400/10 animate-spin-slow" style={{ animationDuration: '50s' }} />
    </div>
  )
}

/* ════════════ 主页面 ════════════ */
export default function HomeClient() {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => { const h = () => setScrollY(window.scrollY); window.addEventListener('scroll', h, {passive:true}); return () => window.removeEventListener('scroll', h) }, [])

  const featuredProducts = [
    { id: 1, name: '冰种飘花翡翠手镯', category: '手镯', desc: '冰透水润，绿花灵动如云', price: '¥68,000', tag: '精品' },
    { id: 2, name: '帝王绿翡翠蛋面戒指', category: '戒面', desc: '正阳浓绿，收藏级品质', price: '¥128,000', tag: '收藏' },
    { id: 3, name: '玻璃种观音翡翠挂件', category: '挂件', desc: '通透起光，大师雕工', price: '¥45,000', tag: '孤品' },
    { id: 4, name: '莫西沙场口翡翠原石', category: '原石', desc: '皮壳老辣，赌色极品', price: '面议', tag: '矿区' },
  ]

  return (
    <div className="relative overflow-hidden bg-cream-50">
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 背景层 */}
        <div className="absolute inset-0 bg-gold-pattern" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] glow-gold" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] glow-jade" />

        {/* 仰光大金塔真实照片 - 左侧背景 */}
        <div className="absolute left-0 bottom-0 w-[550px] h-[80%] opacity-[0.08]"
          style={{
            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/b/b1/20160813_Shwedagon_Pagoda_9949_DxO.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'bottom center',
            maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
          }}
        />

        {/* 蒲甘塔林真实照片 - 底部 */}
        <div className="absolute bottom-0 left-0 right-0 h-28 opacity-[0.06]"
          style={{
            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/5/53/Shwedagon_Zedi_Daw_Yangon_2.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
            maskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent 100%)',
          }}
        />

        {/* 几何装饰 */}
        <GoldRings />

        <div className="max-w-7xl mx-auto px-6 w-full py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* 左栏 - 文字 */}
            <div>
              {/* 品牌徽章 */}
              <div className="inline-flex items-center gap-2.5 bg-gold-400/8 border border-gold-400/15 rounded-full px-5 py-2 mb-8 animate-fade-up">
                <div className="w-1.5 h-1.5 rounded-full bg-jade-500 animate-gold-pulse" />
                <span className="text-[11px] text-gold-300 tracking-[0.15em] uppercase">缅甸帕敢矿区 · 德宏直营</span>
              </div>

              {/* 主标题 */}
              <h1 className="font-serif font-bold leading-[1.1] mb-6 animate-fade-up a-delay-1">
                <span className="block text-5xl md:text-6xl lg:text-7xl text-rich-800 mb-2">压箱之宝</span>
                <span className="block text-4xl md:text-5xl lg:text-6xl text-gold-gradient">翡翠传家</span>
              </h1>

              {/* 副标题 */}
              <p className="text-lg text-rich-600/80 leading-relaxed mb-3 max-w-md animate-fade-up a-delay-2">
                源自缅甸帕敢翡翠矿区，每一块原石都历经亿万年的地质淬炼。
              </p>
              <p className="text-sm text-rich-400 leading-relaxed mb-10 max-w-md animate-fade-up a-delay-3">
                我们在中缅边境德宏州设立品牌运营中心，将矿区一手货源，呈现给真正懂得翡翠之美的藏家。
              </p>

              {/* CTA */}
              <div className="flex gap-4 animate-fade-up a-delay-4">
                <Link href="/products"
                  className="group relative bg-gold-500 hover:bg-gold-400 text-rich-950 font-semibold px-8 py-3.5 rounded transition-all duration-300 tracking-wide overflow-hidden">
                  <span className="relative z-10 text-sm">探索精品翡翠</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
                <Link href="/about#contact"
                  className="relative border border-gold-400/25 text-gold-300 hover:text-gold-200 hover:border-gold-400/50 px-8 py-3.5 rounded transition-all duration-300 tracking-wide text-sm">
                  <span>预约私洽</span>
                </Link>
              </div>

              {/* 信任标识 */}
              <div className="flex gap-8 mt-12 pt-8 border-t border-gold-400/8 animate-fade-up a-delay-5">
                {[
                  { num: '12+', label: '年矿区深耕' },
                  { num: '500+', label: '件传家藏品' },
                  { num: '100%', label: '天然A货' },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-xl font-bold text-gold-400 font-serif">{s.num}</p>
                    <p className="text-[10px] text-rich-400 mt-1 tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 右栏 - 仰光大金塔真实照片 */}
            <div className="hidden lg:flex items-center justify-center animate-scale-in a-delay-3">
              <div className="relative">
                <div className="w-52 h-72 rounded-xl overflow-hidden shadow-2xl shadow-gold-900/40 border border-gold-400/15"
                  style={{
                    backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/b/b1/20160813_Shwedagon_Pagoda_9949_DxO.jpg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 30%',
                  }}>
                  {/* 金色渐变叠加 - 保持品牌调性 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rich-950/70 via-rich-950/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/15 to-transparent" />
                </div>
                {/* 环绕装饰环 */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[calc(100%+32px)] h-[calc(100%+32px)] rounded-xl border border-gold-400/10 animate-spin-slow" style={{ animationDuration: '35s' }} />
                  <div className="absolute w-[calc(100%+48px)] h-[calc(100%+48px)] rounded-xl border border-gold-400/6 animate-spin-slow" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 向下滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] text-rich-300 tracking-[0.2em]">向下探索</span>
            <div className="w-px h-6 bg-gradient-to-b from-gold-400/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════ 帕敢矿脉 · 翡翠之源 ═══════════ */}
      <section className="relative py-32 overflow-hidden">
        {/* 帕敢翡翠矿山真实照片背景 */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/2/2d/A_large_company_Jade_Mine_in_Hpakant_2018_January_.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(130%) brightness(0.5)',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] glow-jade" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">The Origin</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-rich-800 mt-4 mb-4">
              帕敢矿脉<span className="text-gold-gradient"> · </span>翡翠之源
            </h2>
            <div className="divider-gold-center mb-6" />
            <p className="text-rich-500 max-w-2xl mx-auto leading-relaxed text-sm">
              缅甸帕敢（Hpakant）——全球最优质的翡翠矿区。这里出产的翡翠，以其色泽浓郁、质地细腻而闻名于世。
              每一块从帕敢走出的翡翠，都承载着这片土地亿万年地质运动的记忆。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: '翡翠原石', desc: '与帕敢矿区建立长期合作关系，从源头上把控品质，省去中间环节。每一块原石都经过地质专家鉴定，确保天然A货。', icon: 'M8 3l4 8 5-5 5 15H2L8 3z' },
              { title: '翡翠成品', desc: '德宏州瑞丽运营中心紧邻中缅边境，第一时间获取矿区最新开采的原石与成品。精品手镯、挂件、戒面，价格透明公正。', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4' },
              { title: '私人定制', desc: '每件压箱货都经过三代翡翠世家传承人的严格甄选，并提供一对一专属定制服务。不追求量，只追求质——每一件都值得传家。', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
            ].map((item, i) => (
              <div key={i} className="group bg-cream-100/60 border border-cream-200/50 hover:border-gold-400/20 rounded-xl p-8 transition-all duration-500">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400/15 to-gold-400/5 border border-gold-400/20 flex items-center justify-center mb-6 group-hover:border-gold-400/40 transition-colors relative overflow-hidden animate-gold-shimmer">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer" />
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold-400 filter drop-shadow-[0_0_6px_rgba(212,160,23,0.6)]" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={item.icon} /></svg>
                </div>
                <h3 className="text-lg font-serif font-bold text-rich-800 mb-3">{item.title}</h3>
                <p className="text-xs text-rich-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 精选藏品 ═══════════ */}
      <section className="relative py-32 border-t border-gold-400/5">
        {/* 优雅金线分隔 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] glow-gold" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">Curated Collection</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-rich-800 mt-4 mb-4">精选藏品</h2>
            <div className="divider-gold-center mb-6" />
            <p className="text-rich-500 max-w-md mx-auto text-sm">每一件皆为压箱之宝，等待真正懂它的人</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((p, i) => (
              <Link href="/products" key={p.id}
                className="group bg-cream-100/80 border border-cream-200/50 rounded-xl overflow-hidden hover:border-gold-400/25 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-900/10">
                {/* 产品图占位 - 翡翠氛围 */}
                <div className="aspect-square bg-gradient-to-br from-jade-800/50 via-rich-800 to-gold-900/15 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-rich-950/60 via-transparent to-transparent" />
                    {/* 模拟翡翠纹理 */}
                    <div className="absolute inset-0 opacity-10" style={{
                      background: `radial-gradient(ellipse at ${30+i*15}% ${40+i*10}%, #34d399 0%, transparent 50%),
                                   radial-gradient(ellipse at ${60+i*10}% ${30+i*15}%, #059669 0%, transparent 40%)`
                    }} />
                  </div>
                  {/* 标签 */}
                  {p.tag && (
                    <span className="absolute top-3 left-3 text-[9px] bg-gold-500/80 text-rich-950 font-semibold px-2 py-0.5 rounded tracking-wider">
                      {p.tag}
                    </span>
                  )}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-jade-500/20 to-gold-400/10 border border-jade-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-400/40 transition-all duration-500">
                      <svg viewBox="0 0 24 24" className="w-8 h-8 text-jade-500/60" fill="currentColor">
                        <path d="M12 2L4 8l2 4-2 4 2 4-2 4 8 6 8-6-2-4 2-4-2-4 2-4-8-6z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] text-gold-400 tracking-wider uppercase">{p.category}</span>
                    <span className="text-[10px] text-rich-300">#{String(p.id).padStart(2,'0')}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-rich-800 group-hover:text-gold-300 transition-colors font-serif">{p.name}</h3>
                  <p className="text-xs text-rich-400 mt-1.5">{p.desc}</p>
                  <div className="mt-4 pt-4 border-t border-cream-200/50 flex items-center justify-between">
                    <span className="text-sm font-bold text-gold-300">{p.price}</span>
                    <span className="text-[10px] text-rich-400 group-hover:text-gold-400 transition-colors">查看详情 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/products"
              className="inline-flex items-center gap-2 text-xs text-gold-400 hover:text-gold-300 border-b border-gold-400/30 hover:border-gold-400/60 pb-1 transition-colors tracking-wide">
              查看全部藏品 <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ 翡翠知识 ═══════════ */}
      <section className="relative py-32 border-t border-gold-400/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] glow-gold" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] glow-jade" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">Jade Knowledge</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-rich-800 mt-4 mb-4">
              翡翠<span className="text-gold-gradient">知识</span>
            </h2>
            <div className="divider-gold-center mb-6" />
            <p className="text-rich-500 max-w-xl mx-auto leading-relaxed text-sm">
              从原矿开采到成品鉴赏，一站式了解翡翠的所有奥秘
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '翡翠原石',
                desc: '了解翡翠矿区的种类与特征。从莫西沙、帕敢老场口到木那料，每一场口的皮壳特征、种水质地、色脉走向都大有讲究。学习如何通过皮壳、松花、蟒带等特征判断原石内部品质。',
                icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
                href: '#'
              },
              {
                title: '翡翠成品',
                desc: '手镯、挂件、戒面、摆件——翡翠成品的品鉴之道。什么是种老水长？什么是起荧光？帝王绿与正阳绿的区别何在？手镯的口径与圈形如何选择？从这里开始你的翡翠鉴赏之路。',
                icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
                href: '#'
              },
              {
                title: '保养收藏',
                desc: '翡翠的保养与收藏是一门学问。如何正确清洗与存放？为什么要定期"补水"？怎样辨别翡翠的真伪与优化处理？收藏级别的翡翠需要满足哪些硬性指标？掌握这些知识，做个懂行的藏家。',
                icon: 'M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z',
                href: '#'
              },
            ].map((item, i) => (
              <div key={i} className="group bg-cream-100/60 border border-cream-200/50 hover:border-gold-400/20 rounded-xl p-8 transition-all duration-500">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-jade-500/10 to-jade-500/5 border border-jade-500/15 flex items-center justify-center mb-6 group-hover:border-jade-500/30 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-jade-500" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={item.icon} /></svg>
                </div>
                <h3 className="text-lg font-serif font-bold text-rich-800 mb-3">{item.title}</h3>
                <p className="text-xs text-rich-500 leading-relaxed mb-6">{item.desc}</p>
                <Link href={item.href}
                  className="text-[10px] text-gold-400 hover:text-gold-300 tracking-wider border-b border-gold-400/30 pb-0.5 transition-colors">
                  了解更多 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ═══════════ 新闻中心 ═══════════ */}
      <section className="relative py-32 border-t border-gold-400/5 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-[350px] h-[350px] glow-gold" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] glow-jade" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">News</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-rich-800 mt-4 mb-4">
              新闻<span className="text-gold-gradient">中心</span>
            </h2>
            <div className="divider-gold-center mb-6" />
            <p className="text-rich-500 max-w-xl mx-auto leading-relaxed text-sm">
              关注翡翠行业最新动态，从缅甸源头到国内市场一网打尽
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '缅甸源头',
                desc: '帕敢矿区最新开采动态、缅甸政府翡翠政策变化、瓦城（曼德勒）翡翠交易市场行情。第一时间掌握源头信息，把握投资先机。',
                date: '实时更新',
                tag: '矿区',
                icon: 'M12 2l9 7v12H3V9l9-7z',
              },
              {
                title: '国内玉市',
                desc: '揭阳阳美、四会天光墟、平洲玉器街、瑞丽姐告——全国主要翡翠交易市场的行情走势与价格分析。为您的收藏与投资提供参考。',
                date: '每周行情',
                tag: '市场',
                icon: 'M2 12l10-5 10 5-10 5-10-5z M2 17l10 5 10-5 M2 7l10 5 10-5',
              },
              {
                title: '珠宝动向',
                desc: '全球珠宝拍卖会动态、翡翠设计新趋势、名人收藏故事。从保利到佳士得，从传统工艺到当代设计，深度解读翡翠文化的时尚演变。',
                date: '行业资讯',
                tag: '动向',
                icon: 'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z M9 3v18 M15 3v18 M3 9h18 M3 15h18',
              },
            ].map((item, i) => (
              <div key={i} className="group bg-cream-100/60 border border-cream-200/50 hover:border-gold-400/20 rounded-xl p-8 transition-all duration-500 relative">
                <span className="absolute top-4 right-4 text-[9px] bg-gold-500/80 text-rich-950 font-semibold px-2 py-0.5 rounded tracking-wider">{item.tag}</span>
                <div className="w-10 h-10 rounded-lg bg-gold-400/8 border border-gold-400/15 flex items-center justify-center mb-5 group-hover:bg-gold-400/15 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={item.icon} /></svg>
                </div>
                <p className="text-[10px] text-gold-400 tracking-wider mb-2">{item.date}</p>
                <h3 className="text-lg font-serif font-bold text-rich-800 mb-3">{item.title}</h3>
                <p className="text-xs text-rich-500 leading-relaxed mb-4">{item.desc}</p>
                <span className="text-[10px] text-gold-400/60 group-hover:text-gold-400 transition-colors cursor-pointer border-b border-gold-400/20 pb-0.5">
                  阅读更多 →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════ 品牌哲学 ═══════════ */}
      <section className="relative py-32 border-t border-gold-400/5 overflow-hidden">
        <div className="absolute inset-0 bg-gold-pattern opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] glow-gold" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">Philosophy</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-rich-800 mt-4 mb-4">
              何为<span className="text-gold-gradient">压箱货</span>
            </h2>
            <div className="divider-gold-center mb-6" />
          </div>

          {/* 大字排版 */}
          <div className="space-y-8 text-center">
            <p className="text-2xl md:text-3xl font-serif text-rich-800 leading-relaxed max-w-3xl mx-auto">
              「古人将最珍贵的物件压于箱底，代代相传——<br />
              <span className="text-gold-gradient">是为<span className="font-bold">压箱货</span>。</span>」
            </p>
            <p className="text-sm text-rich-500 leading-loose max-w-2xl mx-auto">
              在信息喧嚣的时代，我们选择回归翡翠的本质——它不是快消品，不是投机工具，
              而是大自然馈赠的艺术品，是刻在骨子里的东方审美，是真正值得世代传承的家族珍宝。
            </p>
          </div>

          {/* 四柱 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {[
              { label: '真', desc: '天然A货\n绝无处理' },
              { label: '精', desc: '万里挑一\n唯精是举' },
              { label: '传', desc: '压箱之宝\n代代相传' },
              { label: '信', desc: '源头直供\n价格透明' },
            ].map((v, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-cream-100/40 border border-cream-200/30 hover:border-gold-400/15 transition-colors">
                <div className="text-2xl font-serif font-bold text-gold-gradient mb-2">{v.label}</div>
                <p className="text-[11px] text-rich-400 leading-relaxed whitespace-pre-line">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 预约私洽 ═══════════ */}
      <section className="relative py-32 border-t border-gold-400/5 overflow-hidden">
        {/* 帕敢翡翠矿山真实照片背景 */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/c/c4/Jade_Mine.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(100%) contrast(120%) brightness(0.5)',
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-[11px] text-gold-400 tracking-[0.25em] uppercase">Private Consultation</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-rich-800 mt-4 mb-8">预约私洽</h2>
          <p className="text-rich-500 text-sm mb-12 max-w-lg mx-auto leading-relaxed">
            每一件压箱货都有它的故事。我们提供一对一专属私洽服务，为您寻找最契合的那一件传家之宝。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about#contact"
              className="bg-gold-500 hover:bg-gold-400 text-rich-950 font-semibold px-10 py-3.5 rounded transition-colors tracking-wide text-sm">
              预约咨询
            </Link>
            <Link href="/products"
              className="border border-gold-400/25 text-gold-300 hover:bg-gold-400/8 px-10 py-3.5 rounded transition-colors tracking-wide text-sm">
              浏览藏品
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ Footer ═══════════ */}
      <footer className="bg-cream-50 border-t border-gold-400/8">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* 品牌 */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-6">
                <svg viewBox="0 0 24 28" className="w-5 h-6 text-gold-400" fill="none">
                  <path d="M12 1L3 12H21L12 1Z" fill="currentColor" opacity="0.9"/>
                  <path d="M4 12h16l-3 8H7l-3-8Z" fill="currentColor" opacity="0.7"/>
                  <path d="M7 20h10l-2 7H9l-2-7Z" fill="currentColor" opacity="0.5"/>
                </svg>
                <span className="text-lg font-bold font-serif text-gold-300 tracking-[0.15em]">压箱货</span>
              </div>
              <p className="text-xs text-rich-400 leading-relaxed">
                源自缅甸帕敢矿区<br />
                兴于中缅边境德宏<br />
                压箱之宝，翡翠传家
              </p>
            </div>

            {/* 导航 */}
            <div>
              <h4 className="text-xs font-semibold text-rich-800 mb-5 tracking-wide uppercase">导览</h4>
              <div className="space-y-3">
                {[
                  { label: '首页', href: '/' },
                  { label: '精品翡翠', href: '/products' },
                  { label: '品牌故事', href: '/about' },
                  { label: '预约私洽', href: '/about#contact' },
                ].map((l, i) => (
                  <Link key={i} href={l.href} className="block text-xs text-rich-400 hover:text-gold-400 transition-colors">{l.label}</Link>
                ))}
              </div>
            </div>

            {/* 品类 */}
            <div>
              <h4 className="text-xs font-semibold text-rich-800 mb-5 tracking-wide uppercase">翡翠品类</h4>
              <div className="space-y-3">
                {['翡翠手镯', '翡翠挂件', '翡翠戒面', '翡翠原石', '翡翠摆件'].map((c, i) => (
                  <span key={i} className="block text-xs text-rich-400">{c}</span>
                ))}
              </div>
            </div>

            {/* 联系 */}
            <div>
              <h4 className="text-xs font-semibold text-rich-800 mb-5 tracking-wide uppercase">联系</h4>
              <div className="space-y-3 text-xs text-rich-400">
                <p>📍 云南省德宏州瑞丽市</p>
                <p>📧 contact@yaxianghuo.com</p>
                <p className="text-gold-400 mt-6 pt-4 border-t border-gold-400/10">关注微信公众号</p>
                <p className="text-rich-300">获取最新藏品资讯</p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-gold-400/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[10px] text-rich-300">© 2026 压箱货 YaXiangHuo · 缅甸翡翠 · 德宏直营</p>
            <div className="flex gap-6 text-[10px] text-rich-300">
              <span>天然A货保证</span>
              <span>矿区直供</span>
              <span>品质传承</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
