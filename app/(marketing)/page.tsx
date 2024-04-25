import Image from 'next/image'

import Register from '@/components/auth/register'

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-8 p-4 lg:flex-row lg:space-x-8">
      <div className="size-64 opacity-90 filter lg:size-max ">
        <Image
          alt="Welcome to Lingo"
          height={320}
          src="/welcome.svg"
          width={320}
        />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="mb-6 max-w-sm text-center text-3xl font-extrabold text-primary/80 lg:mb-2 lg:max-w-md">
          Learn, practice and master new languages with Lingo.
        </h1>
        <Register />
      </div>
    </div>
  )
}
