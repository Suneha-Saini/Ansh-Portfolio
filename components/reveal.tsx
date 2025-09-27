"use client"

import type React from "react"
import type { JSX } from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
  rootMargin?: string
  once?: boolean
}
export function Reveal({
  as: Tag = "div",
  className,
  children,
  rootMargin = "0px 0px -10% 0px",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            if (once) io.unobserve(e.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { root: null, rootMargin, threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin, once])

  return (
    <Tag ref={ref as any} className={cn(visible ? "reveal-in" : "reveal-init", className)}>
      {children}
    </Tag>
  )
}
