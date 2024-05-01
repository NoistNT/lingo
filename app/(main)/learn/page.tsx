import { redirect } from 'next/navigation'

import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import UserProgress from '@/components/user-progress'
import { getUnits, getUserProgress } from '@/db/queries'

import Header from './header'
import Unit from './unit'

export default async function LearnPage() {
  const [userProgress, units] = await Promise.all([
    getUserProgress(),
    getUnits()
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
              activeLesson={undefined}
              activeLessonPercentage={0}
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
