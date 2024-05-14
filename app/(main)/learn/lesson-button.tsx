'use client'

import { Check, Crown, Star } from 'lucide-react'
import Link from 'next/link'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import 'react-circular-progressbar/dist/styles.css'

import StartLessonTooltip from './start-lesson-tooltip'

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
  const cycleLength = 8
  const cycleIndex = index % cycleLength
  let indentantionLevel

  if (cycleIndex < 3) indentantionLevel = cycleIndex
  else if (cycleIndex < 5) indentantionLevel = 4 - cycleIndex
  else if (cycleIndex < 7) indentantionLevel = 4 - cycleIndex
  else indentantionLevel = cycleIndex - 8

  const rightPosition = indentantionLevel * 40

  const isFirst = index === 0
  const isLast = index === totalCount
  const isCompleted = !current && !locked
  const href = isCompleted ? `/lesson/${id}` : '/lesson'
  const Icon = isCompleted ? Check : isLast ? Crown : Star

  return (
    <Link
      aria-disabled={locked}
      className={cn(locked && 'pointer-events-none')}
      href={href}
      style={{ pointerEvents: locked ? 'none' : 'auto' }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? '4rem' : '3rem'
        }}
      >
        {current ? (
          <CircularProgressbarWithChildren
            className="h-20 w-20"
            strokeWidth={8}
            styles={{
              trail: { stroke: '#e5e7eb' },
              path: { stroke: '#4ade80' }
            }}
            value={Number.isNaN(percentage) ? 0 : percentage}
          >
            <StartLessonTooltip />
            <Button
              className="absolute h-16 w-16 border-b-8"
              size="rounded"
              variant={locked ? 'locked' : 'secondary'}
            >
              <Icon
                className={cn(
                  'h-14 w-6',
                  locked
                    ? 'fill-neutral-400 stroke-neutral-400 text-neutral-400'
                    : 'fill-primary-foreground text-primary-foreground',
                  isCompleted && 'fill-none stroke-[4]'
                )}
              />
            </Button>
          </CircularProgressbarWithChildren>
        ) : (
          <Icon className="h-14 w-6 stroke-2 text-neutral-400 dark:text-neutral-500" />
        )}
      </div>
    </Link>
  )
}
