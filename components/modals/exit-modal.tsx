'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { useExitModal } from '@/store/use-exit-modal'

export default function ExitModal() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const { isOpen, onClose } = useExitModal()

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-hd">
        <DialogHeader className="mb-4 flex w-full items-center justify-center">
          <Image alt="Exit" height={100} src="/exit.svg" width={100} />
          <DialogTitle className="text-center text-2xl font-semibold text-primary">
            Wait, don&apos;t leave!
          </DialogTitle>
          <DialogDescription className="text-center text-base text-muted-foreground">
            You are about to exit Lingo. Do you really want to leave?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex w-full flex-col space-y-2.5">
            <Button
              className="w-full"
              size="lg"
              variant="primary"
              onClick={onClose}
            >
              Keep learning
            </Button>
            <Button
              className="w-full"
              size="lg"
              variant="dangerOutline"
              onClick={() => {
                onClose()
                router.push('/learn')
              }}
            >
              End session
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
