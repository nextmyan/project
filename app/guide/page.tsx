"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  FileText,
  Info,
  BookOpen,
  Globe,
  Clock,
  Award,
  Download,
  CheckCircle,
  Calendar,
  MapPin,
  GraduationCap,
  Search,
  Bookmark,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

export default function GuidePage() {
  const [activeCountry, setActiveCountry] = useState("us")
  const [timelineProgress, setTimelineProgress] = useState(25)

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Study Abroad Guide</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive resources to help you navigate every step of your study abroad journey.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-blue-50 hover:shadow-md transition-all cursor-pointer border-blue-200">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Application Timeline</h3>
                  <p className="text-sm text-gray-600">Month-by-month guide to the application process</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Document Guides</h3>
                  <p className="text-sm text-gray-600">Templates and tips for application documents</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Visa Information</h3>
                  <p className="text-sm text-gray-600">Country-specific visa application guides</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-all cursor-pointer">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Scholarship Tips</h3>
                  <p className="text-sm text-gray-600">How to find and apply for scholarships</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="visa" className="mb-10">
            <TabsList className="grid grid-cols-1 sm:grid-cols-2 mb-8">
              <TabsTrigger value="visa">Visa Guide</TabsTrigger>
              <TabsTrigger value="timeline">Application Timeline</TabsTrigger>
            </TabsList>

            <TabsContent value="visa">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6">Student Visa Guide</h2>
                <p className="text-gray-600 mb-6">
                  Navigating the visa application process is a crucial step in your study abroad journey. Our
                  comprehensive guides provide step-by-step instructions for obtaining student visas for different
                  countries.
                </p>

                <div className="mb-8">
                  <div className="flex overflow-x-auto pb-2 mb-4 gap-2 scrollbar-hide">
                    <Button
                      variant={activeCountry === "us" ? "default" : "outline"}
                      className={`flex items-center ${activeCountry === "us" ? "bg-blue-600" : ""}`}
                      onClick={() => setActiveCountry("us")}
                    >
                      <img src="https://flagpedia.net/data/flags/w580/us.png" alt="US flag" className="h-4 mr-2" />
                      United States
                    </Button>
                    <Button
                      variant={activeCountry === "uk" ? "default" : "outline"}
                      className={`flex items-center ${activeCountry === "uk" ? "bg-blue-600" : ""}`}
                      onClick={() => setActiveCountry("uk")}
                    >
                      <img src="https://flagpedia.net/data/flags/w580/gb.png" alt="UK flag" className="h-4 mr-2" />
                      United Kingdom
                    </Button>
                    <Button
                      variant={activeCountry === "ca" ? "default" : "outline"}
                      className={`flex items-center ${activeCountry === "ca" ? "bg-blue-600" : ""}`}
                      onClick={() => setActiveCountry("ca")}
                    >
                      <img src="https://flagpedia.net/data/flags/w580/ca.png" alt="Canada flag" className="h-4 mr-2" />
                      Canada
                    </Button>
                    <Button
                      variant={activeCountry === "au" ? "default" : "outline"}
                      className={`flex items-center ${activeCountry === "au" ? "bg-blue-600" : ""}`}
                      onClick={() => setActiveCountry("au")}
                    >
                      <img
                        src="https://flagpedia.net/data/flags/w580/au.png"
                        alt="Australia flag"
                        className="h-4 mr-2"
                      />
                      Australia
                    </Button>
                    <Button
                      variant={activeCountry === "de" ? "default" : "outline"}
                      className={`flex items-center ${activeCountry === "de" ? "bg-blue-600" : ""}`}
                      onClick={() => setActiveCountry("de")}
                    >
                      <img src="https://flagpedia.net/data/flags/w580/de.png" alt="Germany flag" className="h-4 mr-2" />
                      Germany
                    </Button>
                  </div>

                  {activeCountry === "us" && (
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1508433957232-3107f5fd5955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                          alt="US Student Visa"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-4 w-full flex justify-between items-center">
                            <h3 className="text-white text-xl font-bold">US Student Visa (F-1)</h3>
                            <img
                              src="https://flagpedia.net/data/flags/w580/us.png"
                              alt="US flag"
                              className="h-6 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2 text-gray-900">Application Process</h4>
                            <ul className="space-y-2 mb-4">
                              <li className="flex items-center text-sm">
                                <div className="bg-blue-100 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                                  <span className="text-blue-600 text-xs">1</span>
                                </div>
                                <span>Receive I-20 from your university</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <div className="bg-blue-100 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                                  <span className="text-blue-600 text-xs">2</span>
                                </div>
                                <span>Pay SEVIS fee</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <div className="bg-blue-100 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                                  <span className="text-blue-600 text-xs">3</span>
                                </div>
                                <span>Complete DS-160 form</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <div className="bg-blue-100 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                                  <span className="text-blue-600 text-xs">4</span>
                                </div>
                                <span>Schedule and attend visa interview</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-gray-900">Required Documents</h4>
                            <ul className="space-y-2 mb-4">
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Valid passport (valid for at least 6 months beyond your stay)</span>
                              </li>
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Form I-20 from your university</span>
                              </li>
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>DS-160 confirmation page</span>
                              </li>
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Financial documents showing ability to pay for education</span>
                              </li>
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Passport-sized photographs</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-start">
                            <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <h5 className="font-medium text-sm">Important Timeline</h5>
                              <p className="text-xs text-gray-600">
                                You can apply for an F-1 visa up to 120 days before your program start date, but you
                                cannot enter the US earlier than 30 days before your program begins.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <Link href="/guide/visa/us">
                            <Button
                              variant="outline"
                              className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                            >
                              View Complete US Visa Guide
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Checklist
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {activeCountry === "uk" && (
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                          alt="UK Student Visa"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                          <div className="p-4 w-full flex justify-between items-center">
                            <h3 className="text-white text-xl font-bold">UK Student Visa (Tier 4)</h3>
                            <img
                              src="https://flagpedia.net/data/flags/w580/gb.png"
                              alt="UK flag"
                              className="h-6 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-2 text-gray-900">Application Process</h4>
                            <ul className="space-y-2 mb-4">
                              <li className="flex items-center text-sm">
                                <div className="bg-blue-100 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                                  <span className="text-blue-600 text-xs">1</span>
                                </div>
                                <span>Receive CAS from your university</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <div className="bg-blue-100 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                                  <span className="text-blue-600 text-xs">2</span>
                                </div>
                                <span>Complete online application</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <div className="bg-blue-100 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                                  <span className="text-blue-600 text-xs">3</span>
                                </div>
                                <span>Pay visa fee and health surcharge</span>
                              </li>
                              <li className="flex items-center text-sm">
                                <div className="bg-blue-100 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                                  <span className="text-blue-600 text-xs">4</span>
                                </div>
                                <span>Attend biometric appointment</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 text-gray-900">Required Documents</h4>
                            <ul className="space-y-2 mb-4">
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Valid passport</span>
                              </li>
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>CAS from your university</span>
                              </li>
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Proof of financial means</span>
                              </li>
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>Tuberculosis test results (if applicable)</span>
                              </li>
                              <li className="flex items-start text-sm">
                                <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                                <span>ATAS certificate (for certain subjects)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <Link href="/guide/visa/uk">
                            <Button
                              variant="outline"
                              className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                            >
                              View Complete UK Visa Guide
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Checklist
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Similar cards for other countries would go here */}
                  {activeCountry !== "us" && activeCountry !== "uk" && (
                    <Card className="p-8 text-center">
                      <CardContent>
                        <Globe className="h-16 w-16 text-blue-200 mx-auto mb-4" />
                        <h3 className="text-xl font-medium text-gray-700 mb-2">Visa Guide Coming Soon</h3>
                        <p className="text-gray-500 mb-6">
                          We're currently working on detailed visa guides for this country. Check back soon!
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700">Explore Other Countries</Button>
                      </CardContent>
                    </Card>
                  )}
                </div>

                <div className="text-center">
                  <Link href="/guide/visa">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      View All Visa Guides <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Pro Tip: Visa Processing Times</h4>
                      <p className="text-sm text-gray-600">
                        Visa processing times vary significantly by country. US student visas typically take 2-3 weeks,
                        UK visas 3-4 weeks, and Canadian visas 4-8 weeks. Apply well in advance of your intended travel
                        date to avoid complications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="timeline">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Study Abroad Timeline</h2>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">Application Progress</h3>
                    <div className="flex items-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-8 bg-transparent"
                        onClick={() => setTimelineProgress(Math.max(0, timelineProgress - 25))}
                      >
                        Previous Stage
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-8 ml-2 bg-transparent"
                        onClick={() => setTimelineProgress(Math.min(100, timelineProgress + 25))}
                      >
                        Next Stage
                      </Button>
                    </div>
                  </div>
                  <Progress value={timelineProgress} className="h-2" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Research</span>
                    <span>Preparation</span>
                    <span>Application</span>
                    <span>Visa</span>
                    <span>Pre-departure</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>
                  <div className="space-y-8 relative">
                    {/* Timeline items */}
                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="font-semibold text-gray-900">12-18 Months Before</h3>
                        <p className="text-sm text-gray-600">Research universities and programs</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-1/2 pl-8">
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Identify target countries and universities</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Research admission requirements</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Explore scholarship opportunities</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-start justify-end">
                            <span>Register for standardized tests</span>
                            <span className="text-blue-600 ml-1">•</span>
                          </li>
                          <li className="flex items-start justify-end">
                            <span>Begin test preparation</span>
                            <span className="text-blue-600 ml-1">•</span>
                          </li>
                          <li className="flex items-start justify-end">
                            <span>Create a study plan</span>
                            <span className="text-blue-600 ml-1">•</span>
                          </li>
                        </ul>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                        <BookOpen className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-1/2 pl-8">
                        <h3 className="font-semibold text-gray-900">10-12 Months Before</h3>
                        <p className="text-sm text-gray-600">Prepare for standardized tests</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="font-semibold text-gray-900">8-10 Months Before</h3>
                        <p className="text-sm text-gray-600">Take tests and finalize university list</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                        <Award className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-1/2 pl-8">
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Take IELTS/TOEFL and GRE/GMAT</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Shortlist 5-8 universities</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Research application deadlines</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="font-semibold text-gray-900">6-8 Months Before</h3>
                        <p className="text-sm text-gray-600">Prepare application documents</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-1/2 pl-8">
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Write SOP and essays</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Request recommendation letters</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Prepare financial documents</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="font-semibold text-gray-900">4-6 Months Before</h3>
                        <p className="text-sm text-gray-600">Submit applications</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                        <Globe className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-1/2 pl-8">
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Submit university applications</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Apply for scholarships</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Follow up on application status</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="font-semibold text-gray-900">2-4 Months Before</h3>
                        <p className="text-sm text-gray-600">Accept offers and prepare for visa</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-1/2 pl-8">
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Accept admission offer</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Pay deposit</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Apply for housing</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/2 pr-8 text-right">
                        <h3 className="font-semibold text-gray-900">1-2 Months Before</h3>
                        <p className="text-sm text-gray-600">Pre-departure preparations</p>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center z-10">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <div className="w-1/2 pl-8">
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Book flights</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Arrange health insurance</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-600 mr-1">•</span>
                            <span>Prepare for travel and accommodation</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link href="/guide/timeline">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      View Detailed Timeline <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Timeline Tool</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Use our interactive timeline tool to create a personalized application schedule based on your
                        target universities and programs.
                      </p>
                      <Button
                        variant="outline"
                        className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                      >
                        Create Personalized Timeline
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger className="hover:bg-blue-50 px-4 rounded-lg text-left">
                    When should I start my study abroad application process?
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <p className="text-gray-600">
                      It's recommended to start at least 12-18 months before your intended start date. This gives you
                      enough time to research universities, prepare for standardized tests, gather documents, and apply
                      for scholarships. For competitive programs and scholarships, starting early gives you a
                      significant advantage.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger className="hover:bg-blue-50 px-4 rounded-lg text-left">
                    How much does it cost to study abroad?
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <p className="text-gray-600 mb-3">
                      Costs vary widely depending on the country, university, and program. Here's a general breakdown:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Tuition:</strong> From free (in countries like Germany) to $50,000+ per year (in the
                          US)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Living expenses:</strong> $8,000 to $25,000 per year depending on the location
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Health insurance:</strong> $500 to $2,000 per year
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Travel and visa costs:</strong> $1,000 to $3,000
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-3">
                      Many students reduce these costs through scholarships, assistantships, and part-time work.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                  <AccordionTrigger className="hover:bg-blue-50 px-4 rounded-lg text-left">
                    What standardized tests do I need to take?
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <p className="text-gray-600 mb-3">
                      The required tests depend on your academic level and destination:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>English proficiency:</strong> IELTS, TOEFL, PTE, or Duolingo English Test
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Graduate programs:</strong> GRE (general programs), GMAT (business programs)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Undergraduate programs:</strong> SAT or ACT (mainly for US universities)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Professional programs:</strong> LSAT (law), MCAT (medicine), DAT (dentistry)
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-3">
                      Check each university's specific requirements, as some may waive certain tests or have different
                      score thresholds.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4">
                  <AccordionTrigger className="hover:bg-blue-50 px-4 rounded-lg text-left">
                    Can I work while studying abroad?
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <p className="text-gray-600 mb-3">
                      Work regulations vary by country. Most countries allow international students to work part-time
                      (typically 20 hours per week) during the academic year and full-time during breaks.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>US:</strong> Up to 20 hours/week on-campus, Optional Practical Training after
                          graduation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>UK:</strong> Up to 20 hours/week during term, full-time during holidays
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Canada:</strong> Up to 20 hours/week off-campus, full-time during breaks
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Australia:</strong> Up to 40 hours per fortnight during term
                        </span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-3">
                      Working while studying can help with expenses but shouldn't interfere with your academic
                      performance.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5">
                  <AccordionTrigger className="hover:bg-blue-50 px-4 rounded-lg text-left">
                    How do I find scholarships for studying abroad?
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <p className="text-gray-600 mb-3">
                      There are several ways to find scholarships for international students:
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>University websites:</strong> Most universities offer scholarships specifically for
                          international students
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Government scholarships:</strong> Many countries offer scholarships to attract
                          international talent
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Private organizations:</strong> Foundations, corporations, and non-profits often
                          provide funding
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>
                          <strong>Scholarship databases:</strong> Use our scholarship finder tool to search thousands of
                          opportunities
                        </span>
                      </li>
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-4 text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                    >
                      <Search className="h-4 w-4 mr-2" />
                      Search Scholarships
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Search All FAQs
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                <Bookmark className="h-4 w-4 mr-2" />
                Save Guide as PDF
              </Button>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg shadow-md p-8 mt-8 text-center">
            <GraduationCap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team of experienced counselors is ready to provide personalized guidance for your unique situation.
              Schedule a one-on-one consultation to discuss your study abroad plans.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 px-8">Schedule a Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
