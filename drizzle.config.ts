import { config } from 'dotenv'
import { defineConfig } from 'drizzle-kit'

config({ path: './.env.local' })

export default defineConfig({
  schema: './db/schema.ts',
  driver: 'pg',
  out: './drizzle',
  dbCredentials: { connectionString: process.env.DB_URL! },
  verbose: true,
  strict: true
})
