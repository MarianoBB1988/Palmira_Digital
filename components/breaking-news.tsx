"use client"

import { useEffect, useState } from "react"
import { newsData } from "@/lib/news-data"

export function BreakingNews() {
  const [current, setCurrent] = useState(0)
  const headlines = newsData.slice(0, 5).map((n) => n.title)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % headlines.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [headlines.length])

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2">
        <span className="shrink-0 rounded bg-secondary px-2 py-0.5 text-xs font-bold uppercase text-secondary-foreground">
          Urgente
        </span>
        <p className="truncate text-sm font-medium" aria-live="polite">
          {headlines[current]}
        </p>
      </div>
    </div>
  )
}
