"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { Suspense } from "react"

// This component safely uses useSearchParams with proper error handling
function AnalyticsContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname) {
      // You would typically send this to your analytics provider
      // This is just a placeholder
      const url = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`
      console.log(`Page view: ${url}`)
    }
  }, [pathname, searchParams])

  return null
}

// This is the main component that wraps the content in Suspense
export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  )
}
