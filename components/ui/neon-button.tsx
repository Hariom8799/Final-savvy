import { cn } from "@/lib/utils"
import type React from "react"

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline"
}

export function NeonButton({ children, className, variant = "default", ...props }: NeonButtonProps) {
  return (
    <button
      className={cn(
        "neon-button hoverable",
        variant === "outline" && "bg-transparent border border-primary text-primary",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
