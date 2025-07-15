import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BookOpen,
  Building,
  Calendar,
  CheckCircle,
  DollarSign,
  FileText,
  GraduationCap,
  Info,
  MapPin,
  Star,
  Users,
} from "lucide-react"

// Add Image import at the top
import Image from "next/image"

// Import the universities data
import { universities } from "@/data/universities"

// Add this function before the default export
export async function generateStaticParams() {
  // Return an array of objects with the id parameter for each university
  return universities.map((university) => ({
    id: university.id.toString(),
  }))
}

export default function UniversityDetailPage({ params }: { params: { id: string } }) {
  // Convert the ID to a number for proper comparison
  const universityId = Number.parseInt(params.id, 10)

  // Find the university with the matching ID
  const university = universities.find((uni) => uni.id === universityId)

  if (!university) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">University Not Found</h1>
          <p className="text-gray-600 mb-6">The university you're looking for doesn't exist in our database.</p>
          <Link href="/universities">
            <Button className="bg-blue-600 hover:bg-blue-700">Back to Universities</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* University Header */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <div className="relative w-full h-full">
              <Image
                src={university.image || "/placeholder.svg"}
                alt={`${university.name} campus`}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 w-full flex justify-between items-center">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{university.name}</h1>
                  <div className="flex items-center">
                    <Badge className="bg-blue-600 mr-2">
                      <GraduationCap className="h-3 w-3 mr-1" />
                      Rank #{university.ranking}
                    </Badge>
                    <div className="flex items-center text-white">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{university.location}</span>
                    </div>
                  </div>
                </div>
                <Image
                  src={university.flag || "/placeholder.svg"}
                  alt={`${university.country} flag`}
                  width={48}
                  height={32}
                  className="rounded-sm"
                  priority
                />
              </div>
            </div>
          </div>

          {/* University Overview */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-start mb-6">
              <div className="relative w-16 h-16 rounded-lg mr-4">
                <Image
                  src={university.logo || "/placeholder.svg"}
                  alt={`${university.name} logo`}
                  className="object-contain"
                  fill
                  sizes="64px"
                  priority
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{university.name}</h2>
                <p className="text-gray-600">{university.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  University Profile
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-medium">{university.foundedYear}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Student Population:</span>
                    <span className="font-medium">{university.studentPopulation}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">International Students:</span>
                    <span className="font-medium">{university.internationalStudents}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Faculty to Student Ratio:</span>
                    <span className="font-medium">{university.facultyToStudentRatio}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Campus Size:</span>
                    <span className="font-medium">{university.campusSize}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  Costs & Admissions
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Tuition:</span>
                    <span className="font-medium">{university.tuition}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Application Fee:</span>
                    <span className="font-medium">{university.applicationFee}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Acceptance Rate:</span>
                    <span className="font-medium">{university.acceptanceRate}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                  Application Deadlines
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Undergraduate</h4>
                    <ul className="space-y-1">
                      {Object.entries(university.applicationDeadlines.undergraduate).map(([key, value]) => (
                        <li key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                          <span className="font-medium">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Graduate</h4>
                    <ul className="space-y-1">
                      {Object.entries(university.applicationDeadlines.graduate).map(([key, value]) => (
                        <li key={key} className="flex justify-between text-sm">
                          <span className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                          <span className="font-medium">{value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="programs" className="mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-4 mb-6">
              <TabsTrigger value="programs">Programs</TabsTrigger>
              <TabsTrigger value="admissions">Admission Requirements</TabsTrigger>
              <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
              <TabsTrigger value="facilities">Facilities & Alumni</TabsTrigger>
            </TabsList>

            <TabsContent value="programs">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                  Programs at {university.name}
                </h2>

                <div className="space-y-6">
                  {university.programs.map((program, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {typeof program === "string" ? program : program.name}
                        </h3>
                        {typeof program !== "string" && (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Degree</h4>
                                <p className="text-gray-900">{program.degree}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Duration</h4>
                                <p className="text-gray-900">{program.duration}</p>
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-700 mb-1">Tuition</h4>
                                <p className="text-gray-900">{program.tuition}</p>
                              </div>
                            </div>
                            <p className="text-gray-600">{program.description}</p>
                          </>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="admissions">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <FileText className="h-6 w-6 text-blue-600 mr-2" />
                  Admission Requirements
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Undergraduate Requirements</h3>
                    <ul className="space-y-2">
                      {university.admissionRequirements.undergraduate.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Graduate Requirements</h3>
                    <ul className="space-y-2">
                      {university.admissionRequirements.graduate.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">Application Tips</h3>
                      <p className="text-gray-600 text-sm">
                        Start your application process early, at least 6-12 months before the deadline. Make sure to
                        carefully review all requirements and prepare your documents thoroughly. For international
                        students, allow extra time for document translation and verification.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scholarships">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Star className="h-6 w-6 text-blue-600 mr-2" />
                  Scholarships at {university.name}
                </h2>

                <div className="space-y-6">
                  {university.scholarships.map((scholarship) => (
                    <Card key={scholarship.name} className="hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-1">Amount</h4>
                            <p className="text-gray-900">{scholarship.amount}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-1">Eligibility</h4>
                            <p className="text-gray-900">{scholarship.eligibility}</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{scholarship.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Link href="/services">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Find More Scholarships <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="facilities">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <Building className="h-6 w-6 text-blue-600 mr-2" />
                      Campus Facilities
                    </h2>
                    <ul className="space-y-3">
                      {university.facilities.map((facility, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{facility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <Users className="h-6 w-6 text-blue-600 mr-2" />
                      Notable Alumni
                    </h2>
                    <ul className="space-y-3">
                      {university.notableAlumni.map((alumni, index) => (
                        <li key={index} className="flex items-start">
                          <GraduationCap className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{alumni}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Ready to Apply?</h2>
            <p className="text-gray-600 mb-6 text-center">
              Our counselors can guide you through the entire application process for {university.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/university-finder">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Check Eligibility <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/guide">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
                  View Application Guide
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
