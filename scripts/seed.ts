import { db } from '@/db/drizzle'
import * as schema from '@/db/schema'

const courses = [
  {
    id: 1,
    title: 'Korean',
    imgSrc: 'https://flagcdn.com/kr.svg'
  },
  {
    id: 2,
    title: 'Chinese',
    imgSrc: 'https://flagcdn.com/cn.svg'
  },
  {
    id: 3,
    title: 'Japanese',
    imgSrc: 'https://flagcdn.com/jp.svg'
  },
  {
    id: 4,
    title: 'Deutsch',
    imgSrc: 'https://flagcdn.com/de.svg'
  },
  {
    id: 5,
    title: 'French',
    imgSrc: 'https://flagcdn.com/fr.svg'
  }
]

const units = [
  {
    id: 1,
    courseId: 1,
    title: 'Unit 1',
    description: 'Learn the basics of Korean',
    order: 1
  }
]

const lessons = [
  {
    id: 1,
    unitId: 1,
    title: 'Hangul Basics',
    description: 'Learn the basics of Hangul',
    order: 1
  },
  {
    id: 2,
    unitId: 1,
    title: 'Vocabulary',
    description: 'Learn the basics of Hangul',
    order: 2
  },
  {
    id: 3,
    unitId: 1,
    title: 'Grammar',
    description: 'Learn the basics of Hangul',
    order: 3
  },
  {
    id: 4,
    unitId: 1,
    title: 'Phrases',
    description: 'Learn the basics of Hangul',
    order: 4
  },
  {
    id: 5,
    unitId: 1,
    title: 'Examples',
    description: 'Learn the basics of Hangul',
    order: 5
  }
]

const challenges = [
  {
    id: 1,
    lessonId: 1,
    type: 'SELECT' as const,
    question: "Which option means 'man' ?",
    order: 1
  }
]

const challengeOptions = [
  {
    id: 1,
    challengeId: 1,
    text: '남자',
    imgSrc: '/man.svg',
    correct: true,
    audioSrc: '/audio/kr/man.mp3'
  },
  {
    id: 2,
    challengeId: 1,
    text: '여자',
    imgSrc: '/woman.svg',
    correct: false,
    audioSrc: '/audio/kr/woman.mp3'
  },
  {
    id: 3,
    challengeId: 1,
    text: '사람',
    imgSrc: '/person.svg',
    correct: false,
    audioSrc: '/audio/kr/person.mp3'
  }
]

async function main() {
  try {
    await Promise.all([
      db.delete(schema.challenges),
      db.delete(schema.challengeOptions),
      db.delete(schema.challengeProgress),
      db.delete(schema.courses),
      db.delete(schema.lessons),
      db.delete(schema.units),
      db.delete(schema.userProgress)
    ])
    console.log('Seeding the database...')
    await db.insert(schema.courses).values(courses)
    await db.insert(schema.units).values(units)
    await db.insert(schema.lessons).values(lessons)
    await db.insert(schema.challenges).values(challenges)
    await db.insert(schema.challengeOptions).values(challengeOptions)
    console.log('Database seeded!')
  } catch (error) {
    throw new Error('Failed to seed the database')
  }
}

main().then(() => process.exit(0))
