import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../../components/ui/button'
import { CardDescription } from '../../components/ui/card'

export default function Footer() {
  return (
    <div className="hidden h-20 w-full items-center justify-center border-t-2 leading-[3rem] text-muted-foreground lg:flex lg:flex-col">
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-evenly">
        <Link className="flex items-center" href="/learn">
          <Button className="w-full font-bold" size="lg" variant="ghost">
            <Image
              alt="South Korea"
              className="mr-3 rounded-sm"
              height={32}
              src="https://flagcdn.com/kr.svg"
              width={36}
            />
            Korean
          </Button>
        </Link>
        <Link className="flex items-center" href="/learn">
          <Button className="w-full font-bold" size="lg" variant="ghost">
            <Image
              alt="China"
              className="mr-3 rounded-sm"
              height={32}
              src="https://flagcdn.com/cn.svg"
              width={36}
            />
            Chinese
          </Button>
        </Link>
        <Link className="flex items-center" href="/learn">
          <Button className="w-full font-bold" size="lg" variant="ghost">
            <Image
              alt="Spanish"
              className="mr-3 rounded-sm"
              height={32}
              src="https://flagcdn.com/es.svg"
              width={36}
            />
            Spanish
          </Button>
        </Link>
        <Link className="flex items-center" href="/learn">
          <Button className="w-full font-bold" size="lg" variant="ghost">
            <Image
              alt="French"
              className="mr-3 rounded-sm"
              height={32}
              src="https://flagcdn.com/fr.svg"
              width={36}
            />
            French
          </Button>
        </Link>
        <Link className="flex items-center" href="/learn">
          <Button className="w-full font-bold" size="lg" variant="ghost">
            <Image
              alt="Deutsch"
              className="mr-3 rounded-sm"
              height={32}
              src="https://flagcdn.com/de.svg"
              width={36}
            />
            Deutsch
          </Button>
        </Link>
      </div>
      <div className="absolute hidden opacity-80 filter xl:bottom-2 xl:right-4 xl:flex 2xl:right-6">
        <CardDescription className="flex flex-col items-center">
          Made with ❤️ by
          <Button size="sm" variant="link">
            <Link
              className="text-sky-700 hover:underline dark:text-cyan-400"
              href="https://github.com/NoistNT"
              target="_blank"
            >
              Ariel Piazzano
            </Link>
          </Button>
        </CardDescription>
      </div>
    </div>
  )
}
