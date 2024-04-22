import type { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'
import { Nunito } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lingo',
  description: 'Lingo'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <body className={`${nunito.className} antialiased`}>
          <ThemeProvider
            disableTransitionOnChange
            enableSystem
            attribute="class"
            defaultTheme="system"
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}