"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Award, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const scholarships = [
  {
    id: 1,
    name: "Fulbright Foreign Student Program",
    country: "United States",
    amount: "Full funding",
    deadline: "February 2024",
    type: "Merit-based",
    level: "Graduate",
    field: "All fields",
    description:
      "Prestigious scholarship for graduate study in the US with full tuition, living stipend, and travel costs.",
    eligibility: ["Outstanding academic record", "Leadership potential", "English proficiency"],
    flag: "🇺🇸",
  },
  {
    id: 2,
    name: "Chevening Scholarships",
    country: "United Kingdom",
    amount: "Full funding",
    deadline: "November 2024",
    type: "Merit-based",
    level: "Graduate",
    field: "All fields",
    description: "UK government's global scholarship programme for future leaders.",
    eligibility: ["2+ years work experience", "Leadership qualities", "Return to home country"],
    flag: "🇬🇧",
  },
  {
    id: 3,
    name: "DAAD Scholarships",
    country: "Germany",
    amount: "€850/month + allowances",
    deadline: "October 2024",
    type: "Merit-based",
    level: "Graduate",
    field: "All fields",
    description: "German Academic Exchange Service funding for international students.",
    eligibility: ["Excellent academic record", "German language skills (some programs)", "Research potential"],
    flag: "🇩🇪",
  },
  {
    id: 4,
    name: "Australia Awards Scholarships",
    country: "Australia",
    amount: "Full funding",
    deadline: "April 2024",
    type: "Development",
    level: "Graduate",
    field: "Development-related",
    description: "Long-term development awards for study in Australia.",
    eligibility: ["From eligible countries", "Development focus", "Return commitment"],
    flag: "🇦🇺",
  },
  {
    id: 5,
    name: "Vanier Canada Graduate Scholarships",
    country: "Canada",
    amount: "CAD $50,000/year",
    deadline: "November 2024",
    type: "Merit-based",
    level: "PhD",
    field: "All fields",
    description: "Canada's premier doctoral scholarship program.",
    eligibility: ["PhD studies", "Academic excellence", "Research potential", "Leadership"],
    flag: "🇨🇦",
  },
  {
    id: 6,
    name: "Eiffel Excellence Scholarship",
    country: "France",
    amount: "€1,181/month",
    deadline: "January 2024",
    type: "Merit-based",
    level: "Graduate",
    field: "Engineering, Economics, Law, Political Science",
    description: "French government scholarship for international students.",
    eligibility: ["Non-French nationality", "Under 30 years", "Specific fields only"],
    flag: "🇫🇷",
  },
]

export default function ScholarshipsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((scholarship) => {
      const matchesSearch =
        scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.field.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCountry = selectedCountry === "all" || scholarship.country === selectedCountry
      const matchesType = selectedType === "all" || scholarship.type === selectedType
      const matchesLevel = selectedLevel === "all" || scholarship.level === selectedLevel

      return matchesSearch && matchesCountry && matchesType && matchesLevel
    })
  }, [searchTerm, selectedCountry, selectedType, selectedLevel])

  const countries = [...new Set(scholarships.map((s) => s.country))]
  const types = [...new Set(scholarships.map((s) => s.type))]
  const levels = [...new Set(scholarships.map((s) => s.level))]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Scholarship Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover funding opportunities for your study abroad journey. Find scholarships that match your profile and
            academic goals.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Search scholarships, countries, or fields..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <select
                className="px-3 py-2 border rounded-md text-sm"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="all">All Countries</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              <select
                className="px-3 py-2 border rounded-md text-sm"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="all">All Types</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <select
                className="px-3 py-2 border rounded-md text-sm"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="all">All Levels</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Showing {filteredScholarships.length} of {scholarships.length} scholarships
            </p>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Scholarship Cards */}
        <div className="space-y-6 mb-12">
          {filteredScholarships.map((scholarship) => (
            <Card key={scholarship.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <span className="text-2xl mr-2">{scholarship.flag}</span>
                          <span className="font-medium">{scholarship.country}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600 mb-1">{scholarship.amount}</div>
                        <div className="text-sm text-gray-500">Deadline: {scholarship.deadline}</div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{scholarship.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-blue-50 text-blue-700">
                        {scholarship.type}
                      </Badge>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {scholarship.level}
                      </Badge>
                      <Badge variant="outline" className="bg-purple-50 text-purple-700">
                        {scholarship.field}
                      </Badge>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {scholarship.eligibility.map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:w-48 flex flex-col gap-3">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No results */}
        {filteredScholarships.length === 0 && (
          <div className="text-center py-12">
            <Award className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">No Scholarships Found</h3>
            <p className="text-gray-500 mb-6">
              Try adjusting your search criteria or filters to find more opportunities.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCountry("all")
                setSelectedType("all")
                setSelectedLevel("all")
              }}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Scholarship?</h2>
          <p className="mb-6 text-blue-100">
            Our experts can help you identify scholarships that match your profile and assist with applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Expert Help
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
