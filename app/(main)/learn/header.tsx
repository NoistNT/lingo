import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Header({ title }: { title: string }) {
  return (
    <header className="sticky top-0 mb-5 flex items-center justify-between border-b-2 pb-3 text-neutral-400 dark:text-neutral-500 lg:z-50 lg:-mt-7 lg:pt-6">
      <Link href="/courses">
        <Button size="sm" variant="ghost">
          <ArrowLeft className="h-5 w-5 stroke-2 text-neutral-400 dark:text-neutral-500 " />
        </Button>
      </Link>
      <h1 className="text-lg font-bold">{title}</h1>
      <div />
    </header>
  )
}
