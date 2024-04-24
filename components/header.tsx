import Logout from './auth/logout'

export default function Header() {
  return (
    <header className="h-20 w-full border-b-2 px-1">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <h1 className="text-2xl font-extrabold tracking-wide text-emerald-500">
            Lingo
          </h1>
        </div>
        <Logout />
      </div>
    </header>
  )
}
