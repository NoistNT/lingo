import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 tracking-wide uppercase',
  {
    variants: {
      variant: {
        default:
          'bg-white dark:bg-transparent text-secondary-foreground border-primary-muted border-2 border-b-4 hover:bg-primary-foreground dark:hover:bg-primary-foreground active:border-b-2',
        outline:
          'bg-transparent text-secondary-foreground border-transparent focus-visible:ring-0 hover:bg-accent active:bg-primary-foreground',
        primary:
          'bg-cyan-400 dark:bg-cyan-400/90 text-primary-foreground border-cyan-500 dark:border-cyan-700 border-b-4 hover:bg-cyan-400/85 dark:hover:bg-cyan-400 active:border-b-2 dark:active:border-cyan-700',
        primaryOutline:
          'bg-secondary-muted hover:bg-primary-foreground text-cyan-500 dark:text-cyan-600',
        secondary:
          'bg-green-500 text-primary-foreground border-green-600 dark:border-green-700/90 border-b-4 hover:bg-green-500/90 active:border-b-2 dark:active:border-green-700',
        secondaryOutline:
          'bg-secondary-muted hover:bg-primary-foreground text-green-500',
        super:
          'bg-indigo-500/85 dark:bg-indigo-500 text-primary-foreground border-indigo-600/70 dark:border-indigo-700/80 border-b-4 hover:bg-indigo-500/90 dark:hover:bg-indigo-500/95 active:border-b-2 dark:active:border-indigo-700/90',
        superOutline:
          'bg-secondary-muted hover:bg-primary-foreground text-indigo-400/90',
        danger:
          'bg-rose-500 dark:bg-rose-500/85 text-primary-foreground border-rose-600 dark:border-rose-700/90 border-b-4 hover:bg-rose-500/90 dark:hover:bg-rose-500/90 active:border-b-2 dark:active:border-rose-700/90',
        dangerOutline:
          'bg-secondary-muted hover:bg-primary-foreground text-rose-500',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        ghost:
          'bg-transparent border-transparent border-0 hover:bg-primary-foreground text-muted-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        sidebar:
          'bg-transparent text-muted-foreground border-2 border-transparent hover:bg-primary-foreground transition-none',
        sidebarOutline:
          'bg-sky-500/15 text-sky-500 border-2 border-sky-300 hover:bg-primary-foreground hover:bg-sky-500/20 transition-none',
        locked:
          'bg-neutral-200/15 text-primary-foreground border-b-4 active:border-b-0 border-neutral-400 hover:bg-neutral-200/90 transition-none dark:border-neutral-700'
      },
      size: {
        default: 'h-11 px-4 py-2',
        sm: 'h-9 px-3 text-xs',
        lg: 'h-12 px-8',
        icon: 'h-10 w-10',
        rounded: 'rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }
