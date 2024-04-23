import Link from 'next/link'

import { CardDescription, CardFooter } from './ui/card'

export default function Footer() {
  return (
    <CardFooter className="hidden h-20 w-full items-center justify-center border-t-2 py-6 leading-[3rem] text-muted-foreground opacity-80 lg:flex">
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
