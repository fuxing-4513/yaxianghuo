import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: '精品翡翠 - 压箱货',
  description: '压箱货精品翡翠展示，冰种手镯、帝王绿戒指、玻璃种挂件、翡翠原石。缅甸矿区直供，品质保障。',
}

export default function ProductsPage() {
  return <ProductsClient />
}
