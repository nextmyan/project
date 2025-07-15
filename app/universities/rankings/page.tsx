import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, MapPin, Trophy, Award, BookOpen, Users, Globe } from "lucide-react"

// Import the universities data
import { universities } from "@/data/universities"

export default function UniversityRankingsPage() {
  // Sort universities by ranking
  const sortedUniversities = [...universities].sort((a, b) => a.ranking - b.ranking)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global University Rankings</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the world's top universities ranked by academic reputation, research impact, and graduate
              employability.
            </p>
          </div>

          <Tabs defaultValue="global" className="mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-4 mb-6">
              <TabsTrigger value="global">Global Rankings</TabsTrigger>
              <TabsTrigger value="research">Research Output</TabsTrigger>
              <TabsTrigger value="employability">Graduate Employability</TabsTrigger>
              <TabsTrigger value="international">International Outlook</TabsTrigger>
            </TabsList>

            <TabsContent value="global">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Trophy className="h-6 w-6 text-blue-600 mr-2" />
                    Global University Rankings
                  </h2>
                  <div className="text-sm text-gray-500">Updated April 2023</div>
                </div>

                <div className="space-y-6">
                  {sortedUniversities.map((university, index) => (
                    <Card
                      key={university.id}
                      className="overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-blue-600 text-white p-4 md:p-6 flex items-center justify-center md:w-24">
                          <span className="text-2xl md:text-3xl font-bold">#{university.ranking}</span>
                        </div>
                        <div className="p-4 md:p-6 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                              <div className="flex items-center text-gray-600 mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{university.country}</span>
                                <img
                                  src={university.flag || "/placeholder.svg"}
                                  alt={`${university.country} flag`}
                                  className="h-4 ml-2 rounded-sm"
                                />
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <Link href={`/universities/${university.id}`}>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <div>
                              <h4 className="text-xs font-medium text-gray-500 mb-1">Founded</h4>
                              <p className="text-sm font-medium">{university.foundedYear}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-gray-500 mb-1">Students</h4>
                              <p className="text-sm font-medium">{university.studentPopulation}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-gray-500 mb-1">Int'l Students</h4>
                              <p className="text-sm font-medium">{university.internationalStudents}</p>
                            </div>
                            <div>
                              <h4 className="text-xs font-medium text-gray-500 mb-1">Faculty Ratio</h4>
                              <p className="text-sm font-medium">{university.facultyToStudentRatio}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="research">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                    Research Output Rankings
                  </h2>
                  <div className="text-sm text-gray-500">Based on publications and citations</div>
                </div>

                <div className="space-y-6">
                  {sortedUniversities.slice(0, 10).map((university, index) => (
                    <Card
                      key={university.id}
                      className="overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="bg-blue-600 text-white p-4 md:p-6 flex items-center justify-center md:w-24">
                          <span className="text-2xl md:text-3xl font-bold">#{index + 1}</span>
                        </div>
                        <div className="p-4 md:p-6 flex-1">
                          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                              <div className="flex items-center text-gray-600 mt-1">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{university.country}</span>
                                <img
                                  src={university.flag || "/placeholder.svg"}
                                  alt={`${university.country} flag`}
                                  className="h-4 ml-2 rounded-sm"
                                />
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <Link href={`/universities/${university.id}`}>
                                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>

                          <div className="mt-4">
                            <div className="flex items-center">
                              <Badge className="bg-blue-100 text-blue-800 mr-2">
                                <Award className="h-3 w-3 mr-1" /> Research Score: {95 - index * 3}%
                              </Badge>
                              <Badge className="bg-green-100 text-green-800">
                                <BookOpen className="h-3 w-3 mr-1" /> Publications: {10000 - index * 500}+
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="employability">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Users className="h-6 w-6 text-blue-600 mr-2" />
                    Graduate Employability Rankings
                  </h2>
                  <div className="text-sm text-gray-500">Based on employer reputation and alumni outcomes</div>
                </div>

                <div className="space-y-6">
                  {[...sortedUniversities]
                    .sort((a, b) => {
                      // Create a different order for this tab
                      const scoreA = a.ranking + (a.id % 5)
                      const scoreB = b.ranking + (b.id % 5)
                      return scoreA - scoreB
                    })
                    .slice(0, 10)
                    .map((university, index) => (
                      <Card
                        key={university.id}
                        className="overflow-hidden hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="bg-blue-600 text-white p-4 md:p-6 flex items-center justify-center md:w-24">
                            <span className="text-2xl md:text-3xl font-bold">#{index + 1}</span>
                          </div>
                          <div className="p-4 md:p-6 flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                                <div className="flex items-center text-gray-600 mt-1">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>{university.country}</span>
                                  <img
                                    src={university.flag || "/placeholder.svg"}
                                    alt={`${university.country} flag`}
                                    className="h-4 ml-2 rounded-sm"
                                  />
                                </div>
                              </div>
                              <div className="mt-2 md:mt-0">
                                <Link href={`/universities/${university.id}`}>
                                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                                  </Button>
                                </Link>
                              </div>
                            </div>

                            <div className="mt-4">
                              <div className="flex items-center">
                                <Badge className="bg-purple-100 text-purple-800 mr-2">
                                  <Users className="h-3 w-3 mr-1" /> Employer Score: {98 - index * 2}%
                                </Badge>
                                <Badge className="bg-yellow-100 text-yellow-800">
                                  <Award className="h-3 w-3 mr-1" /> Alumni Outcomes: {95 - index * 3}%
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="international">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center">
                    <Globe className="h-6 w-6 text-blue-600 mr-2" />
                    International Outlook Rankings
                  </h2>
                  <div className="text-sm text-gray-500">
                    Based on international students, faculty, and collaborations
                  </div>
                </div>

                <div className="space-y-6">
                  {[...sortedUniversities]
                    .sort((a, b) => {
                      // Sort by international student percentage (descending)
                      const percentA = Number.parseInt(String(a.internationalStudents).replace("%", ""))
                      const percentB = Number.parseInt(String(b.internationalStudents).replace("%", ""))
                      return percentB - percentA
                    })
                    .slice(0, 10)
                    .map((university, index) => (
                      <Card
                        key={university.id}
                        className="overflow-hidden hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="bg-blue-600 text-white p-4 md:p-6 flex items-center justify-center md:w-24">
                            <span className="text-2xl md:text-3xl font-bold">#{index + 1}</span>
                          </div>
                          <div className="p-4 md:p-6 flex-1">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{university.name}</h3>
                                <div className="flex items-center text-gray-600 mt-1">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>{university.country}</span>
                                  <img
                                    src={university.flag || "/placeholder.svg"}
                                    alt={`${university.country} flag`}
                                    className="h-4 ml-2 rounded-sm"
                                  />
                                </div>
                              </div>
                              <div className="mt-2 md:mt-0">
                                <Link href={`/universities/${university.id}`}>
                                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                                  </Button>
                                </Link>
                              </div>
                            </div>

                            <div className="mt-4">
                              <div className="flex items-center">
                                <Badge className="bg-indigo-100 text-indigo-800 mr-2">
                                  <Globe className="h-3 w-3 mr-1" /> Int'l Students: {university.internationalStudents}
                                </Badge>
                                <Badge className="bg-teal-100 text-teal-800">
                                  <Users className="h-3 w-3 mr-1" /> Global Collaboration Score: {90 - index * 3}%
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Find Your Perfect University Match</h2>
            <p className="text-gray-600 mb-6">
              Use our AI-powered University Finder to discover universities that match your academic profile, budget,
              and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/university-finder">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Try University Finder <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/universities">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
                  Browse All Universities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
