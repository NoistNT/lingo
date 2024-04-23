import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs'
import { Loader } from 'lucide-react'

import Login from '@/components/login'

export default function Header() {
  return (
    <header className="h-20 w-full border-b-2 px-1">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <h1 className="text-2xl font-extrabold tracking-wide text-emerald-500">
            Lingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>
        <ClerkLoaded>
          <Login />
        </ClerkLoaded>
      </div>
    </header>
  )
}
