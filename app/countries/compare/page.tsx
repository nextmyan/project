"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Check, GraduationCap, DollarSign, Briefcase, Globe, Award, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LoadingSpinner from "@/components/loading-spinner"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { memoize } from "@/lib/performance"

// Import the countries data
const countries = [
  {
    name: "United States",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
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
    visaSuccess: "65%",
    jobProspects: "Excellent",
    safetyIndex: "High",
    costOfLiving: "High",
  },
  {
    name: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
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
    visaSuccess: "85%",
    jobProspects: "Very Good",
    safetyIndex: "High",
    costOfLiving: "Very High",
  },
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225",
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
    visaSuccess: "80%",
    jobProspects: "Excellent",
    safetyIndex: "Very High",
    costOfLiving: "High",
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be",
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
    visaSuccess: "75%",
    jobProspects: "Very Good",
    safetyIndex: "High",
    costOfLiving: "High",
  },
  {
    name: "Germany",
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc",
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
    visaSuccess: "70%",
    jobProspects: "Good",
    safetyIndex: "Very High",
    costOfLiving: "Moderate",
  },
  {
    name: "India",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
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
    visaSuccess: "60%",
    jobProspects: "Good",
    safetyIndex: "Moderate",
    costOfLiving: "Low",
  },
  {
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
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
    visaSuccess: "75%",
    jobProspects: "Good",
    safetyIndex: "High",
    costOfLiving: "High",
  },
  {
    name: "Japan",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
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
    visaSuccess: "65%",
    jobProspects: "Good",
    safetyIndex: "Very High",
    costOfLiving: "High",
  },
  {
    name: "Italy",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    flag: "https://flagpedia.net/data/flags/w580/it.png",
    universities: 97,
    avgTuition: "€900 - €4,000",
    livingCost: "€8,000 - €12,000",
    workRights: "20 hours/week during studies, post-study work options available",
    prPathway: "Work permit, permanent residence after 5 years",
    popularCourses: ["Arts", "Architecture", "Fashion Design", "Engineering", "Business"],
    continent: "Europe",
    languages: ["Italian", "English (some programs)"],
    scholarships: "Limited",
    studentsCount: 35000,
    visaSuccess: "70%",
    jobProspects: "Moderate",
    safetyIndex: "High",
    costOfLiving: "Moderate",
  },
  {
    name: "Spain",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325",
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
    studentsCount: 30000,
    visaSuccess: "75%",
    jobProspects: "Moderate",
    safetyIndex: "High",
    costOfLiving: "Moderate",
  },
  {
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
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
    studentsCount: 25000,
    visaSuccess: "85%",
    jobProspects: "Excellent",
    safetyIndex: "Very High",
    costOfLiving: "Very High",
  },
  {
    name: "New Zealand",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
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
    studentsCount: 20000,
    visaSuccess: "80%",
    jobProspects: "Good",
    safetyIndex: "Very High",
    costOfLiving: "High",
  },
]

// Comparison categories
const comparisonCategories = [
  { id: "universities", label: "Universities", icon: <GraduationCap className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "avgTuition", label: "Avg. Tuition", icon: <DollarSign className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "livingCost", label: "Living Cost", icon: <DollarSign className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "workRights", label: "Work Rights", icon: <Briefcase className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "prPathway", label: "PR Pathway", icon: <Briefcase className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "languages", label: "Languages", icon: <Globe className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "scholarships", label: "Scholarships", icon: <Award className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "popularCourses", label: "Popular Courses", icon: <Check className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "visaSuccess", label: "Visa Success Rate", icon: <Check className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "jobProspects", label: "Job Prospects", icon: <Briefcase className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "safetyIndex", label: "Safety Index", icon: <Info className="h-4 w-4 mr-2 text-blue-600" /> },
  { id: "costOfLiving", label: "Cost of Living", icon: <DollarSign className="h-4 w-4 mr-2 text-blue-600" /> },
]

// Memoized function to get sorted countries
const getSortedCountries = memoize((countries) => {
  return [...countries].sort((a, b) => a.name.localeCompare(b.name))
})

