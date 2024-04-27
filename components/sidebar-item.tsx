'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

interface Props {
  label: string
  iconSrc: string
  href: string
}

export default function SidebarItem({ label, iconSrc, href }: Props) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Button
      asChild
      className="w-full justify-start"
      variant={active ? 'sidebarOutline' : 'sidebar'}
    >
      <Link className="flex items-center justify-start gap-x-7" href={href}>
        <Image alt={label} height={32} src={iconSrc} width={32} />
        {label}
      </Link>
    </Button>
  )
}
