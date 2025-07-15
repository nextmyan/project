"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw } from "lucide-react"
import Link from "next/link"

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function ErrorBoundary({ children, fallback }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error("Caught error:", error)
      setError(error.error)
      setHasError(true)

      // Report error to analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "exception", {
          description: error.message,
          fatal: false,
        })
      }
    }

    window.addEventListener("error", errorHandler)

    return () => {
      window.removeEventListener("error", errorHandler)
    }
  }, [])

  if (hasError) {
    if (fallback) return <>{fallback}</>

    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center p-6 text-center">
        <AlertTriangle className="h-12 w-12 text-amber-500 mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-600 mb-6 max-w-md">
          We apologize for the inconvenience. Our team has been notified of this issue.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={() => {
              setHasError(false)
              setError(null)
              window.location.reload()
            }}
            className="flex items-center"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Page
          </Button>
          <Link href="/">
            <Button variant="outline">Return to Home</Button>
          </Link>
        </div>
        {process.env.NODE_ENV === "development" && error && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md text-left overflow-auto max-w-full">
            <p className="font-mono text-sm text-red-600">{error.toString()}</p>
          </div>
        )}
      </div>
    )
  }

  return <>{children}</>
}
