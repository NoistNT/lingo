import MobileSidebar from '@/components/mobile-sidebar'

export default function MobileHeader() {
  return (
    <nav className="fixed top-0 z-50 flex h-12 w-full items-center border-b bg-emerald-500 px-6 lg:hidden">
      <MobileSidebar />
    </nav>
  )
}
