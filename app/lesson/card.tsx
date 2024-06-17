import Image from 'next/image'

import { ChallengeStatus, ChallengeType, type challenges } from '@/db/schema'
import { cn } from '@/lib/utils'

interface Props {
  audioSrc: string | null
  disabled?: boolean
  id: number
  imageSrc: string | null
  onClick: () => void
  selected?: boolean
  shortcut: string
  status?: ChallengeStatus
  text: string
  type: (typeof challenges.$inferSelect)['type']
}

export default function Card({
  audioSrc,
  disabled,
  id,
  imageSrc,
  onClick,
  selected,
  shortcut,
  status,
  text,
  type
}: Props) {
  return (
    <div
      className={cn(
        'h-full cursor-pointer rounded-xl border-2 border-b-4 p-4 hover:bg-black/5 active:border-b-2 dark:hover:bg-white/5 lg:p-6',
        selected &&
          'border-sky-300 bg-sky-100 hover:bg-sky-100 dark:bg-sky-900 dark:hover:bg-sky-900',
        selected &&
          status === ChallengeStatus.CORRECT &&
          'border-green-300 bg-green-100 hover:bg-green-100 dark:bg-green-900 dark:hover:bg-green-900',
        selected &&
          status === ChallengeStatus.INCORRECT &&
          'border-rose-300 bg-rose-100 hover:bg-rose-100 dark:bg-rose-900 dark:hover:bg-rose-900',
        disabled && 'pointer-events-none opacity-50',
        type === ChallengeType.ASSIST && 'w-full lg:p-3'
      )}
      onClick={() => {
        console.log(id)
      }}
    >
      {imageSrc ? (
        <div className="relative mb-4 aspect-square max-h-20 w-full lg:max-h-36">
          <Image
            alt={text}
            className="mx-auto"
            height={85}
            src={imageSrc}
            width={85}
          />
        </div>
      ) : null}
      <div
        className={cn(
          'flex items-center justify-between',
          type === ChallengeType.ASSIST && 'flex-row-reverse'
        )}
      >
        {type === ChallengeType.ASSIST && <div />}
        <p
          className={cn(
            'mx-auto text-sm text-neutral-600 dark:text-neutral-300 lg:text-base',
            selected && 'text-sky-500',
            selected && status === ChallengeStatus.CORRECT && 'text-green-500',
            selected && status === ChallengeStatus.INCORRECT && 'text-rose-500'
          )}
        >
          {text}
        </p>
        <div
          className={cn(
            'flex size-5 items-center justify-center rounded-md border-2 text-xs font-semibold text-neutral-400 dark:text-neutral-600 lg:size-6',
            selected &&
              'border-sky-300 text-sky-500 dark:border-sky-700 dark:text-sky-500',
            selected &&
              status === ChallengeStatus.CORRECT &&
              'border-green-500 text-green-500 dark:border-green-700 dark:text-green-500',
            selected &&
              status === ChallengeStatus.INCORRECT &&
              'border-rose-500 text-rose-500 dark:border-rose-700 dark:text-rose-500'
          )}
        >
          {shortcut}
        </div>
      </div>
    </div>
  )
}
