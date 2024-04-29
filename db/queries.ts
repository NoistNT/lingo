import { auth } from '@clerk/nextjs/server'
import { eq } from 'drizzle-orm'
import { cache } from 'react'

import db from '@/db/drizzle'
import { courses, userProgress } from '@/db/schema'

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
