"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { BarChart, TrendingUp, Target, Award, AlertCircle } from "lucide-react"

export default function ScoreEstimatorPage() {
  const [gpa, setGpa] = useState("")
  const [ieltsScore, setIeltsScore] = useState("")
  const [gmatScore, setGmatScore] = useState("")
  const [workExperience, setWorkExperience] = useState("")
  const [extracurriculars, setExtracurriculars] = useState("")
  const [targetCountry, setTargetCountry] = useState("")
  const [targetProgram, setTargetProgram] = useState("")

  const estimateChances = useMemo(() => {
    if (!gpa || !ieltsScore || !targetCountry) return null

    const gpaScore = Number.parseFloat(gpa)
    const ielts = Number.parseFloat(ieltsScore)
    const gmat = Number.parseFloat(gmatScore) || 0
    const experience = Number.parseInt(workExperience) || 0
    const activities = Number.parseInt(extracurriculars) || 0

    // Simple scoring algorithm (in real app, this would be more sophisticated)
    let baseScore = 0

    // GPA scoring (40% weight)
    if (gpaScore >= 3.7) baseScore += 40
    else if (gpaScore >= 3.3) baseScore += 30
    else if (gpaScore >= 3.0) baseScore += 20
    else baseScore += 10

    // IELTS scoring (30% weight)
    if (ielts >= 7.5) baseScore += 30
    else if (ielts >= 7.0) baseScore += 25
    else if (ielts >= 6.5) baseScore += 20
    else if (ielts >= 6.0) baseScore += 15
    else baseScore += 10

    // GMAT scoring (20% weight)
    if (gmat >= 700) baseScore += 20
    else if (gmat >= 650) baseScore += 15
    else if (gmat >= 600) baseScore += 10
    else if (gmat > 0) baseScore += 5

    // Experience and activities (10% weight)
    if (experience >= 3) baseScore += 5
    else if (experience >= 1) baseScore += 3

    if (activities >= 3) baseScore += 5
    else if (activities >= 1) baseScore += 3

    // Country-specific adjustments
    const countryMultipliers = {
      "United States": 0.8,
      "United Kingdom": 0.85,
      Canada: 0.9,
      Australia: 0.9,
      Germany: 0.95,
    }

    const finalScore = Math.min(95, baseScore * (countryMultipliers[targetCountry] || 1))

    return {
      overall: Math.round(finalScore),
      breakdown: {
        academic: Math.round(gpaScore >= 3.7 ? 90 : gpaScore >= 3.3 ? 75 : gpaScore >= 3.0 ? 60 : 40),
        language: Math.round(ielts >= 7.5 ? 95 : ielts >= 7.0 ? 85 : ielts >= 6.5 ? 75 : ielts >= 6.0 ? 65 : 50),
        test: gmat > 0 ? Math.round(gmat >= 700 ? 90 : gmat >= 650 ? 80 : gmat >= 600 ? 70 : 60) : 0,
        experience: Math.round(experience >= 3 ? 85 : experience >= 1 ? 65 : 40),
      },
    }
  }, [gpa, ieltsScore, gmatScore, workExperience, extracurriculars, targetCountry])

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreLabel = (score) => {
    if (score >= 80) return "Excellent"
    if (score >= 60) return "Good"
    if (score >= 40) return "Fair"
    return "Needs Improvement"
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Admission Chances Estimator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get an estimate of your admission chances based on your academic profile, test scores, and experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="h-5 w-5 mr-2 text-blue-600" />
                Your Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="gpa">GPA (4.0 scale)</Label>
                  <Input
                    id="gpa"
                    type="number"
                    step="0.1"
                    min="0"
                    max="4"
                    placeholder="3.5"
                    value={gpa}
                    onChange={(e) => setGpa(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="ielts">IELTS Score</Label>
                  <Input
                    id="ielts"
                    type="number"
                    step="0.5"
                    min="0"
                    max="9"
                    placeholder="7.0"
                    value={ieltsScore}
                    onChange={(e) => setIeltsScore(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="gmat">GMAT/GRE Score (Optional)</Label>
                <Input
                  id="gmat"
                  type="number"
                  placeholder="650"
                  value={gmatScore}
                  onChange={(e) => setGmatScore(e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="country">Target Country</Label>
                <Select value={targetCountry} onValueChange={setTargetCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="United States">United States</SelectItem>
                    <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="Australia">Australia</SelectItem>
                    <SelectItem value="Germany">Germany</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="program">Target Program</Label>
                <Select value={targetProgram} onValueChange={setTargetProgram}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select program" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Computer Science">Computer Science</SelectItem>
                    <SelectItem value="Business/MBA">Business/MBA</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Medicine">Medicine</SelectItem>
                    <SelectItem value="Arts & Humanities">Arts & Humanities</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience">Work Experience (Years)</Label>
                  <Input
                    id="experience"
                    type="number"
                    min="0"
                    placeholder="2"
                    value={workExperience}
                    onChange={(e) => setWorkExperience(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="activities">Extracurricular Activities</Label>
                  <Select value={extracurriculars} onValueChange={setExtracurriculars}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">None</SelectItem>
                      <SelectItem value="1">Limited (1-2)</SelectItem>
                      <SelectItem value="2">Moderate (3-4)</SelectItem>
                      <SelectItem value="3">Extensive (5+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {estimateChances && (
            <div className="space-y-6">
              {/* Overall Score */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-green-600" />
                    Admission Chances
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className={`text-6xl font-bold mb-2 ${getScoreColor(estimateChances.overall)}`}>
                      {estimateChances.overall}%
                    </div>
                    <div className={`text-lg font-medium ${getScoreColor(estimateChances.overall)}`}>
                      {getScoreLabel(estimateChances.overall)}
                    </div>
                  </div>
                  <Progress value={estimateChances.overall} className="h-3" />
                </CardContent>
              </Card>

              {/* Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
                    Profile Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Academic Performance</span>
                      <span className={`font-medium ${getScoreColor(estimateChances.breakdown.academic)}`}>
                        {estimateChances.breakdown.academic}%
                      </span>
                    </div>
                    <Progress value={estimateChances.breakdown.academic} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Language Proficiency</span>
                      <span className={`font-medium ${getScoreColor(estimateChances.breakdown.language)}`}>
                        {estimateChances.breakdown.language}%
                      </span>
                    </div>
                    <Progress value={estimateChances.breakdown.language} className="h-2" />
                  </div>

                  {estimateChances.breakdown.test > 0 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span>Standardized Test</span>
                        <span className={`font-medium ${getScoreColor(estimateChances.breakdown.test)}`}>
                          {estimateChances.breakdown.test}%
                        </span>
                      </div>
                      <Progress value={estimateChances.breakdown.test} className="h-2" />
                    </div>
                  )}

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span>Experience & Activities</span>
                      <span className={`font-medium ${getScoreColor(estimateChances.breakdown.experience)}`}>
                        {estimateChances.breakdown.experience}%
                      </span>
                    </div>
                    <Progress value={estimateChances.breakdown.experience} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-600" />
                    Improvement Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {estimateChances.breakdown.academic < 70 && (
                      <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-yellow-800">Improve Academic Performance</p>
                          <p className="text-sm text-yellow-700">
                            Focus on maintaining higher grades in your remaining courses.
                          </p>
                        </div>
                      </div>
                    )}

                    {estimateChances.breakdown.language < 80 && (
                      <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-blue-800">Enhance Language Skills</p>
                          <p className="text-sm text-blue-700">
                            Consider retaking IELTS to achieve a higher score (7.5+ recommended).
                          </p>
                        </div>
                      </div>
                    )}

                    {!gmatScore && targetProgram === "Business/MBA" && (
                      <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-purple-800">Take Standardized Test</p>
                          <p className="text-sm text-purple-700">
                            GMAT/GRE scores are often required for business programs.
                          </p>
                        </div>
                      </div>
                    )}

                    {estimateChances.breakdown.experience < 60 && (
                      <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                        <AlertCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-green-800">Build Experience</p>
                          <p className="text-sm text-green-700">
                            Gain relevant work experience or engage in more extracurricular activities.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-6 bg-gray-100 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-gray-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-800 mb-1">Disclaimer</p>
              <p className="text-sm text-gray-600">
                This is an estimated assessment based on general admission criteria. Actual admission decisions depend
                on many factors including program-specific requirements, application essays, recommendations, and
                university-specific criteria. Use this as a general guide only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
