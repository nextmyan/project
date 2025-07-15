export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700">Finding Your University Matches...</h2>
        <p className="text-gray-500 mt-2">We're analyzing your profile to find the best universities for you</p>
      </div>
    </div>
  )
}
