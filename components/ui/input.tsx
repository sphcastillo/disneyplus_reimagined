import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40",
          "transition-all duration-200 ease-out",
          "focus-visible:outline-none focus-visible:border-purple-400/50 focus-visible:bg-white/10 focus-visible:shadow-[0_0_0_1px_rgba(168,85,247,0.3),0_0_12px_rgba(168,85,247,0.15)]",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-white/90",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-white/10",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
