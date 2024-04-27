import { Menu } from 'lucide-react'

import SideBar from '@/components/sidebar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="m-0 p-0" side="left">
        <SideBar />
      </SheetContent>
    </Sheet>
  )
}
