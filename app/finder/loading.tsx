import { LoadingSpinner } from "@/components/loading-spinner"

export default function FinderLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner />
        <p className="mt-4 text-gray-600">Loading AI University Finder...</p>
      </div>
    </div>
  )
}
