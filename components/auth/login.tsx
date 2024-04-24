import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedOut
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Login() {
  return (
    <div className="flex w-5/6 flex-col gap-2">
      <ClerkLoading>
        <Loader className="mx-auto h-5 w-5 animate-spin text-muted-foreground" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedOut>
          <SignUpButton mode="modal">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedOut>
          <SignInButton mode="modal">
            <Button className="w-full" size="lg" variant="primaryOutline">
              I already have an account.
            </Button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </div>
  )
}
