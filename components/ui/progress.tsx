"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value = 0, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative h-3 w-full overflow-hidden rounded-full bg-gray-200 shadow-inner",
      className
    )}
    {...props}
  >
    {/* Progress bar with gradient and animation */}
    <div
      className="h-full bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366] transition-all duration-700 ease-out relative overflow-hidden rounded-full shadow-sm"
      style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
    >
      {/* Animated shine effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        style={{
          animation: value > 0 ? 'shine 2s ease-in-out infinite' : 'none',
          backgroundSize: '200% 100%'
        }}
      />
    </div>
    
    {/* Pulse effect for loading state */}
    {value === 0 && (
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 animate-pulse rounded-full" />
    )}
  </div>
))
Progress.displayName = "Progress"

export { Progress }
