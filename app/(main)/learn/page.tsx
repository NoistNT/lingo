import { redirect } from 'next/navigation'

import FeedWrapper from '@/components/feed-wrapper'
import StickyWrapper from '@/components/sticky-wrapper'
import UserProgress from '@/components/user-progress'
import { getUserProgress } from '@/db/queries'

import Header from './header'

export default async function LearnPage() {
  const [userProgress] = await Promise.all([getUserProgress()])

  if (!userProgress?.activeCourse) redirect('/courses')

  return (
    <div className="flex flex-row-reverse gap-12 px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={{
            title: 'Korean',
            imgSrc: 'https://flagcdn.com/kr.svg'
          }}
          hasActiveSubscription={false}
          hearts={5}
          points={100}
        />
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Korean" />
      </FeedWrapper>
    </div>
  )
}
