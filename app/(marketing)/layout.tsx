import Footer from '@/app/(marketing)/footer'
import Header from '@/app/(marketing)/header'
import { ModeToggle } from '@/components/ui/mode-toggle'

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed right-4 top-5 z-[150]">
        <ModeToggle />
      </div>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
