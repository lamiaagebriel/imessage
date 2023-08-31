// import { cn } from '@/lib/utils'
// import { cva, VariantProps } from 'class-variance-authority'
// import { Loader2 } from 'lucide-react'
// import { ButtonHTMLAttributes, FC } from 'react'

// export const buttonVariants = cva(
//   'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
//   {
//     variants: {
//       variant: {
//         default: 'bg-slate-900 text-white hover:bg-slate-800',
//         ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200',
//       },
//       size: {
//         default: 'h-10 py-2 px-4',
//         sm: 'h-9 px-2',
//         lg: 'h-11 px-8',
//       },
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'default',
//     },
//   }
// )

// export interface ButtonProps
//   extends ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   isLoading?: boolean
// }

// const Button: FC<ButtonProps> = ({
//   className,
//   children,
//   variant,
//   isLoading,
//   size,
//   ...props
// }) => {
//   return (
//     <button
//       className={cn(buttonVariants({ variant, size, className }))}
//       disabled={isLoading}
//       {...props}>
//       {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin' /> : null}
//       {children}
//     </button>
//   )
// }

// export default Button

// interface PersonInterface {
//   age: number
//   name: string
//   job?: boolean
// }

// const Person: PersonInterface = {
//   age: 14,
//   name: 'John'
// }

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Icons } from "../icons"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      disabled,
      children,
      variant,
      size,
      asChild = false,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Icons.spinner className="animate-spin h-4 w-4" />}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
