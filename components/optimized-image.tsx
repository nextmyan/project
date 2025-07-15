"use client"

import Image from "next/image"
import { useState } from "react"

type OptimizedImageProps = {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  loading?: "eager" | "lazy"
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  fill = false,
  width,
  height,
  sizes,
  priority = false,
  loading,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Default placeholder if src is empty
  const imageSrc = src || "/placeholder.svg"

  return (
    <div className={`${fill ? "relative w-full h-full" : ""} overflow-hidden ${className}`}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        priority={priority}
        loading={loading}
        className={`
          ${fill ? "object-cover" : ""}
          ${isLoading ? "blur-sm scale-105" : "blur-0 scale-100"}
          transition-all duration-300
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />

      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-20">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
