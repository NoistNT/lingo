import type { Metadata } from 'next'

import { Nunito } from 'next/font/google'

import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/ui/mode-toggle'
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
    <html suppressHydrationWarning lang="en">
      <body className={`${nunito.className} antialiased`}>
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          <div className="fixed right-4 top-4">
            <ModeToggle />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
