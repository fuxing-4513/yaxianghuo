import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: '压箱货 - 中缅边境高端翡翠',
  description: '源自缅甸，兴于德宏。压箱货主营中高端翡翠成品与原石，每一件皆为压箱之宝。缅甸矿区直供，品质保障。',
  keywords: '压箱货,翡翠,缅甸翡翠,翡翠原石,高端翡翠,德宏翡翠,中缅边境翡翠,翡翠成品,翡翠珠宝',
  openGraph: {
    title: '压箱货 - 中缅边境高端翡翠',
    description: '源自缅甸，兴于德宏 | 高端翡翠成品与原石',
    type: 'website',
    locale: 'zh_CN',
    siteName: '压箱货',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className="min-h-full flex flex-col bg-rich-900 text-gray-300">
        {children}
      </body>
    </html>
  );
}
