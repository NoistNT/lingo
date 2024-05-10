import { NotebookText } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface Props {
  title: string
  description: string
}

export default function UnitBanner({ title, description }: Props) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-4 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="space-y-1.5">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </div>
      <Link href="/lesson">
        <Button className="hidden h-11 xl:flex " size="lg" variant="secondary">
          <NotebookText className="mr-2.5 h-5 w-5" />
          Continue
        </Button>
      </Link>
    </div>
  )
}
