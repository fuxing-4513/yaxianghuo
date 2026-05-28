import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: '关于压箱货 - 缅甸翡翠品牌故事',
  description: '压箱货源自缅甸矿区，扎根中缅边境德宏州。专注中高端翡翠成品与原石，为品位藏家提供压箱之宝。',
}

export default function AboutPage() {
  return <AboutClient />
}
