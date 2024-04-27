import MobileHeader from '@/components/mobile-header'
import SideBar from '@/components/sidebar'
import { ModeToggle } from '@/components/ui/mode-toggle'

export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="fixed right-4 top-1.5 z-[150] lg:top-6">
        <ModeToggle />
      </div>
      <MobileHeader />
      <SideBar className="hidden lg:flex" />
      <main className="h-full pt-12 lg:pl-64 lg:pt-0">
        <div className="mx-auto h-full max-w-screen-lg pt-6">{children}</div>
      </main>
    </>
  )
}
