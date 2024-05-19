import { NotebookText } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface Props {
  title: string
  description: string
}

export default function UnitBanner({ title, description }: Props) {
  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-green-500 px-5 py-[0.98rem] text-white dark:border-neutral-800 dark:text-black">
      <div className="space-y-1.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{description}</p>
      </div>
      <Link href="/lesson">
        <Button
          className="hidden h-11 border-2 border-b-4 px-6 active:border-b-2 xl:flex"
          variant="secondary"
        >
          <NotebookText className="mr-2.5" />
          Continue
        </Button>
      </Link>
    </div>
  )
}
