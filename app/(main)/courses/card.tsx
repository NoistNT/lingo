import { Check } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  active?: boolean
  disabled?: boolean
  id: number
  onClick: (id: number) => void
  title: string
  imgSrc: string
}

export default function Card({
  disabled,
  active,
  id,
  onClick,
  title,
  imgSrc
}: Props) {
  return (
    <div
      className={cn(
        'flex h-full min-h-52 min-w-56 flex-col items-center justify-between gap-2 rounded-lg border border-b-4 border-black/10 p-3 pb-6 hover:cursor-pointer hover:bg-black/5 active:border-b-2 dark:border-white/10 dark:hover:bg-white/5',
        disabled && 'pointer-events-none opacity-50'
      )}
      onClick={() => onClick(id)}
    >
      <div className="flex min-h-6 w-full items-center justify-end">
        {active ? (
          <div className="flex items-center justify-center p-0">
            <Check className="h-5 w-5 rounded-sm bg-emerald-600 stroke-[4] p-1 text-white" />
          </div>
        ) : null}
      </div>
      <Image
        alt={title}
        className="rounded-md border object-cover drop-shadow-md"
        height={50}
        src={imgSrc}
        width={85}
      />
      <p className="mt-3 text-center font-bold text-neutral-700 dark:text-neutral-300">
        {title}
      </p>
    </div>
  )
}
