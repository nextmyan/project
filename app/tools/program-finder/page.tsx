"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, BookOpen, TrendingUp, DollarSign, Clock } from "lucide-react"

const programs = [
  {
    id: 1,
    name: "Computer Science",
    category: "Technology",
    description: "Study algorithms, programming, software development, and computer systems",
    duration: "3-4 years",
    averageSalary: "$85,000",
    jobGrowth: "22%",
    skills: ["Programming", "Problem Solving", "Mathematics", "Logic"],
    careers: ["Software Developer", "Data Scientist", "Cybersecurity Analyst", "AI Engineer"],
    countries: ["USA", "Canada", "UK", "Australia", "Germany"],
  },
  {
    id: 2,
    name: "Business Administration",
    category: "Business",
    description: "Learn management, finance, marketing, and strategic business operations",
    duration: "3-4 years",
    averageSalary: "$65,000",
    jobGrowth: "8%",
    skills: ["Leadership", "Communication", "Analytics", "Strategy"],
    careers: ["Business Manager", "Consultant", "Financial Analyst", "Marketing Manager"],
    countries: ["USA", "UK", "Canada", "Australia", "France"],
  },
  {
    id: 3,
    name: "Mechanical Engineering",
    category: "Engineering",
    description: "Design and develop mechanical systems, machines, and manufacturing processes",
    duration: "4 years",
    averageSalary: "$75,000",
    jobGrowth: "7%",
    skills: ["Mathematics", "Physics", "Design", "Problem Solving"],
    careers: ["Mechanical Engineer", "Design Engineer", "Manufacturing Engineer", "Project Manager"],
    countries: ["USA", "Germany", "Canada", "UK", "Australia"],
  },
  {
    id: 4,
    name: "Medicine",
    category: "Healthcare",
    description: "Study human anatomy, diseases, and medical treatment methods",
    duration: "6-8 years",
    averageSalary: "$200,000",
    jobGrowth: "15%",
    skills: ["Biology", "Chemistry", "Critical Thinking", "Communication"],
    careers: ["Doctor", "Surgeon", "Medical Researcher", "Specialist"],
    countries: ["USA", "UK", "Canada", "Australia", "Germany"],
  },
  {
    id: 5,
    name: "Data Science",
    category: "Technology",
    description: "Analyze complex data to extract insights and drive decision-making",
    duration: "3-4 years",
    averageSalary: "$95,000",
    jobGrowth: "35%",
    skills: ["Statistics", "Programming", "Machine Learning", "Analytics"],
    careers: ["Data Scientist", "Data Analyst", "ML Engineer", "Business Intelligence Analyst"],
    countries: ["USA", "Canada", "UK", "Germany", "Australia"],
  },
  {
    id: 6,
    name: "International Relations",
    category: "Social Sciences",
    description: "Study global politics, diplomacy, and international affairs",
    duration: "3-4 years",
    averageSalary: "$55,000",
    jobGrowth: "6%",
    skills: ["Research", "Communication", "Critical Thinking", "Languages"],
    careers: ["Diplomat", "Policy Analyst", "International Consultant", "NGO Worker"],
    countries: ["USA", "UK", "France", "Germany", "Canada"],
  },
  {
    id: 7,
    name: "Psychology",
    category: "Social Sciences",
    description: "Study human behavior, mental processes, and psychological disorders",
    duration: "4 years",
    averageSalary: "$60,000",
    jobGrowth: "14%",
    skills: ["Research", "Communication", "Empathy", "Analysis"],
    careers: ["Psychologist", "Counselor", "Researcher", "HR Specialist"],
    countries: ["USA", "UK", "Canada", "Australia", "Germany"],
  },
  {
    id: 8,
    name: "Environmental Science",
    category: "Science",
    description: "Study environmental problems and develop solutions for sustainability",
    duration: "3-4 years",
    averageSalary: "$55,000",
    jobGrowth: "11%",
    skills: ["Research", "Biology", "Chemistry", "Problem Solving"],
    careers: ["Environmental Scientist", "Conservation Scientist", "Environmental Consultant", "Policy Analyst"],
    countries: ["Canada", "Germany", "Australia", "UK", "USA"],
  },
]

