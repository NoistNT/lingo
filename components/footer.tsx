import Link from 'next/link'

import { CardDescription, CardFooter } from './ui/card'

export default function Footer() {
  return (
    <CardFooter className="flex justify-center py-6 leading-[3rem] text-muted-foreground opacity-80">
      <CardDescription>
        Made with ❤️ by{' '}
        <Link
          className="text-align-center text-sky-700 hover:underline dark:text-cyan-400"
          href="https://github.com/NoistNT"
          target="_blank"
        >
          Ariel Piazzano
        </Link>
      </CardDescription>
    </CardFooter>
  )
}
