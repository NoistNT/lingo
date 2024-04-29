'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { toast } from 'sonner'

import { upsertUserProgress } from '@/actions/user-progress'
import { courses, userProgress } from '@/db/schema'

import Card from './card'

interface Props {
  courses: (typeof courses.$inferSelect)[]
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}

export default function List({ courses, activeCourseId }: Props) {
  const router = useRouter()
  const [pending, startTransition] = useTransition()

  const onClick = (id: number) => {
    if (pending) return
    if (id === activeCourseId) return router.push('/learn')
    startTransition(() =>
      upsertUserProgress({ activeCourseId: id }).catch(() => {
        toast.error('Something went wrong!')
      })
    )
  }

  return (
    <div className="grid grid-cols-2 gap-4 pt-6 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map(({ id, title, imgSrc }) => (
        <Card
          key={id}
          active={id === activeCourseId}
          disabled={pending}
          id={id}
          imgSrc={imgSrc}
          title={title}
          onClick={onClick}
        >
          <h1>{title}</h1>
          <Image alt={title} height={64} src={imgSrc} width={64} />
        </Card>
      ))}
    </div>
  )
}
