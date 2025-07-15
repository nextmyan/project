// Image optimization utilities
export const getImageProps = (index: number, total: number) => {
  // Prioritize loading for the first few images
  const isPriority = index < Math.min(3, total * 0.2)

  // Eager load the first 30% of images, lazy load the rest
  const loading = index < Math.min(6, total * 0.3) ? "eager" : "lazy"

  return {
    priority: isPriority,
    loading: loading as "eager" | "lazy",
  }
}

// Memoization helper for expensive calculations
export function memoize<T>(fn: (...args: any[]) => T): (...args: any[]) => T {
  const cache = new Map()

  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn(...args)
    cache.set(key, result)
    return result
  }
}
