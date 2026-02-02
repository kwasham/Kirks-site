import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Kirk's Site",
  description: 'Kirk\'s personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link href="/css/normalize.css" rel="stylesheet" type="text/css" />
          <link href="/css/webflow.css" rel="stylesheet" type="text/css" />
          <link href="/css/kirks-amazing-site-b96f2d.webflow.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
          <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" type="text/javascript" />
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                'WebFont.load({  google: {    families: ["DM Sans:regular,500,700","Inter:regular,500,700"]  }});',
            }}
          />
          <style>{`.w-webflow-badge{display:none !important;}`}</style>
        </head>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
