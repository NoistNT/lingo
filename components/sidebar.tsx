import Link from 'next/link'

import Login from '@/components/auth/login'
import SidebarItem from '@/components/sidebar-item'
import { cn } from '@/lib/utils'

export default function SideBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-64',
        className
      )}
    >
      <div className="flex items-center py-7 pl-4">
        <Link href="/learn">
          <h1 className="text-2xl font-extrabold tracking-wide text-emerald-500">
            Lingo
          </h1>
        </Link>
      </div>
      <div className="flex flex-1 flex-col items-center space-y-2">
        <SidebarItem href="/learn" iconSrc="/learn.svg" label="Learn" />
        <SidebarItem
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
          label="Leaderboard"
        />
        <SidebarItem href="/quests" iconSrc="/quests.svg" label="Quests" />
        <SidebarItem href="/shop" iconSrc="/shop.svg" label="Shop" />
      </div>
      <div>
        <Login className="mx-auto mr-0 pb-5 lg:mr-0" />
      </div>
    </div>
  )
}
