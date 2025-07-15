"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, CheckCircle, AlertCircle, Info } from "lucide-react"

const intakeData = {
  "United States": {
    intakes: [
      { name: "Fall", months: "August - September", deadline: "January - March", popular: true },
      { name: "Spring", months: "January - February", deadline: "September - November", popular: false },
      { name: "Summer", months: "May - June", deadline: "February - April", popular: false },
    ],
    visaProcessing: "2-4 months",
    applicationDeadline: "6-8 months before intake",
  },
  "United Kingdom": {
    intakes: [
      { name: "September", months: "September", deadline: "January (UCAS)", popular: true },
      { name: "January", months: "January", deadline: "October", popular: false },
    ],
    visaProcessing: "3-6 weeks",
    applicationDeadline: "6-12 months before intake",
  },
  Canada: {
    intakes: [
      { name: "Fall", months: "September", deadline: "January - March", popular: true },
      { name: "Winter", months: "January", deadline: "September - October", popular: false },
      { name: "Summer", months: "May", deadline: "January - February", popular: false },
    ],
    visaProcessing: "4-12 weeks",
    applicationDeadline: "6-8 months before intake",
  },
  Australia: {
    intakes: [
      { name: "Semester 1", months: "February - March", deadline: "October - November", popular: true },
      { name: "Semester 2", months: "July - August", deadline: "April - May", popular: true },
    ],
    visaProcessing: "4-6 weeks",
    applicationDeadline: "4-6 months before intake",
  },
  Germany: {
    intakes: [
      { name: "Winter Semester", months: "October", deadline: "March - July", popular: true },
      { name: "Summer Semester", months: "April", deadline: "September - January", popular: false },
    ],
    visaProcessing: "4-12 weeks",
    applicationDeadline: "6-12 months before intake",
  },
}

const currentMonth = new Date().getMonth() + 1
const currentYear = new Date().getFullYear()

export default function IntakeTrackerPage() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedIntake, setSelectedIntake] = useState("")

  const getTimelineStatus = (deadlineMonths) => {
    // Simple logic to determine if deadline is approaching, current, or passed
    const now = new Date()
    const currentMonth = now.getMonth() + 1

    // This is a simplified version - in reality, you'd need more complex date parsing
    if (deadlineMonths.includes("January") && currentMonth <= 3) return "current"
    if (deadlineMonths.includes("March") && currentMonth <= 5) return "current"
    if (deadlineMonths.includes("September") && currentMonth >= 7 && currentMonth <= 11) return "current"
    if (deadlineMonths.includes("October") && currentMonth >= 8 && currentMonth <= 12) return "current"
    return "upcoming"
  }

  const selectedCountryData = selectedCountry ? intakeData[selectedCountry] : null

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Intake & Timeline Tracker</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track application deadlines, intake periods, and visa processing times for your target study destination.
          </p>
        </div>

        {/* Country Selection */}
        <div className="max-w-md mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Select Your Target Country</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a country" />
                </SelectTrigger>
                <SelectContent>
                  {Object.keys(intakeData).map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {selectedCountryData && (
          <div className="space-y-8">
            {/* Intake Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                  Available Intakes for {selectedCountry}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedCountryData.intakes.map((intake, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-lg border-2 transition-all cursor-pointer ${
                        selectedIntake === intake.name
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => setSelectedIntake(intake.name)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold">{intake.name}</h3>
                        {intake.popular && <Badge className="bg-green-100 text-green-800">Popular</Badge>}
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Starts: {intake.months}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>Deadline: {intake.deadline}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div
                          className={`text-xs px-2 py-1 rounded-full inline-block ${
                            getTimelineStatus(intake.deadline) === "current"
                              ? "bg-red-100 text-red-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {getTimelineStatus(intake.deadline) === "current" ? "Deadline Soon" : "Plan Ahead"}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            {selectedIntake && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    Application Timeline for {selectedIntake} Intake
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Timeline Steps */}
                    <div className="relative">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                      {[
                        {
                          title: "Research & Shortlist Universities",
                          time: "12-18 months before",
                          status: "completed",
                          description: "Research programs, requirements, and create your university list",
                        },
                        {
                          title: "Prepare for Standardized Tests",
                          time: "10-12 months before",
                          status: "completed",
                          description: "Take IELTS/TOEFL, GRE/GMAT if required",
                        },
                        {
                          title: "Prepare Application Documents",
                          time: "8-10 months before",
                          status: "current",
                          description: "SOP, LORs, transcripts, CV, and other required documents",
                        },
                        {
                          title: "Submit Applications",
                          time: selectedCountryData.applicationDeadline,
                          status: "upcoming",
                          description: "Submit applications before deadlines",
                        },
                        {
                          title: "Receive Admission Decisions",
                          time: "2-4 months after application",
                          status: "upcoming",
                          description: "Universities send admission decisions",
                        },
                        {
                          title: "Apply for Student Visa",
                          time: selectedCountryData.visaProcessing + " processing",
                          status: "upcoming",
                          description: "Apply for student visa after receiving admission",
                        },
                        {
                          title: "Pre-departure Preparation",
                          time: "1-2 months before",
                          status: "upcoming",
                          description: "Accommodation, travel, insurance, and other preparations",
                        },
                      ].map((step, index) => (
                        <div key={index} className="relative flex items-start space-x-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                              step.status === "completed"
                                ? "bg-green-500"
                                : step.status === "current"
                                  ? "bg-blue-500"
                                  : "bg-gray-300"
                            }`}
                          >
                            {step.status === "completed" ? (
                              <CheckCircle className="h-4 w-4 text-white" />
                            ) : step.status === "current" ? (
                              <Clock className="h-4 w-4 text-white" />
                            ) : (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1 pb-8">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-gray-900">{step.title}</h4>
                              <span className="text-sm text-gray-500">{step.time}</span>
                            </div>
                            <p className="text-sm text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Important Dates */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                    Application Deadline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-red-600 mb-2">{selectedCountryData.applicationDeadline}</p>
                  <p className="text-sm text-gray-600">Submit applications well before this deadline</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Visa Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{selectedCountryData.visaProcessing}</p>
                  <p className="text-sm text-gray-600">Average processing time for student visa</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Info className="h-5 w-5 mr-2 text-green-600" />
                    Planning Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 mb-2">12-18 months</p>
                  <p className="text-sm text-gray-600">Recommended planning period</p>
                </CardContent>
              </Card>
            </div>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 mr-2 text-orange-600" />
                  Important Tips for {selectedCountry}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Application Tips</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Apply to multiple universities to increase chances
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Start preparing documents early
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Check specific program requirements
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Visa Tips</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Apply for visa immediately after admission
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Prepare financial documents in advance
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        Book visa appointment early
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA */}
        {!selectedCountry && (
          <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-md">
            <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Select a Country to View Intake Timeline</h3>
            <p className="text-gray-500">
              Choose your target destination to see detailed intake schedules and application timelines.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
