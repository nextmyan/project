import { Suspense } from "react"
import UniversityFinder from "@/app/university-finder/page" // Updated import path
import LoadingSpinner from "@/components/loading-spinner"
import ErrorBoundary from "@/components/error-boundary"

export default function FinderPage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Suspense fallback={<LoadingSpinner />}>
            <UniversityFinder />
          </Suspense>
        </div>
      </div>
    </ErrorBoundary>
  )
}
