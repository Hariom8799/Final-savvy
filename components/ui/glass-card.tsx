import { cn } from "@/lib/utils"
import type React from "react"

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  neon?: boolean
}

export function GlassCard({ children, className, neon = false, ...props }: GlassCardProps) {
  return (
    <div className={cn("glass rounded-lg p-6", neon && "neon-border", className)} {...props}>
      {children}
    </div>
  )
}