export default function CountryComparisonPage() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "universities",
    "avgTuition",
    "livingCost",
    "workRights",
    "prPathway",
    "languages",
    "scholarships",
    "popularCourses",
  ])
  const [preselectedCountries, setPreselectedCountries] = useState<string[]>([])

  // Sort countries alphabetically
  const sortedCountries = useMemo(() => getSortedCountries(countries), [])

  // Get comparison data based on selected countries
  const comparisonData = useMemo(() => {
    return countries.filter((country) => selectedCountries.includes(country.name))
  }, [selectedCountries])

  // Check URL parameters for preselected countries
  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search)
      const countryParams = urlParams.get("countries")

      if (countryParams) {
        const countryNames = countryParams.split(",")
        const validCountries = countryNames.filter((name) =>
          countries.some((country) => country.name.toLowerCase() === name.toLowerCase()),
        )

        if (validCountries.length > 0) {
          setPreselectedCountries(validCountries)

          // Map to proper case from our data
          const properCaseCountries = validCountries.map((name) => {
            const match = countries.find((c) => c.name.toLowerCase() === name.toLowerCase())
            return match ? match.name : name
          })

          setSelectedCountries(properCaseCountries.slice(0, 3))
        }
      }
    }
  }, [])

  // Add a country to comparison
  const addCountry = (countryName: string) => {
    if (selectedCountries.length < 3 && !selectedCountries.includes(countryName)) {
      setIsLoading(true)
      setSelectedCountries([...selectedCountries, countryName])

      // Update URL with selected countries
      if (typeof window !== "undefined") {
        const newCountries = [...selectedCountries, countryName]
        const url = new URL(window.location.href)
        url.searchParams.set("countries", newCountries.join(","))
        window.history.pushState({}, "", url.toString())
      }

      // Simulate loading
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }

  // Remove a country from comparison
  const removeCountry = (countryName: string) => {
    const newSelection = selectedCountries.filter((name) => name !== countryName)
    setSelectedCountries(newSelection)

    // Update URL with selected countries
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href)
      if (newSelection.length > 0) {
        url.searchParams.set("countries", newSelection.join(","))
      } else {
        url.searchParams.delete("countries")
      }
      window.history.pushState({}, "", url.toString())
    }
  }

  // Toggle a category for comparison
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    } else {
      setSelectedCategories([...selectedCategories, categoryId])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link href="/countries" className="inline-flex items-center text-blue-600 hover:text-blue-800">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Countries
            </Link>
          </div>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Country Comparison Tool</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Compare up to 3 countries side by side to find the best destination for your study abroad journey.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select countries to compare (max 3)
                </label>
                <Select onValueChange={addCountry} disabled={selectedCountries.length >= 3}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortedCountries.map((country) => (
                      <SelectItem
                        key={country.name}
                        value={country.name}
                        disabled={selectedCountries.includes(country.name)}
                      >
                        <div className="flex items-center">
                          <Image
                            src={country.flag || "/placeholder.svg"}
                            alt={`${country.name} flag`}
                            width={16}
                            height={12}
                            className="mr-2 rounded-sm"
                          />
                          {country.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-1/2 flex flex-wrap gap-2 items-center">
                {selectedCountries.map((countryName) => (
                  <Badge
                    key={countryName}
                    className="px-3 py-1 bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer flex items-center"
                    onClick={() => removeCountry(countryName)}
                  >
                    {countries.find((c) => c.name === countryName)?.flag && (
                      <Image
                        src={countries.find((c) => c.name === countryName)?.flag || "/placeholder.svg"}
                        alt={`${countryName} flag`}
                        width={16}
                        height={12}
                        className="mr-2 rounded-sm"
                      />
                    )}
                    {countryName} ×
                  </Badge>
                ))}
                {selectedCountries.length === 0 && <span className="text-gray-500 text-sm">No countries selected</span>}
              </div>
            </div>

            {selectedCountries.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Comparison categories</label>
                <div className="flex flex-wrap gap-2">
                  {comparisonCategories.map((category) => (
                    <Badge
                      key={category.id}
                      variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                      className={`px-3 py-1 cursor-pointer ${
                        selectedCategories.includes(category.id)
                          ? "bg-blue-100 text-blue-800 hover:bg-blue-200"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => toggleCategory(category.id)}
                    >
                      {category.label}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {isLoading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="md" text="Loading comparison data..." />
              </div>
            ) : selectedCountries.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-3 text-left text-gray-600 font-medium border-b"></th>
                      {comparisonData.map((country) => (
                        <th key={country.name} className="p-3 text-center border-b">
                          <div className="flex flex-col items-center">
                            <div className="relative w-16 h-10 mb-2 overflow-hidden rounded">
                              <Image
                                src={country.flag || "/placeholder.svg"}
                                alt={`${country.name} flag`}
                                fill
                                sizes="64px"
                                className="object-cover"
                                priority
                              />
                            </div>
                            <span className="font-bold text-gray-900">{country.name}</span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCategories.includes("universities") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
                          Universities
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.universities}+
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("avgTuition") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
                          Avg. Tuition
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.avgTuition}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("livingCost") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
                          Living Cost
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.livingCost}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("workRights") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                          Work Rights
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.workRights}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("prPathway") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                          PR Pathway
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.prPathway}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("languages") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <Globe className="h-4 w-4 mr-2 text-blue-600" />
                          Languages
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {Array.isArray(country.languages) ? country.languages.join(", ") : country.languages}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("scholarships") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <Award className="h-4 w-4 mr-2 text-blue-600" />
                          Scholarships
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.scholarships}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("visaSuccess") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <Check className="h-4 w-4 mr-2 text-blue-600" />
                          Visa Success Rate
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <Info className="h-4 w-4 ml-1 text-gray-400" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Approximate success rate for student visa applications</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.visaSuccess}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("jobProspects") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                          Job Prospects
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.jobProspects}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("safetyIndex") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <Info className="h-4 w-4 mr-2 text-blue-600" />
                          Safety Index
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.safetyIndex}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("costOfLiving") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <DollarSign className="h-4 w-4 mr-2 text-blue-600" />
                          Cost of Living
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            {country.costOfLiving}
                          </td>
                        ))}
                      </tr>
                    )}

                    {selectedCategories.includes("popularCourses") && (
                      <tr>
                        <td className="p-3 border-b flex items-center font-medium text-gray-700">
                          <Check className="h-4 w-4 mr-2 text-blue-600" />
                          Popular Courses
                        </td>
                        {comparisonData.map((country) => (
                          <td key={country.name} className="p-3 text-center border-b">
                            <div className="flex flex-wrap justify-center gap-1">
                              {Array.isArray(country.popularCourses) &&
                                country.popularCourses.slice(0, 3).map((course) => (
                                  <Badge key={course} variant="outline" className="text-xs">
                                    {course}
                                  </Badge>
                                ))}
                            </div>
                          </td>
                        ))}
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <GraduationCap className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">Select Countries to Compare</h3>
                <p className="text-gray-500 mb-6">
                  Choose up to 3 countries from the dropdown above to see a side-by-side comparison.
                </p>
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                  {preselectedCountries.length > 0 ? (
                    <p className="text-gray-500 text-sm mb-4">Suggested comparisons:</p>
                  ) : (
                    <p className="text-gray-500 text-sm mb-4">Popular comparisons:</p>
                  )}
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button
                      variant="outline"
                      className="text-blue-600 border-blue-600"
                      onClick={() => {
                        setSelectedCountries(["United States", "United Kingdom", "Canada"])
                      }}
                    >
                      US vs UK vs Canada
                    </Button>
                    <Button
                      variant="outline"
                      className="text-blue-600 border-blue-600"
                      onClick={() => {
                        setSelectedCountries(["Australia", "New Zealand", "Canada"])
                      }}
                    >
                      Australia vs NZ vs Canada
                    </Button>
                    <Button
                      variant="outline"
                      className="text-blue-600 border-blue-600"
                      onClick={() => {
                        setSelectedCountries(["Germany", "France", "Italy"])
                      }}
                    >
                      Germany vs France vs Italy
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Deciding?</h2>
            <p className="text-gray-600 mb-6">
              Our counselors can help you evaluate your options and choose the best country for your academic goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/university-finder">
                <Button className="bg-blue-600 hover:bg-blue-700">Find Your Perfect Match</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
                  Speak to a Counselor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
