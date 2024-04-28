import { InfinityIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface UserProgressProps {
  activeCourse: { title: string; imgSrc: string } // TODO: Add type from DB
  hasActiveSubscription: boolean
  hearts: number
  points: number
}

export default function UserProgress({
  activeCourse: { title, imgSrc },
  hasActiveSubscription,
  hearts,
  points
}: UserProgressProps) {
  return (
    <div className="flex w-full max-w-xs items-center justify-between gap-x-2 2xl:max-w-sm">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            alt={title}
            className="rounded-sm border"
            height={32}
            src={imgSrc}
            width={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button className="text-orange-500" variant="ghost">
          <Image
            alt="Points"
            className="mr-2"
            height={22}
            src="/points.svg"
            width={22}
          />
          {points}
        </Button>
      </Link>
      <Link href="/shop">
        <Button className="text-rose-500" variant="ghost">
          <Image
            alt="Hearts"
            className="mr-2"
            height={22}
            src="/heart.svg"
            width={22}
          />
          {hasActiveSubscription ? (
            <InfinityIcon className="h-4 w-4 stroke-[3]" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  )
}
