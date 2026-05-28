import type { Metadata } from "next"
import HomeClient from "./HomeClient"

export const metadata: Metadata = {
  title: '压箱货 - 中缅边境高端翡翠 | 帕敢矿区 · 德宏直营',
  description: '压箱货——源自缅甸帕敢翡翠矿区，中缅边境德宏品牌运营中心。中高端翡翠成品与原石直供，每一件皆为压箱之宝，值得世代传承。',
  openGraph: {
    title: '压箱货 - 中缅边境高端翡翠',
    description: '源自缅甸帕敢矿区 | 高端翡翠成品与原石 | 压箱之宝 · 翡翠传家',
    type: 'website', locale: 'zh_CN', siteName: '压箱货',
  },
}

export default function Home() {
  return <HomeClient />
}
