'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { db } from '@/db/drizzle'
import { getCourseById, getUserProgress } from '@/db/queries'
import { userProgress } from '@/db/schema'

const revalidate = () => {
  revalidatePath('/courses')
  revalidatePath('/learn')
  redirect('/learn')
}

export const upsertUserProgress = async ({
  activeCourseId
}: {
  activeCourseId: number
}) => {
  const { userId } = auth()
  const user = await currentUser()

  if (!userId || !user) throw new Error('User not authenticated')

  const course = await getCourseById(activeCourseId)

  if (!course) throw new Error('Course not found')

  // TODO: Enable once units and lessons are added.
  // if (!course.units.length || !course.units[0].lessons.length)
  //   throw new Error ('Course has no lessons')

  const existingUserProgress = await getUserProgress()

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId,
      userName: user.username ?? 'User',
      userImgSrc: user.imageUrl ?? './user.png'
    })

    revalidate()
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId,
    userName: user.username ?? 'User',
    userImgSrc: user.imageUrl ?? './user.png'
  })

  revalidate()
}
