'use client'

import { useState } from 'react'

import {
  ChallengeStatus,
  ChallengeType,
  type challengeOptions,
  type challenges
} from '@/db/schema'

import Challenge from './challenge'
import Header from './header'
import QuestionBubble from './question-bubble'

interface Props {
  initialHearts: number
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean
    challengeOptions: (typeof challengeOptions.$inferSelect)[]
  })[]
  _initialLessonId: number
  initialPercentage: number
  userSubscription: boolean // TODO: Replace with user subscription type from db
}

export default function Quiz({
  initialHearts,
  initialLessonChallenges,
  _initialLessonId,
  initialPercentage,
  userSubscription = false
}: Props) {
  const [hearts, setHearts] = useState(initialHearts)
  const [percentage, setPercentage] = useState(initialPercentage)
  const [challenges, setChallenges] = useState(initialLessonChallenges)
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    )

    return uncompletedIndex === -1 ? 0 : uncompletedIndex
  })

  const challenge = challenges[activeIndex]
  const options = challenge?.challengeOptions ?? []

  const title =
    challenge.type === ChallengeType.ASSIST
      ? 'Select the correct meaning'
      : challenge.question

  return (
    <>
      <Header
        hasActiveSubscription={userSubscription}
        hearts={hearts}
        percentage={percentage}
      />
      <div className="flex-1">
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[600px] lg:px-0">
            <h1 className="text-center text-lg font-bold text-neutral-700 dark:text-neutral-300 lg:text-start lg:text-3xl">
              {title}
            </h1>
            <div>
              {challenge.type === ChallengeType.ASSIST && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challenge
                disabled={false}
                options={options}
                selectedOption={undefined}
                status={ChallengeStatus.UNSELECTED}
                type={challenge.type}
                onSelect={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
