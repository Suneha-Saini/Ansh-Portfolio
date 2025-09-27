import type React from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  id: string
  title: string
  subtitle?: string
  className?: string
  children: React.ReactNode
}
export function Section({ id, title, subtitle, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 md:py-24 scroll-mt-24 md:scroll-mt-28", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-10">
          <h2 className="text-balance text-3xl md:text-4xl font-semibold">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle ? <p className="mt-2 text-muted-foreground text-pretty">{subtitle}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}
