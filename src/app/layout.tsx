import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: '压箱货 - 中缅边境高端翡翠',
  description: '源自缅甸，兴于德宏。压箱货主营中高端翡翠成品与原石，每一件皆为压箱之宝。缅甸矿区直供，品质保障。',
  keywords: '压箱货,翡翠,缅甸翡翠,翡翠原石,高端翡翠,德宏翡翠,缅甸帕敢,翡翠成品,翡翠珠宝',
};

function PagodaIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 28" className={className} fill="none">
      <path d="M12 1L3 12H21L12 1Z" fill="currentColor" opacity="0.9"/>
      <path d="M4 12h16l-3 8H7l-3-8Z" fill="currentColor" opacity="0.7"/>
      <path d="M7 20h10l-2 7H9l-2-7Z" fill="currentColor" opacity="0.5"/>
    </svg>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-full flex flex-col bg-cream-50 text-rich-600">
        {/* 全局导航 */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-cream-50/85 backdrop-blur-xl border-b border-gold-400/8">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5 group">
              <PagodaIcon className="w-5 h-6 text-gold-400 group-hover:text-gold-300 transition-colors" />
              <span className="text-lg font-bold font-serif text-gold-300 tracking-[0.15em] group-hover:text-gold-200 transition-colors">压箱货</span>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              <Link href="/" className="text-xs text-rich-800 hover:text-gold-300 transition-colors tracking-wide">首页</Link>
              <Link href="/products" className="text-xs text-rich-500 hover:text-gold-300 transition-colors tracking-wide">精品翡翠</Link>
              <Link href="/about" className="text-xs text-rich-500 hover:text-gold-300 transition-colors tracking-wide">关于我们</Link>
              <Link href="/about#contact" className="text-xs bg-gold-600/20 border border-gold-500/30 text-gold-300 hover:bg-gold-600/40 px-5 py-1.5 rounded transition-colors tracking-wide">
                预约私洽
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-1 pt-16">{children}</main>
      </body>
    </html>
  );
}
