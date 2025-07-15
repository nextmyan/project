"use client"

import { useEffect } from "react"

export default function PerformanceOptimizations() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      { href: "/fonts/inter.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" },
      // Add other critical resources here
    ]

    preloadLinks.forEach(({ href, as, type, crossOrigin }) => {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href = href
      link.as = as
      if (type) link.type = type
      if (crossOrigin) link.crossOrigin = crossOrigin
      document.head.appendChild(link)
    })

    // Implement lazy loading for non-critical resources
    const lazyLoadObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement
          if (target.dataset.src) {
            target.src = target.dataset.src
            target.removeAttribute("data-src")
            lazyLoadObserver.unobserve(target)
          }
        }
      })
    })

    document.querySelectorAll("img[data-src]").forEach((img) => {
      lazyLoadObserver.observe(img)
    })

    return () => {
      lazyLoadObserver.disconnect()
    }
  }, [])

  return null
}
