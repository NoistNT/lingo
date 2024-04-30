import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { getCourses } from '@/db/queries'

export default async function Footer() {
  const courses = await getCourses()

  return (
    <footer className="hidden h-20 w-full items-center justify-center border-t-2 leading-[3rem] text-muted-foreground lg:flex lg:flex-col">
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-evenly">
        {courses.map(({ id, title, imgSrc }) => (
          <Link key={id} className="flex items-center" href="/learn">
            <Button className="w-full font-bold" size="lg" variant="ghost">
              <Image
                alt={title}
                className="mr-3 rounded-sm"
                height={32}
                src={imgSrc}
                width={36}
              />
              {title}
            </Button>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-5 right-4 hidden opacity-80 filter xl:flex 2xl:right-6">
        <div className="flex flex-col items-center">
          <span className="text-sm leading-relaxed">Made with ❤️ by</span>
          <Button className="h-auto" size="sm" variant="link">
            <Link
              className="text-sky-700 hover:underline dark:text-cyan-400"
              href="https://github.com/NoistNT"
              target="_blank"
            >
              Ariel Piazzano
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
