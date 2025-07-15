"use client"

import type React from "react"

import { useState, useMemo, useCallback, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GraduationCap, Search, Users } from "lucide-react"
import LoadingSpinner from "@/components/loading-spinner"
import { useDebounce } from "@/hooks/use-debounce"
import ErrorBoundary from "@/components/error-boundary"
// Add Image import at the top
import Image from "next/image"

type Country = {
  name: string
  image: string
  flag: string
  universities: number
  avgTuition: string
  livingCost: string
  workRights: string
  prPathway: string
  popularCourses: string[]
  continent: string
  languages: string[]
  scholarships: string
  studentsCount?: number
}

const countries = [
  {
    name: "United States",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/us.png",
    universities: 4500,
    avgTuition: "$25,000 - $55,000",
    livingCost: "$10,000 - $25,000",
    workRights: "20 hours/week during studies, OPT after graduation",
    prPathway: "H-1B visa, Green Card through employment",
    popularCourses: ["Computer Science", "Business", "Engineering", "Medicine", "Arts"],
    continent: "North America",
    languages: ["English"],
    scholarships: "Extensive",
    studentsCount: 100000,
  },
  {
    name: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/gb.png",
    universities: 130,
    avgTuition: "£10,000 - £38,000",
    livingCost: "£9,000 - £15,000",
    workRights: "20 hours/week during studies, 2-year PSW visa",
    prPathway: "Skilled Worker visa, Indefinite Leave to Remain after 5 years",
    popularCourses: ["Business", "Computer Science", "Medicine", "Engineering", "Arts"],
    continent: "Europe",
    languages: ["English"],
    scholarships: "Moderate",
    studentsCount: 80000,
  },
  {
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
    universities: 100,
    avgTuition: "CAD 20,000 - 30,000",
    livingCost: "CAD 10,000 - 15,000",
    workRights: "20 hours/week during studies, 3-year PGWP",
    prPathway: "Express Entry, Provincial Nominee Program",
    popularCourses: ["Engineering", "Computer Science", "Business", "Healthcare", "Media"],
    continent: "North America",
    languages: ["English", "French"],
    scholarships: "Moderate",
    studentsCount: 70000,
  },
  {
    name: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/au.png",
    universities: 43,
    avgTuition: "AUD 20,000 - 45,000",
    livingCost: "AUD 15,000 - 25,000",
    workRights: "40 hours/fortnight during studies, 2-4 year PSW visa",
    prPathway: "Skilled Independent visa, Employer Sponsored visa",
    popularCourses: ["Business", "Engineering", "Health Sciences", "IT", "Hospitality"],
    continent: "Oceania",
    languages: ["English"],
    scholarships: "Moderate",
    studentsCount: 60000,
  },
  {
    name: "Germany",
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/de.png",
    universities: 400,
    avgTuition: "No tuition (€100-300 semester fee)",
    livingCost: "€10,000 - €12,000",
    workRights: "120 full days or 240 half days per year, 18-month job seeker visa",
    prPathway: "EU Blue Card, Settlement permit after 21-33 months",
    popularCourses: ["Engineering", "Computer Science", "Medicine", "Physics", "Business"],
    continent: "Europe",
    languages: ["German", "English (some programs)"],
    scholarships: "Limited",
    studentsCount: 90000,
  },
  {
    name: "Netherlands",
    image:
      "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/nl.png",
    universities: 14,
    avgTuition: "€8,000 - €20,000",
    livingCost: "€10,000 - €12,000",
    workRights: "16 hours/week during studies, orientation year after graduation",
    prPathway: "Highly Skilled Migrant permit, permanent residence after 5 years",
    popularCourses: ["Business", "Engineering", "Social Sciences", "Agriculture", "Arts"],
    continent: "Europe",
    languages: ["Dutch", "English (many programs)"],
    scholarships: "Moderate",
    studentsCount: 40000,
  },
  {
    name: "Sweden",
    image:
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/se.png",
    universities: 40,
    avgTuition: "SEK 80,000 - 140,000",
    livingCost: "SEK 8,000 - 12,000 per month",
    workRights: "No restrictions during studies, 6-month job seeker permit",
    prPathway: "Work permit, permanent residence after 4 years",
    popularCourses: ["Engineering", "IT", "Design", "Environmental Science", "Business"],
    continent: "Europe",
    languages: ["Swedish", "English (most programs)"],
    scholarships: "Limited",
    studentsCount: 35000,
  },
  {
    name: "India",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/in.png",
    universities: 1000,
    avgTuition: "$3,000 - $8,000",
    livingCost: "$2,500 - $5,000",
    workRights: "Limited, primarily on-campus employment",
    prPathway: "Employment visa after graduation, potential for long-term residency",
    popularCourses: ["Engineering", "Medicine", "IT", "Business Management", "Pharmacy"],
    continent: "Asia",
    languages: ["English", "Hindi", "Various regional languages"],
    scholarships: "Moderate",
    studentsCount: 120000,
  },
  {
    name: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/fr.png",
    universities: 250,
    avgTuition: "€170 - €3,770",
    livingCost: "€9,600 - €14,400",
    workRights: "964 hours per year (about 20 hours/week), 1-year job search visa after graduation",
    prPathway: "Talent Passport, permanent residence after 5 years",
    popularCourses: ["Business", "Engineering", "Arts", "Fashion Design", "Culinary Arts"],
    continent: "Europe",
    languages: ["French", "English (some programs)"],
    scholarships: "Moderate",
    studentsCount: 55000,
  },
  {
    name: "Italy",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/it.png",
    universities: 97,
    avgTuition: "€900 - €4,000",
    livingCost: "€8,000 - €12,000",
    workRights: "20 hours/week during studies, post-study work options available",
    prPathway: "Work permit, permanent residence after 5 years",
    popularCourses: ["Arts", "Architecture", "Fashion Design", "Engineering", "Business"],
    continent: "Europe",
    languages: ["Italian", "English (some programs)"],
    scholarships: "Moderate",
    studentsCount: 30000,
  },
  {
    name: "Spain",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/es.png",
    universities: 76,
    avgTuition: "€750 - €3,500",
    livingCost: "€7,000 - €12,000",
    workRights: "20 hours/week during studies, post-study options available",
    prPathway: "Work permit, permanent residence after 5 years",
    popularCourses: ["Business", "Tourism", "Engineering", "Arts", "Medicine"],
    continent: "Europe",
    languages: ["Spanish", "English (some programs)"],
    scholarships: "Limited",
    studentsCount: 28000,
  },
  {
    name: "Ireland",
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/ie.png",
    universities: 34,
    avgTuition: "€9,000 - €25,000",
    livingCost: "€9,000 - €15,000",
    workRights: "20 hours/week during studies, 2-year stay back option",
    prPathway: "Critical Skills Employment Permit, permanent residence after 5 years",
    popularCourses: ["Computer Science", "Business", "Medicine", "Engineering", "Humanities"],
    continent: "Europe",
    languages: ["English"],
    scholarships: "Moderate",
    studentsCount: 25000,
  },
  {
    name: "Japan",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/jp.png",
    universities: 780,
    avgTuition: "¥535,800 - ¥950,000",
    livingCost: "¥1,000,000 - ¥1,500,000",
    workRights: "28 hours/week during studies, post-study work options available",
    prPathway: "Work visa, permanent residence after 10 years",
    popularCourses: ["Engineering", "Business", "Japanese Studies", "Computer Science", "Arts"],
    continent: "Asia",
    languages: ["Japanese", "English (some programs)"],
    scholarships: "Moderate",
    studentsCount: 45000,
  },
  {
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/sg.png",
    universities: 34,
    avgTuition: "SGD 20,000 - 45,000",
    livingCost: "SGD 10,000 - 15,000",
    workRights: "16 hours/week during term, full-time during holidays",
    prPathway: "Employment Pass, permanent residence after 2-6 years",
    popularCourses: ["Business", "Engineering", "Computer Science", "Medicine", "Law"],
    continent: "Asia",
    languages: ["English", "Mandarin (some programs)"],
    scholarships: "Moderate",
    studentsCount: 22000,
  },
  {
    name: "New Zealand",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/nz.png",
    universities: 8,
    avgTuition: "NZD 22,000 - 35,000",
    livingCost: "NZD 15,000 - 25,000",
    workRights: "20 hours/week during studies, 1-3 year post-study work visa",
    prPathway: "Skilled Migrant Category, permanent residence after 2 years",
    popularCourses: ["Agriculture", "Environmental Science", "Tourism", "Engineering", "Business"],
    continent: "Oceania",
    languages: ["English"],
    scholarships: "Limited",
    studentsCount: 15000,
  },
  // New countries
  {
    name: "Denmark",
    image:
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/dk.png",
    universities: 29,
    avgTuition: "Free for EU/EEA, €6,000 - €16,000 for non-EU",
    livingCost: "€10,000 - €15,000",
    workRights: "20 hours/week during studies, 6-month job search visa",
    prPathway: "Work permit, permanent residence after 8 years",
    popularCourses: ["Engineering", "Business", "Design", "Environmental Science", "IT"],
    continent: "Europe",
    languages: ["Danish", "English (many programs)"],
    scholarships: "Limited",
    studentsCount: 18000,
  },
  {
    name: "Belgium",
    image:
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/be.png",
    universities: 40,
    avgTuition: "€800 - €4,000",
    livingCost: "€8,000 - €12,000",
    workRights: "20 hours/week during studies, 12-month job search visa",
    prPathway: "Work permit, permanent residence after 5 years",
    popularCourses: ["Business", "Engineering", "Political Science", "Arts", "Medicine"],
    continent: "Europe",
    languages: ["Dutch", "French", "German", "English (many programs)"],
    scholarships: "Moderate",
    studentsCount: 20000,
  },
  {
    name: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/ch.png",
    universities: 12,
    avgTuition: "CHF 1,000 - 3,500",
    livingCost: "CHF 18,000 - 28,000",
    workRights: "15 hours/week during studies, 6-month job search period",
    prPathway: "Work permit, permanent residence after 10 years",
    popularCourses: ["Finance", "Hospitality", "Engineering", "Medicine", "International Relations"],
    continent: "Europe",
    languages: ["German", "French", "Italian", "English (many programs)"],
    scholarships: "Limited",
    studentsCount: 10000,
  },
  {
    name: "Norway",
    image:
      "https://images.unsplash.com/photo-1516544820488-4a99f8d3e6af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/no.png",
    universities: 25,
    avgTuition: "Free (small semester fee)",
    livingCost: "NOK 120,000 - 150,000",
    workRights: "20 hours/week during studies, job search visa available",
    prPathway: "Work permit, permanent residence after 3 years",
    popularCourses: ["Engineering", "Renewable Energy", "Marine Technology", "Arctic Studies", "Business"],
    continent: "Europe",
    languages: ["Norwegian", "English (many programs)"],
    scholarships: "Limited",
    studentsCount: 17000,
  },
  {
    name: "South Korea",
    image:
      "https://images.unsplash.com/photo-1538485399081-7c8973c16a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/kr.png",
    universities: 370,
    avgTuition: "₩3,000,000 - ₩7,000,000",
    livingCost: "₩8,000,000 - ₩12,000,000",
    workRights: "20 hours/week during studies, 2-year job search visa",
    prPathway: "Work visa, permanent residence after 5 years",
    popularCourses: ["Engineering", "Business", "Korean Studies", "Computer Science", "Media"],
    continent: "Asia",
    languages: ["Korean", "English (some programs)"],
    scholarships: "Moderate",
    studentsCount: 38000,
  },
  {
    name: "China",
    image:
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/cn.png",
    universities: 2000,
    avgTuition: "¥20,000 - ¥60,000",
    livingCost: "¥30,000 - ¥80,000",
    workRights: "Limited, primarily on-campus employment",
    prPathway: "Work visa, permanent residence difficult to obtain",
    popularCourses: ["Business", "Engineering", "Medicine", "Chinese Language", "Computer Science"],
    continent: "Asia",
    languages: ["Chinese", "English (some programs)"],
    scholarships: "Extensive",
    studentsCount: 150000,
  },
]

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState("popularity-desc")
  const [activeTab, setActiveTab] = useState("all")
  const [isLoading, setIsLoading] = useState(false)

  // Use debounced search term for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  // Update the filter handlers to show loading state
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
    setIsLoading(true)
    // Loading state will be updated when the debounced value changes
  }

  const handleTabChange = useCallback((value) => {
    setIsLoading(true)
    setActiveTab(value)
    setTimeout(() => setIsLoading(false), 300)
  }, [])

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true)
    setSortOption(e.target.value)
    setTimeout(() => setIsLoading(false), 300)
  }

  const sortCountries = useCallback((countries: Country[], sortOption: string) => {
    if (!countries) return []

    return [...countries].sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "popularity-desc":
          return (b.studentsCount || 0) - (a.studentsCount || 0)
        case "popularity-asc":
          return (a.studentsCount || 0) - (b.studentsCount || 0)
        default:
          return 0
      }
    })
  }, [])

  // Add memoization for filtered countries
  const filteredCountries = useMemo(() => {
    // Filter countries based on search term and active tab
    let filtered = countries

    // Apply search filter
    if (debouncedSearchTerm) {
      filtered = filtered.filter(
        (country) =>
          country.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          country.continent.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
          country.languages.some((lang) => lang.toLowerCase().includes(debouncedSearchTerm.toLowerCase())),
      )
    }

    // Apply continent filter
    if (activeTab !== "all") {
      filtered = filtered.filter((country) => country.continent.toLowerCase().replace(/\s+/g, "-") === activeTab)
    }

    return sortCountries(filtered, sortOption)
  }, [debouncedSearchTerm, sortOption, activeTab, sortCountries])

  // Effect to update loading state when debounced search term changes
  useEffect(() => {
    setIsLoading(false)
  }, [debouncedSearchTerm])

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Study Destinations Worldwide</h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore top countries for international education with comprehensive information on universities, costs,
                and opportunities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      placeholder="Search countries..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select
                    value={sortOption}
                    onChange={handleSortChange}
                    className="p-2 border rounded-md bg-white dark:bg-gray-800"
                  >
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="popularity-desc">Popularity (High to Low)</option>
                    <option value="popularity-asc">Popularity (Low to High)</option>
                  </select>
                </div>
              </div>

              <Tabs defaultValue="all" onValueChange={handleTabChange}>
                <TabsList className="mb-6 overflow-x-auto flex whitespace-nowrap pb-2 -mb-2 md:mb-6 md:pb-0 md:whitespace-normal md:flex-wrap">
                  <TabsTrigger value="all">All Countries</TabsTrigger>
                  <TabsTrigger value="north-america">North America</TabsTrigger>
                  <TabsTrigger value="europe">Europe</TabsTrigger>
                  <TabsTrigger value="asia">Asia</TabsTrigger>
                  <TabsTrigger value="oceania">Oceania</TabsTrigger>
                </TabsList>

                <TabsContent value={activeTab} className="space-y-6">
                  {isLoading && (
                    <div className="flex justify-center py-8">
                      <LoadingSpinner size="md" text="Loading countries..." />
                    </div>
                  )}

                  {!isLoading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredCountries.map((country, index) => (
                        <Link key={country.name} href={`/countries/${country.name.toLowerCase().replace(/\s+/g, "-")}`}>
                          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                            <div className="relative h-48 overflow-hidden">
                              <div className="relative w-full h-full">
                                <Image
                                  src={country.image || "/placeholder.svg"}
                                  alt={`${country.name} universities`}
                                  className="object-cover transition-transform duration-500 hover:scale-105"
                                  fill
                                  sizes="(max-width: 768px) 100vw, 400px"
                                  loading={index < 6 ? "eager" : "lazy"}
                                  priority={index < 3}
                                />
                              </div>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                <div className="p-4 w-full flex justify-between items-center">
                                  <h3 className="text-white text-xl font-bold">{country.name}</h3>
                                  <Image
                                    src={country.flag || "/placeholder.svg"}
                                    alt={`${country.name} flag`}
                                    width={24}
                                    height={16}
                                    className="rounded-sm"
                                  />
                                </div>
                              </div>
                            </div>
                            <CardContent className="p-4">
                              <div className="space-y-3 mb-4">
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Universities</span>
                                  <span className="text-sm font-medium">{country.universities}+</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Avg. Tuition</span>
                                  <span className="text-sm font-medium">{country.avgTuition}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-gray-500">Living Cost</span>
                                  <span className="text-sm font-medium">{country.livingCost}</span>
                                </div>
                                <div>
                                  <span className="text-sm text-gray-500 block mb-1">Languages</span>
                                  <div className="flex flex-wrap gap-1">
                                    {country.languages.map((language) => (
                                      <Badge key={language} variant="secondary" className="text-xs">
                                        {language}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                className="w-full text-blue-600 border-blue-600 hover:bg-blue-50"
                              >
                                Explore {country.name}
                              </Button>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  )}

                  {!isLoading && filteredCountries.length === 0 && (
                    <div className="text-center py-12">
                      <GraduationCap className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-medium text-gray-700 mb-2">No Countries Found</h3>
                      <p className="text-gray-500 mb-6">
                        We couldn't find any countries matching your search criteria. Try adjusting your filters.
                      </p>
                      <Button
                        onClick={() => {
                          setSearchTerm("")
                          setActiveTab("all")
                          setSortOption("popularity-desc")
                        }}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Reset Filters
                      </Button>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
                  Country Comparison Tool
                </h2>
                <p className="text-gray-600 mb-4">
                  Compare multiple countries side by side to find the best fit for your education goals.
                </p>
                <Link href="/countries/compare">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Compare Countries <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-5 w-5 text-blue-600 mr-2" />
                  Student Experiences
                </h2>
                <p className="text-gray-600 mb-4">
                  Read reviews and experiences from international students studying in different countries.
                </p>
                <Link href="/guide">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Read Student Stories <ArrowRight className="ml-2 h-4 w-4" />
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
