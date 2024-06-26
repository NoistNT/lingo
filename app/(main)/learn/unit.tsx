import { lessons, units } from '@/db/schema'

import Lessons from './lessons'
import UnitBanner from './unit-banner'

interface Props {
  id: number
  order: number
  title: string
  description: string
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[]
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect
      })
    | undefined
  activeLessonPercentage: number
}

export default function Unit({
  id,
  order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage
}: Props) {
  return (
    <>
      <UnitBanner description={description} title={title} />
      <Lessons
        activeLesson={activeLesson}
        activeLessonPercentage={activeLessonPercentage}
        lessons={lessons}
      />
    </>
  )
}
