import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { cache } from 'react'

import { db } from '@/db/drizzle'
import {
  challengeProgress,
  courses,
  lessons,
  units,
  userProgress
} from '@/db/schema'

export const getUnits = cache(async () => {
  const { userId } = auth()
  const userProgress = await getUserProgress()

  if (!userId || !userProgress?.activeCourseId) return []

  const data = await db.query.units.findMany({
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        orderBy: (lessons, { asc }) => asc(lessons.order),
        with: {
          challenges: {
            with: {
              challengeProgress: { where: eq(challengeProgress.userId, userId) }
            }
          }
        }
      }
    }
  })

  const normalizedData = data.map((unit) => {
    const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {
      if (!lesson.challenges.length) return { ...lesson, completed: false }

      const challengesWithCompletedStatus = lesson.challenges.every(
        (challenge) =>
          challenge.challengeProgress &&
          challenge.challengeProgress.length > 0 &&
          challenge.challengeProgress.every((progress) => progress.completed)
      )

      return { ...lesson, completed: challengesWithCompletedStatus }
    })

    return { ...unit, lessons: lessonsWithCompletedStatus }
  })

  return normalizedData
})

export const getCourses = cache(async () => {
  return await db.query.courses.findMany()
})

export const getUserProgress = cache(async () => {
  const { userId } = auth()

  if (!userId) return null

  return await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: { activeCourse: true }
  })
})

export const getCourseById = cache(async (courseId: number) => {
  return await db.query.courses.findFirst({ where: eq(courses.id, courseId) })
})

export const getCourseProgress = cache(async () => {
  const { userId } = auth()
  const userProgress = await getUserProgress()

  if (!userId || !userProgress?.activeCourseId) return null

  const unitsInActiveCourse = await db.query.units.findMany({
    orderBy: (units, { asc }) => asc(units.order),
    where: eq(units.courseId, userProgress.activeCourseId),
    with: {
      lessons: {
        orderBy: (lessons, { asc }) => [asc(lessons.order)],
        with: {
          unit: true,
          challenges: {
            with: {
              challengeProgress: { where: eq(challengeProgress.userId, userId) }
            }
          }
        }
      }
    }
  })

  const firstUncompletedLesson = unitsInActiveCourse
    .flatMap((unit) => unit.lessons)
    .find((lesson) =>
      // TODO: If something doesn't work change the last if statement to `true`
      lesson.challenges.some(
        (challenge) =>
          !challenge.challengeProgress?.length ||
          challenge.challengeProgress.some((progress) => !progress.completed)
      )
    )

  return {
    activeLesson: firstUncompletedLesson,
    activeLessonId: firstUncompletedLesson?.id
  }
})

export const getLesson = cache(async (id?: number) => {
  const { userId } = auth()

  if (!userId) return null

  const courseProgress = await getCourseProgress()
  const lessonId = id ?? courseProgress?.activeLessonId

  if (!lessonId) return null

  const data = await db.query.lessons.findFirst({
    where: eq(lessons.id, lessonId),
    with: {
      challenges: {
        orderBy: (challenges, { asc }) => [asc(challenges.order)],
        with: {
          challengeOptions: true,
          challengeProgress: { where: eq(challengeProgress.userId, userId) }
        }
      }
    }
  })

  if (!data?.challenges) return null

  const normalizedChallenges = data.challenges.map((challenge) => {
    // TODO: If something doesn't work check the last if statement
    const completed =
      challenge.challengeProgress &&
      challenge.challengeProgress.length > 0 &&
      challenge.challengeProgress.every((progress) => progress.completed)

    return { ...challenge, completed }
  })

  return { ...data, challenges: normalizedChallenges }
})

export const getLessonPercentage = cache(async () => {
  const courseProgress = await getCourseProgress()

  if (!courseProgress) return 0

  const lesson = await getLesson(courseProgress.activeLessonId)

  if (!lesson) return 0

  const completedChallenges = lesson.challenges.filter(
    (challenge) => challenge.completed
  )
  const percentage = Math.round(
    (completedChallenges.length / lesson.challenges.length) * 100
  )

  return percentage
})
