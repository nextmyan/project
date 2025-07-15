import { Loader2 } from "lucide-react"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  text?: string
}

export default function LoadingSpinner({ size = "md", text }: LoadingSpinnerProps) {
  let spinnerSizeClass = "h-8 w-8"
  let textSizeClass = "text-lg"

  if (size === "sm") {
    spinnerSizeClass = "h-5 w-5"
    textSizeClass = "text-sm"
  } else if (size === "lg") {
    spinnerSizeClass = "h-12 w-12"
    textSizeClass = "text-xl"
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <Loader2 className={`${spinnerSizeClass} animate-spin text-blue-500`} />
      {text && <p className={`text-gray-600 ${textSizeClass}`}>{text}</p>}
    </div>
  )
}
