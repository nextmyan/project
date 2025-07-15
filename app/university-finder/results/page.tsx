import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  BookOpen,
  Building,
  Download,
  GraduationCap,
  Heart,
  Info,
  MapPin,
  MessageSquare,
  Save,
  Share2,
  Star,
  ThumbsUp,
  Users,
} from "lucide-react"

export default function UniversityFinderResults() {
  const universities = [
    {
      id: 1,
      name: "University of Toronto",
      country: "Canada",
      program: "Master of Computer Science",
      ranking: 18,
      tuition: "$28,000",
      acceptanceRate: 85,
      scholarships: [
        { name: "International Student Scholarship", amount: "$10,000" },
        { name: "Merit-Based Award", amount: "$5,000" },
      ],
      requirements: {
        gpa: "3.3/4.0",
        ielts: "6.5",
        gre: "Optional",
      },
      deadline: "January 15, 2024",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: 2,
      name: "University of British Columbia",
      country: "Canada",
      program: "Master of Computer Science",
      ranking: 34,
      tuition: "$25,500",
      acceptanceRate: 78,
      scholarships: [{ name: "International Graduate Scholarship", amount: "$8,000" }],
      requirements: {
        gpa: "3.2/4.0",
        ielts: "6.5",
        gre: "Optional",
      },
      deadline: "December 1, 2023",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: 3,
      name: "Technical University of Munich",
      country: "Germany",
      program: "Master of Informatics",
      ranking: 50,
      tuition: "No Tuition (€129 semester fee)",
      acceptanceRate: 72,
      scholarships: [{ name: "DAAD Scholarship", amount: "€850/month" }],
      requirements: {
        gpa: "3.0/4.0",
        ielts: "6.5",
        gre: "Not Required",
      },
      deadline: "January 31, 2024",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: 4,
      name: "University of Melbourne",
      country: "Australia",
      program: "Master of Computer Science",
      ranking: 37,
      tuition: "AUD 46,000",
      acceptanceRate: 65,
      scholarships: [{ name: "International Merit Scholarship", amount: "AUD 10,000" }],
      requirements: {
        gpa: "3.0/4.0",
        ielts: "6.5",
        gre: "Not Required",
      },
      deadline: "October 31, 2023",
      image: "/placeholder.svg?height=150&width=300",
    },
    {
      id: 5,
      name: "KTH Royal Institute of Technology",
      country: "Sweden",
      program: "Master of Computer Science",
      ranking: 89,
      tuition: "SEK 155,000",
      acceptanceRate: 60,
      scholarships: [{ name: "KTH Scholarship", amount: "100% Tuition" }],
      requirements: {
        gpa: "3.0/4.0",
        ielts: "6.5",
        gre: "Not Required",
      },
      deadline: "January 15, 2024",
      image: "/placeholder.svg?height=150&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Your University Matches</h1>
                <p className="text-gray-600">
                  Based on your profile, we've found 15 universities where you have a good chance of acceptance.
                </p>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="flex items-center bg-transparent">
                  <Save className="h-4 w-4 mr-2" />
                  Save Results
                </Button>
                <Button variant="outline" size="sm" className="flex items-center bg-transparent">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" size="sm" className="flex items-center bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-teal-800 mb-1">Your Profile Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Education:</span> Bachelor's in Computer Science
                    </div>
                    <div>
                      <span className="font-medium">CGPA:</span> 3.5/4.0
                    </div>
                    <div>
                      <span className="font-medium">IELTS:</span> 7.0
                    </div>
                    <div>
                      <span className="font-medium">Target Program:</span> Master's in Computer Science
                    </div>
                    <div>
                      <span className="font-medium">Budget:</span> $25,000 - $35,000
                    </div>
                    <div>
                      <span className="font-medium">Preferred Countries:</span> Canada, Germany, Australia
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <Tabs defaultValue="all">
                <div className="flex justify-between items-center mb-4">
                  <TabsList>
                    <TabsTrigger value="all">All (15)</TabsTrigger>
                    <TabsTrigger value="high">High Chance (5)</TabsTrigger>
                    <TabsTrigger value="medium">Medium Chance (7)</TabsTrigger>
                    <TabsTrigger value="low">Low Chance (3)</TabsTrigger>
                  </TabsList>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Sort by:</span>
                    <select className="text-sm border rounded-md px-2 py-1">
                      <option>Acceptance Chance</option>
                      <option>University Ranking</option>
                      <option>Tuition (Low to High)</option>
                      <option>Scholarship Amount</option>
                    </select>
                  </div>
                </div>

                <TabsContent value="all" className="space-y-6">
                  {universities.map((university) => (
                    <Card
                      key={university.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center mb-2">
                                <h3 className="text-xl font-bold text-gray-900 mr-2">{university.name}</h3>
                                <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-200">
                                  Rank #{university.ranking}
                                </Badge>
                              </div>
                              <div className="flex items-center text-gray-600 mb-4">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{university.country}</span>
                                <span className="mx-2">•</span>
                                <GraduationCap className="h-4 w-4 mr-1" />
                                <span>{university.program}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                              <Heart className="h-5 w-5" />
                              <span className="sr-only">Save</span>
                            </Button>
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">Acceptance Chance</span>
                              <span className="text-sm font-medium text-teal-600">{university.acceptanceRate}%</span>
                            </div>
                            <Progress value={university.acceptanceRate} className="h-2" />
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Tuition Fee</h4>
                              <p className="text-gray-900">{university.tuition}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Application Deadline</h4>
                              <p className="text-gray-900">{university.deadline}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Requirements</h4>
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline" className="bg-gray-50">
                                GPA: {university.requirements.gpa}
                              </Badge>
                              <Badge variant="outline" className="bg-gray-50">
                                IELTS: {university.requirements.ielts}
                              </Badge>
                              <Badge variant="outline" className="bg-gray-50">
                                GRE: {university.requirements.gre}
                              </Badge>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Scholarships</h4>
                            <div className="space-y-1">
                              {university.scholarships.map((scholarship, index) => (
                                <div key={index} className="flex items-center">
                                  <Star className="h-4 w-4 text-yellow-500 mr-2" />
                                  <span className="text-sm">
                                    {scholarship.name}: <span className="font-medium">{scholarship.amount}</span>
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 flex flex-col">
                          <div className="mb-4 overflow-hidden rounded-lg">
                            <img
                              src={university.image || "/placeholder.svg"}
                              alt={university.name}
                              className="w-full h-auto object-cover"
                            />
                          </div>

                          <div className="space-y-3 mt-auto">
                            <Link href={`/universities/${university.id}`}>
                              <Button className="w-full bg-teal-600 hover:bg-teal-700">View Details</Button>
                            </Link>
                            <Link href={`/application-guide/${university.id}`}>
                              <Button variant="outline" className="w-full bg-transparent">
                                <BookOpen className="h-4 w-4 mr-2" />
                                Application Guide
                              </Button>
                            </Link>
                            <Button variant="ghost" className="w-full">
                              <MessageSquare className="h-4 w-4 mr-2" />
                              Ask AI Counselor
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}

                  <div className="text-center mt-8">
                    <Button variant="outline" className="mr-2 bg-transparent">
                      Load More Universities
                    </Button>
                    <Link href="/counselor">
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Speak to a Counselor <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </TabsContent>

                <TabsContent value="high">
                  <div className="py-12 text-center">
                    <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">High Chance Universities</h3>
                    <p className="text-gray-500 mb-6">
                      These are universities where you have 75% or higher chance of acceptance.
                    </p>
                    <Button className="bg-teal-600 hover:bg-teal-700">View High Chance Universities</Button>
                  </div>
                </TabsContent>

                <TabsContent value="medium">
                  <div className="py-12 text-center">
                    <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">Medium Chance Universities</h3>
                    <p className="text-gray-500 mb-6">
                      These are universities where you have 50-75% chance of acceptance.
                    </p>
                    <Button className="bg-teal-600 hover:bg-teal-700">View Medium Chance Universities</Button>
                  </div>
                </TabsContent>

                <TabsContent value="low">
                  <div className="py-12 text-center">
                    <Building className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">Low Chance Universities</h3>
                    <p className="text-gray-500 mb-6">
                      These are universities where you have 25-50% chance of acceptance.
                    </p>
                    <Button className="bg-teal-600 hover:bg-teal-700">View Low Chance Universities</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ThumbsUp className="h-5 w-5 text-teal-600 mr-2" />
                  Next Steps
                </CardTitle>
                <CardDescription>Follow these steps to strengthen your application</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Research your target universities</p>
                      <p className="text-sm text-gray-600">Explore program details, faculty, and student reviews</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Prepare your documents</p>
                      <p className="text-sm text-gray-600">Draft your SOP, CV, and request recommendation letters</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Apply for scholarships</p>
                      <p className="text-sm text-gray-600">Research and apply for scholarships you're eligible for</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-teal-100 text-teal-800 rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Submit applications</p>
                      <p className="text-sm text-gray-600">Apply to universities before the deadlines</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/application-guide">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">View Detailed Application Guide</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 text-teal-600 mr-2" />
                  AI Counselor
                </CardTitle>
                <CardDescription>Get personalized guidance from our AI counselor</CardDescription>
              </CardHeader>
              <CardContent className="h-[220px] flex flex-col justify-center items-center text-center p-6">
                <div className="bg-teal-100 p-3 rounded-full mb-4">
                  <MessageSquare className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Have questions about your matches?</h3>
                <p className="text-gray-600 mb-4">
                  Our AI counselor can answer your questions about universities, applications, visas, and more.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/ai-counselor">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Chat with AI Counselor</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Recommended Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/scholarships">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-300 hover:shadow-md transition-all">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Star className="h-5 w-5 text-teal-600 mr-2" />
                    Scholarship Finder
                  </h3>
                  <p className="text-sm text-gray-600">
                    Find scholarships you're eligible for at your target universities.
                  </p>
                </div>
              </Link>

              <Link href="/visa-guide">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-300 hover:shadow-md transition-all">
                  <h3 className="font-medium mb-2 flex items-center">
                    <MapPin className="h-5 w-5 text-teal-600 mr-2" />
                    Visa Guides
                  </h3>
                  <p className="text-sm text-gray-600">
                    Step-by-step guides for student visa applications for each country.
                  </p>
                </div>
              </Link>

              <Link href="/community">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-teal-300 hover:shadow-md transition-all">
                  <h3 className="font-medium mb-2 flex items-center">
                    <Users className="h-5 w-5 text-teal-600 mr-2" />
                    Student Community
                  </h3>
                  <p className="text-sm text-gray-600">Connect with other students and learn from their experiences.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
