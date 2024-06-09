import { InfinityIcon, X } from 'lucide-react'
import Image from 'next/image'

import { Progress } from '@/components/ui/progress'
import { useExitModal } from '@/store/use-exit-modal'

interface Props {
  hearts: number
  percentage: number
  hasActiveSubscription: boolean
}

export default function Header({
  hearts,
  percentage,
  hasActiveSubscription
}: Props) {
  const { onOpen } = useExitModal()

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-x-7 px-10 pt-6 lg:pt-12">
      <X
        className="cursor-pointer text-neutral-500 transition hover:opacity-75"
        onClick={onOpen}
      />
      <Progress value={percentage} />
      <div className="flex items-center font-bold text-rose-500">
        <Image
          alt="Hearts"
          className="mr-2"
          height={22}
          src="/heart.svg"
          width={22}
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 stroke-[3]" />
        ) : (
          <span>{hearts}</span>
        )}
      </div>
    </header>
  )
}
