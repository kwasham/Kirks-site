import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'

export const metadata: Metadata = {
  title: "Kirk's Site",
  description: 'Modern web experience built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
