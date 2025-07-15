"use client"

import type React from "react"

import { useState, useMemo, useCallback, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, GraduationCap, MapPin, Star, Filter } from "lucide-react"
import { useDebounce } from "@/hooks/use-debounce"
import LoadingSpinner from "@/components/loading-spinner"
import ErrorBoundary from "@/components/error-boundary"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

// Add Image import at the top
import Image from "next/image"

// Import the universities data from a separate file
import { universities } from "@/data/universities"

export type University = {
  id: string
  name: string
  country: string
  ranking?: number
  tuition?: string
  acceptanceRate?: string
  programs: (string | { name: string })[]
  image?: string
  flag?: string
  tuitionFees?: {
    min?: number
    max?: number
  }
}

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [countryFilter, setCountryFilter] = useState("all")
  const [sortOption, setSortOption] = useState("ranking")
  const [isLoading, setIsLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(8)
  const [showFilters, setShowFilters] = useState(false)

  // Use debounced search for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  // Use intersection observer for infinite scrolling
  const { ref, isIntersecting } = useIntersectionObserver()

  const sortUniversities = useCallback((universities: University[], sortOption: string) => {
    if (!universities) return []

    return [...universities].sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "ranking-asc":
          return (a.ranking || 9999) - (b.ranking || 9999)
        case "ranking-desc":
          return (b.ranking || 9999) - (a.ranking || 9999)
        case "tuition-asc":
          // Simple comparison for demonstration
          return (a.tuitionFees?.min || 0) - (b.tuitionFees?.min || 0)
        case "tuition-desc":
          return (b.tuitionFees?.min || 0) - (a.tuitionFees?.min || 0)
        default:
          return 0
      }
    })
  }, [])

  // Add memoization for filtered universities
  const filteredUniversities = useMemo(() => {
    // Filter universities based on search term and country filter
    let filtered = universities

    // Apply search filter
    if (debouncedSearchTerm) {
      filtered = filtered.filter(
        (university) =>
          university.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          university.country.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          university.programs.some((program) =>
            typeof program === "string"
              ? program.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
              : program.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
          ),
      )
    }

    // Apply country filter
    if (countryFilter !== "all") {
      filtered = filtered.filter((university) => university.country === countryFilter)
    }

    // Apply sorting
    return sortUniversities(filtered, sortOption)
  }, [debouncedSearchTerm, countryFilter, sortOption, sortUniversities])

  const loadMore = useCallback(() => {
    if (filteredUniversities.length > visibleCount) {
      setIsLoading(true)
      setTimeout(() => {
        setVisibleCount((prev) => prev + 6)
        setIsLoading(false)
      }, 500)
    }
  }, [visibleCount, filteredUniversities.length, filteredUniversities])

  // Update the filter handlers to show loading state
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setIsLoading(true)
  }

  const handleCountryFilter = useCallback((e) => {
    setIsLoading(true)
    setCountryFilter(e.target.value)
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  const handleSortOption = useCallback((e) => {
    setIsLoading(true)
    setSortOption(e.target.value)
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  // Load more universities when user scrolls to the bottom
  useEffect(() => {
    if (isIntersecting) {
      loadMore()
    }
  }, [isIntersecting, loadMore])

  // Update loading state when debounced search term changes
  useEffect(() => {
    setIsLoading(false)
  }, [debouncedSearchTerm])

  // Get unique countries for the filter dropdown
  const uniqueCountries = useMemo(() => {
    return ["all", ...new Set(universities.map((uni) => uni.country))].sort()
  }, [])

  // Get visible universities based on the current count
  const visibleUniversities = useMemo(() => {
    return filteredUniversities.slice(0, visibleCount)
  }, [filteredUniversities, visibleCount])

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true)
    setSortOption(e.target.value)
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Universities Worldwide</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore leading universities with detailed information on programs, tuition fees, and admission
                requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      placeholder="Search universities, programs, or countries..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowFilters(!showFilters)}
                    className="md:hidden"
                  >
                    <Filter className="h-4 w-4" />
                  </Button>
                  <div className={`${showFilters ? "flex" : "hidden"} md:flex gap-2 flex-wrap md:flex-nowrap`}>
                    <select
                      className="px-3 py-2 border rounded-md text-sm"
                      value={countryFilter}
                      onChange={handleCountryFilter}
                    >
                      <option value="all">All Countries</option>
                      {uniqueCountries
                        .filter((country) => country !== "all")
                        .map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                    </select>
                    <select
                      value={sortOption}
                      onChange={handleSortChange}
                      className="p-2 border rounded-md bg-white dark:bg-gray-800"
                    >
                      <option value="name-asc">Name (A-Z)</option>
                      <option value="name-desc">Name (Z-A)</option>
                      <option value="ranking-asc">Ranking (Low to High)</option>
                      <option value="ranking-desc">Ranking (High to Low)</option>
                      <option value="tuition-asc">Tuition (Low to High)</option>
                      <option value="tuition-desc">Tuition (High to Low)</option>
                    </select>
                  </div>
                </div>
              </div>

              {isLoading && visibleUniversities.length === 0 && (
                <div className="flex justify-center py-8">
                  <LoadingSpinner size="md" text="Loading universities..." />
                </div>
              )}

              {!isLoading && visibleUniversities.length > 0 ? (
                <div className="space-y-6">
                  {visibleUniversities.map((university, index) => (
                    <Card
                      key={university.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative h-48 md:h-full overflow-hidden">
                          <div className="relative w-full h-full">
                            <Image
                              src={university.image || "/placeholder.svg"}
                              alt={university.name}
                              className="object-cover"
                              fill
                              sizes="(max-width: 768px) 100vw, 400px"
                              loading={index < 4 ? "eager" : "lazy"}
                              priority={index < 2}
                            />
                          </div>
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-blue-600">Rank #{university.ranking || "N/A"}</Badge>
                          </div>
                        </div>
                        <div className="md:col-span-2 p-4 md:p-6">
                          <div className="flex items-center mb-2">
                            <h3 className="text-xl font-bold text-gray-900 mr-2">{university.name}</h3>
                            {university.flag && (
                              <Image
                                src={university.flag || "/placeholder.svg"}
                                alt={`${university.country} flag`}
                                width={16}
                                height={12}
                                className="rounded-sm"
                              />
                            )}
                          </div>
                          <div className="flex items-center text-gray-600 mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{university.country}</span>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Tuition Fee</h4>
                              <p className="text-gray-900">{university.tuition || "Contact for details"}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Acceptance Rate</h4>
                              <p className="text-gray-900">{university.acceptanceRate || "Not specified"}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Popular Programs</h4>
                            <div className="flex flex-wrap gap-2">
                              {university.programs.slice(0, 5).map((program, index) => (
                                <Badge key={index} variant="outline" className="bg-gray-50">
                                  {typeof program === "string" ? program : program.name}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Link href={`/universities/${university.id}`}>
                              <Button className="bg-blue-600 hover:bg-blue-700">
                                View Details <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                !isLoading && (
                  <div className="text-center py-12">
                    <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">No Universities Found</h3>
                    <p className="text-gray-500 mb-6">
                      We couldn't find any universities matching your search criteria. Try adjusting your filters.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm("")
                        setCountryFilter("all")
                        setSortOption("ranking")
                      }}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Reset Filters
                    </Button>
                  </div>
                )
              )}

              {/* Infinite scroll loading indicator */}
              {!isLoading && filteredUniversities.length > visibleCount && (
                <div ref={ref} className="flex justify-center py-8">
                  <Button variant="outline" className="mr-2" onClick={loadMore}>
                    Load More Universities
                  </Button>
                </div>
              )}

              {isLoading && visibleUniversities.length > 0 && (
                <div className="flex justify-center py-8">
                  <LoadingSpinner size="sm" text="Loading more..." />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                  University Rankings
                </h2>
                <p className="text-gray-600 mb-4">
                  Explore universities ranked by academic reputation, employer reputation, and research impact.
                </p>
                <Link href="/universities/rankings">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Rankings <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Star className="h-5 w-5 text-blue-600 mr-2" />
                  Scholarship Opportunities
                </h2>
                <p className="text-gray-600 mb-4">
                  Find scholarships available at top universities worldwide for international students.
                </p>
                <Link href="/services">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Find Scholarships <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}
