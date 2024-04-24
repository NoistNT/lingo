import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'

import { Button } from '../ui/button'

export default function Login() {
  return (
    <div>
      <ClerkLoading>
        <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
      </ClerkLoading>
      <ClerkLoaded>
        <div className="mr-16 flex justify-center md:mr-0">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/learn" mode="modal">
              <Button variant="ghost">Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </ClerkLoaded>
    </div>
  )
}
