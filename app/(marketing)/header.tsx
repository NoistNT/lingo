import Link from 'next/link'

import Login from '@/components/auth/login'

export default function Header() {
  return (
    <header className="h-20 w-full border-b-2 px-1">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <Link href="/learn">
          <div className="flex items-center py-7 pl-4">
            <h1 className="text-2xl font-extrabold tracking-wide text-emerald-500">
              Lingo
            </h1>
          </div>
        </Link>
        <Login />
      </div>
    </header>
  )
}
