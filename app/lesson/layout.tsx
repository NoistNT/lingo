import { ModeToggle } from '@/components/ui/mode-toggle'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="fixed bottom-6 right-4 z-[150] lg:top-6">
        <ModeToggle />
      </div>
      <div className="flex h-full w-full flex-col">{children}</div>
    </div>
  )
}
