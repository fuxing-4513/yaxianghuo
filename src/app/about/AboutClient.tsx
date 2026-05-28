'use client'

import Link from 'next/link'

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

export default function AboutClient() {
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
            <Link href="/products" className="text-sm text-gray-400 hover:text-burma-300 transition-colors">精品翡翠</Link>
            <Link href="/about" className="text-sm text-burma-300 transition-colors">关于我们</Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* 标题 */}
          <div className="text-center mb-20">
            <PagodaIcon className="w-10 h-12 text-burma-400/60 mx-auto mb-6" />
            <span className="text-xs text-burma-400 tracking-[0.2em] uppercase">About YaXiangHuo</span>
            <h1 className="text-4xl font-serif font-bold text-ivory-50 mt-3 mb-4">缅甸之灵 · 德宏之韵</h1>
            <div className="divider-gold w-32 mx-auto my-6" />
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              在翡翠的世界里，真正的珍品不争喧嚣。<br />
              它们安静地等待——等一个懂它的人，将其纳入压箱之藏。
            </p>
          </div>

          {/* 品牌故事 */}
          <section className="mb-20">
            <h2 className="text-2xl font-serif font-bold text-ivory-50 mb-8 border-burma inline-block">品牌故事</h2>
            <div className="space-y-6 text-sm text-gray-400 leading-loose">
              <p>
                <span className="text-burma-300 font-serif text-lg">压</span>箱货——这三个字，在翡翠行当里有着特殊的含义。
                它不单指压在箱底的货，更意味着一件真正值得珍藏、可以传家的宝物。
              </p>
              <p>
                我们的翡翠，源自缅甸北部克钦邦的帕敢矿区——全球最优质的翡翠产地。亿万年的地质运动赋予了这片土地独一无二的馈赠。
                从莫西沙的冰透，到木那的飘花，再到后江的满色——每一块原石都承载着缅甸大地的魂魄。
              </p>
              <p>
                而我们的运营中心，设立在中国云南德宏傣族景颇族自治州瑞丽市。这里是中国与缅甸交界的桥头堡，
                两国边民世代往来，翡翠的贸易血脉在此流淌了数百年。在这片被瑞丽江滋养的土地上，
                我们以最近的距离对接缅甸矿区一手货源，以最严苛的标准筛选每一件压箱之选。
              </p>
              <p>
                从缅甸矿区到德宏展厅，从粗粝原石到精美成品——压箱货走的是一条少有人走的路：
                <span className="text-ivory-100">只为品质，不为流量。为30岁以上的品位藏家，留存真正值得压箱的传家翡翠。</span>
              </p>
            </div>
          </section>

          {/* 三柱 */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { title: '源头直供', desc: '缅甸矿区一手货源，无中间环节', icon: '⛰️' },
              { title: '德宏落地', desc: '瑞丽直营展厅，欢迎预约品鉴', icon: '🏛️' },
              { title: '品质承诺', desc: '附权威机构鉴定证书，假一赔十', icon: '📜' },
            ].map((item, i) => (
              <div key={i} className="bg-rich-800/50 border border-rich-600 rounded-xl p-8 text-center hover:border-burma-400/30 transition-colors">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="text-lg font-serif font-bold text-ivory-100 mt-4 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* 联系 */}
          <section id="contact" className="bg-rich-800/50 border border-rich-600 rounded-2xl p-10">
            <h2 className="text-2xl font-serif font-bold text-ivory-50 mb-8 text-center">预约私洽</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📍</span>
                  <div>
                    <p className="text-ivory-100 font-semibold mb-1">展厅地址</p>
                    <p>云南省德宏傣族景颇族自治州瑞丽市</p>
                    <p className="text-xs text-gray-500 mt-1">（预约后发送详细地址）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl mt-0.5">📧</span>
                  <div>
                    <p className="text-ivory-100 font-semibold mb-1">电子邮箱</p>
                    <p>contact@yaxianghuo.com</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-rich-900/50 border border-burma-400/10 rounded-xl p-6 text-center">
                  <p className="text-xs text-gray-500 mb-3">关注微信公众号</p>
                  <div className="w-32 h-32 mx-auto bg-rich-700 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-3xl opacity-40">📱</span>
                  </div>
                  <p className="text-xs text-burma-400 font-semibold">压箱货翡翠</p>
                  <p className="text-[10px] text-gray-600 mt-1">扫码获取最新藏品与行业资讯</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-rich-900 border-t border-burma-400/10">
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-[10px] text-gray-600">© 2026 压箱货 版权所有 · 缅甸翡翠 · 德宏直营</p>
        </div>
      </footer>
    </div>
  )
}
