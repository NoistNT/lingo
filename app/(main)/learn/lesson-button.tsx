'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

interface Props {
  id: number
  index: number
  totalCount: number
  locked?: boolean
  current?: boolean
  percentage: number
}

export default function LessonButton({
  id,
  index,
  totalCount,
  locked,
  current,
  percentage
}: Props) {
  const isCompleted = !current && !locked
  const href = isCompleted ? `/lesson/${id}` : '/lesson'

  return (
    <Link
      aria-disabled={locked}
      className={cn(
        'relative flex w-full items-center justify-between rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-4 dark:border-neutral-800 dark:bg-neutral-900',
        { 'cursor-not-allowed opacity-50': locked },
        { 'cursor-pointer': current }
      )}
      href={href}
      style={{ pointerEvents: locked ? 'none' : 'auto' }}
    >
      <div className="space-y-1.5">
        <h3 className="text-xl font-bold">
          {index + 1} / {totalCount}
        </h3>
        <p className="text-neutral-400">{percentage}% Completed</p>
      </div>
      <div
        className={
          locked
            ? 'cursor-not-allowed opacity-50'
            : current
              ? 'cursor-pointer'
              : 'cursor-not-allowed opacity-50'
        }
      >
        <ArrowRight className="h-5 w-5 stroke-2 text-neutral-400 dark:text-neutral-500" />
      </div>
    </Link>
  )
}