const interests = [
  "Technology & Programming",
  "Business & Finance",
  "Healthcare & Medicine",
  "Engineering & Design",
  "Arts & Creative",
  "Science & Research",
  "Social Sciences",
  "Education & Teaching",
]

// Mapping user-friendly interests to program categories
const interestCategoryMap: Record<string, string[]> = {
  "Technology & Programming": ["Technology"],
  "Business & Finance": ["Business"],
  "Healthcare & Medicine": ["Healthcare"],
  "Engineering & Design": ["Engineering"],
  "Arts & Creative": ["Arts"], // No programs with 'Arts' category currently
  "Science & Research": ["Science"],
  "Social Sciences": ["Social Sciences"],
  "Education & Teaching": ["Education"], // No programs with 'Education' category currently
}

export default function ProgramFinderPage() {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  const [careerGoals, setCareerGoals] = useState("") // Not used in current filtering logic, but kept for potential future use
  const [preferredCountries, setPreferredCountries] = useState<string[]>([])
  const [salaryExpectation, setSalaryExpectation] = useState("")
  const [studyDuration, setStudyDuration] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name-asc") // Default sort by name ascending

  const allCountries = useMemo(() => {
    const countries = new Set<string>()
    programs.forEach((program) => {
      program.countries.forEach((country) => countries.add(country))
    })
    return Array.from(countries).sort()
  }, [])

  const handleInterestChange = (interest: string, checked: boolean) => {
    if (checked) {
      setSelectedInterests((prev) => [...prev, interest])
    } else {
      setSelectedInterests((prev) => prev.filter((i) => i !== interest))
    }
  }

  const handleCountryChange = (country: string, checked: boolean) => {
    if (checked) {
      setPreferredCountries((prev) => [...prev, country])
    } else {
      setPreferredCountries((prev) => prev.filter((c) => c !== country))
    }
  }

  const filteredAndSortedPrograms = useMemo(() => {
    const currentPrograms = programs.filter((program) => {
      // Search term filter
      const matchesSearch =
        !searchTerm ||
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.careers.some((career) => career.toLowerCase().includes(searchTerm.toLowerCase()))

      // Interest filter
      const matchesInterest =
        selectedInterests.length === 0 ||
        selectedInterests.some((interestKey) => {
          const categories = interestCategoryMap[interestKey]
          return categories && categories.includes(program.category)
        })

      // Salary filter
      const matchesSalary =
        !salaryExpectation ||
        Number.parseInt(program.averageSalary.replace(/[^0-9]/g, "")) >= Number.parseInt(salaryExpectation)

      // Duration filter
      const matchesDuration = !studyDuration || program.duration.includes(studyDuration)

      // Country filter
      const matchesCountry =
        preferredCountries.length === 0 || preferredCountries.some((country) => program.countries.includes(country))

      return matchesSearch && matchesInterest && matchesSalary && matchesDuration && matchesCountry
    })

    // Sorting logic
    currentPrograms.sort((a, b) => {
      switch (sortBy) {
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        case "salary-desc":
          return (
            Number.parseInt(b.averageSalary.replace(/[^0-9]/g, "")) -
            Number.parseInt(a.averageSalary.replace(/[^0-9]/g, ""))
          )
        case "salary-asc":
          return (
            Number.parseInt(a.averageSalary.replace(/[^0-9]/g, "")) -
            Number.parseInt(b.averageSalary.replace(/[^0-9]/g, ""))
          )
        case "jobgrowth-desc":
          return (
            Number.parseInt(b.jobGrowth.replace(/[^0-9]/g, "")) - Number.parseInt(a.jobGrowth.replace(/[^0-9]/g, ""))
          )
        case "jobgrowth-asc":
          return (
            Number.parseInt(a.jobGrowth.replace(/[^0-9]/g, "")) - Number.parseInt(b.jobGrowth.replace(/[^0-9]/g, ""))
          )
        default:
          return 0
      }
    })

    return currentPrograms
  }, [searchTerm, selectedInterests, salaryExpectation, studyDuration, preferredCountries, sortBy])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedInterests([])
    setPreferredCountries([])
    setSalaryExpectation("")
    setStudyDuration("")
    setSortBy("name-asc")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Program Finder</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover academic programs that match your interests, career goals, and preferences. Find your perfect study
            path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="h-5 w-5 mr-2 text-blue-600" />
                  Find Your Program
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <Label htmlFor="search">Search Programs</Label>
                  <Input
                    id="search"
                    placeholder="e.g., Computer Science, Medicine"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* Interests */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Your Interests</Label>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {interests.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={selectedInterests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked)}
                        />
                        <Label htmlFor={interest} className="text-sm cursor-pointer">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferred Countries */}
                <div>
                  <Label className="text-base font-medium mb-3 block">Preferred Countries</Label>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {allCountries.map((country) => (
                      <div key={country} className="flex items-center space-x-2">
                        <Checkbox
                          id={`country-${country}`}
                          checked={preferredCountries.includes(country)}
                          onCheckedChange={(checked) => handleCountryChange(country, checked)}
                        />
                        <Label htmlFor={`country-${country}`} className="text-sm cursor-pointer">
                          {country}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Salary Expectation */}
                <div>
                  <Label htmlFor="salary">Minimum Salary Expectation</Label>
                  <Select value={salaryExpectation} onValueChange={setSalaryExpectation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="40000">$40,000+</SelectItem>
                      <SelectItem value="60000">$60,000+</SelectItem>
                      <SelectItem value="80000">$80,000+</SelectItem>
                      <SelectItem value="100000">$100,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Study Duration */}
                <div>
                  <Label htmlFor="duration">Preferred Duration</Label>
                  <Select value={studyDuration} onValueChange={setStudyDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="3">3 years</SelectItem>
                      <SelectItem value="4">4 years</SelectItem>
                      <SelectItem value="6">6+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort By */}
                <div>
                  <Label htmlFor="sortBy">Sort By</Label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                      <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                      <SelectItem value="salary-desc">Avg. Salary (High to Low)</SelectItem>
                      <SelectItem value="salary-asc">Avg. Salary (Low to High)</SelectItem>
                      <SelectItem value="jobgrowth-desc">Job Growth (High to Low)</SelectItem>
                      <SelectItem value="jobgrowth-asc">Job Growth (Low to High)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={clearFilters} variant="outline" className="w-full bg-transparent">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredAndSortedPrograms.length} program{filteredAndSortedPrograms.length !== 1 ? "s" : ""}{" "}
                matching your criteria
              </p>
            </div>

            <div className="space-y-6">
              {filteredAndSortedPrograms.map((program) => (
                <Card key={program.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                            <Badge variant="outline" className="mb-3">
                              {program.category}
                            </Badge>
                            <p className="text-gray-600 mb-4">{program.description}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-blue-600" />
                            <span className="text-sm">Duration: {program.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                            <span className="text-sm">Avg. Salary: {program.averageSalary}</span>
                          </div>
                          <div className="flex items-center">
                            <TrendingUp className="h-4 w-4 mr-2 text-purple-600" />
                            <span className="text-sm">Job Growth: {program.jobGrowth}</span>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Career Opportunities</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.careers.map((career) => (
                              <Badge key={career} variant="outline" className="text-xs">
                                {career}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Popular Study Destinations</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.countries.map((country) => (
                              <Badge key={country} className="bg-blue-100 text-blue-800 text-xs">
                                {country}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="lg:w-48 flex flex-col gap-3">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Find Universities</Button>
                        <Button variant="outline" className="w-full bg-transparent">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredAndSortedPrograms.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No Programs Found</h3>
                <p className="text-gray-500 mb-6">
                  Try adjusting your filters or search criteria to find more programs.
                </p>
                <Button onClick={clearFilters} className="bg-blue-600 hover:bg-blue-700">
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Found Your Ideal Program?</h2>
          <p className="mb-6 text-blue-100">
            Use our University Finder to discover institutions offering your chosen program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Find Universities
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Get Counseling
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
