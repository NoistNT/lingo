import { redirect } from 'next/navigation'

import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import UserProgress from '@/components/user-progress'
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress
} from '@/db/queries'

import Header from './header'
import Unit from './unit'

export default async function LearnPage() {
  const userProgressData = await getUserProgress()
  const courseProgressData = await getCourseProgress()
  const lessonPercentageData = await getLessonPercentage()
  const unitsData = await getUnits()

  const [userProgress, courseProgress, lessonPercentage, units] =
    await Promise.all([
      userProgressData,
      courseProgressData,
      lessonPercentageData,
      unitsData
    ])

  if (!userProgress?.activeCourse) redirect('/courses')

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hasActiveSubscription={false}
          hearts={userProgress.hearts}
          points={userProgress.points}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map(({ id, title, order, lessons, description }) => (
          <div key={id} className="mb-10">
            <Unit
              activeLesson={courseProgress?.activeLesson ?? undefined}
              activeLessonPercentage={lessonPercentage}
              description={description}
              id={id}
              lessons={lessons}
              order={order}
              title={title}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  )
}
