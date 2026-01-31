import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Kirk's Site - Migration in Progress",
  description: 'Next.js migration in progress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
