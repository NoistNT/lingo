import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function Register() {
  return (
    <div className="flex w-5/6 flex-col gap-2">
      <ClerkLoading>
        <Loader className="mx-auto h-5 w-5 animate-spin text-muted-foreground" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <SignUpButton forceRedirectUrl="/learn" mode="modal">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
          </SignUpButton>
          <SignInButton forceRedirectUrl="/learn" mode="modal">
            <Button className="w-full" size="lg" variant="primaryOutline">
              I already have an account.
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Link href="/learn">
            <Button className="w-full" size="lg" variant="secondary">
              Learn
            </Button>
          </Link>
        </SignedIn>
      </ClerkLoaded>
    </div>
  )
}
