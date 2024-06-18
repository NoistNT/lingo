import { config } from 'dotenv'

config({ path: './.env.local' })

if (!process.env.DATABASE_URL) {
  throw new Error('Missing environment variables')
}

export const DATABASE_URL = process.env.DATABASE_URL
