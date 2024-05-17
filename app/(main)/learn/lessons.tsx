import { lessons, units } from '@/db/schema'

import LessonButton from './lesson-button'

interface Props {
  lessons: (typeof lessons.$inferSelect & { completed: boolean })[]
  activeLesson:
    | (typeof lessons.$inferSelect & { unit: typeof units.$inferSelect })
    | undefined
  activeLessonPercentage: number
}

export default function Lessons({
  lessons,
  activeLesson,
  activeLessonPercentage
}: Props) {
  return (
    <div className="relative flex flex-col items-center">
      {lessons.map(({ id, title, description, completed }) => {
        const isCurrent = true || id === activeLesson?.id // TODO: Remove hardcoded true
        const isLocked = !completed && !isCurrent

        return (
          <LessonButton
            key={id}
            current={isCurrent}
            id={id}
            index={lessons.findIndex((lesson) => lesson.id === id)}
            locked={isLocked}
            percentage={activeLessonPercentage}
            totalCount={lessons.length - 1}
          />
        )
      })}
    </div>
  )
}
