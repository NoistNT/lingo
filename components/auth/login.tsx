import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { Loader } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface LoginProps {
  className?: string
  urlAfterSignIn?: string
  urlAfterSignOut?: string
}

export default function Login({
  className,
  urlAfterSignIn = '/learn',
  urlAfterSignOut = '/'
}: LoginProps) {
  return (
    <div className={cn('mr-20 lg:mr-16', className)}>
      <ClerkLoading>
        <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
      </ClerkLoading>
      <ClerkLoaded>
        <div className="flex justify-center">
          <SignedIn>
            <UserButton afterSignOutUrl={urlAfterSignOut} />
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl={urlAfterSignIn} mode="modal">
              <Button variant="ghost">Sign in</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </ClerkLoaded>
    </div>
  )
}
