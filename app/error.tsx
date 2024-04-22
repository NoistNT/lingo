'use client'

export default function ErrorPage({ error }: { error: Error }) {
  if (error instanceof Error) {
    return <div>{error.message}</div>
  }
}
