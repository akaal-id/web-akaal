import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: "default" | "muted" | "accent"
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const sectionVariants = {
  default: "bg-background",
  muted: "bg-muted/30",
  accent: "bg-accent/50",
}

const sectionSizes = {
  sm: "py-12",
  md: "py-16",
  lg: "py-20",
  xl: "py-24",
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, variant = "default", size = "md", className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "w-full",
          sectionVariants[variant],
          sectionSizes[size],
          className
        )}
        {...props}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }


