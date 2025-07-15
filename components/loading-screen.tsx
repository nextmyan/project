import { GraduationCap } from "lucide-react"

interface LoadingScreenProps {
  message?: string
}

export default function LoadingScreen({ message = "Loading..." }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
        <GraduationCap className="h-12 w-12 text-blue-600 animate-bounce" />
        <h2 className="text-xl font-semibold mt-4 mb-2">AbroadiQ</h2>
        <p className="text-gray-600">{message}</p>
        <div className="mt-4 flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" style={{ animationDelay: "300ms" }}></div>
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" style={{ animationDelay: "600ms" }}></div>
        </div>
      </div>
    </div>
  )
}
