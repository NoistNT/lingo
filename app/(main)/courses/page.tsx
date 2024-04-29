import { getCourses, getUserProgress } from '@/db/queries'

import List from './list'

export default async function CoursesPage() {
  const [courses, userProgress] = await Promise.all([
    getCourses(),
    getUserProgress()
  ])

  return (
    <div className="mx-auto h-full max-w-screen-lg px-3">
      <h1 className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">
        Language Courses
      </h1>
      <List
        key={userProgress?.activeCourseId}
        activeCourseId={userProgress?.activeCourseId}
        courses={courses}
      />
    </div>
  )
}
