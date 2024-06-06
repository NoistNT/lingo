import type { Metadata } from 'next'

import { ClerkProvider } from '@clerk/nextjs'
import { Nunito } from 'next/font/google'

import ExitModal from '@/components/modals/exit-modal'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
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
            <Toaster />
            <ExitModal />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
