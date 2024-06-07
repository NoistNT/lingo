import { redirect } from 'next/navigation'

import { getLesson, getUserProgress } from '@/db/queries'

import Quiz from './quiz'

export default async function Page() {
  const lessonData = getLesson()
  const userProgressData = getUserProgress()

  const [lesson, userProgress] = await Promise.all([
    lessonData,
    userProgressData
  ])

  if (!lesson || !userProgress) redirect('/learn')

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100

  return (
    <Quiz
      _initialLessonId={lesson.id}
      initialHearts={userProgress.hearts}
      initialLessonChallenges={lesson.challenges}
      initialPercentage={initialPercentage}
      userSubscription={false}
    />
  )
}
