"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, DollarSign, PieChart, Info } from "lucide-react"

const countryData = {
  "United States": {
    tuitionRange: { min: 25000, max: 55000 },
    livingCost: { min: 10000, max: 25000 },
    currency: "USD",
    additionalCosts: {
      visa: 350,
      insurance: 2000,
      books: 1200,
      transport: 1500,
    },
  },
  "United Kingdom": {
    tuitionRange: { min: 15000, max: 45000 },
    livingCost: { min: 12000, max: 18000 },
    currency: "GBP",
    additionalCosts: {
      visa: 400,
      insurance: 500,
      books: 800,
      transport: 1200,
    },
  },
  Canada: {
    tuitionRange: { min: 20000, max: 35000 },
    livingCost: { min: 12000, max: 18000 },
    currency: "CAD",
    additionalCosts: {
      visa: 150,
      insurance: 800,
      books: 1000,
      transport: 1000,
    },
  },
  Australia: {
    tuitionRange: { min: 25000, max: 45000 },
    livingCost: { min: 18000, max: 25000 },
    currency: "AUD",
    additionalCosts: {
      visa: 650,
      insurance: 500,
      books: 1000,
      transport: 1500,
    },
  },
  Germany: {
    tuitionRange: { min: 0, max: 3000 },
    livingCost: { min: 10000, max: 12000 },
    currency: "EUR",
    additionalCosts: {
      visa: 75,
      insurance: 1000,
      books: 600,
      transport: 800,
    },
  },
}

export default function BudgetCalculatorPage() {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [tuitionFee, setTuitionFee] = useState("")
  const [accommodation, setAccommodation] = useState("")
  const [food, setFood] = useState("")
  const [transport, setTransport] = useState("")
  const [personal, setPersonal] = useState("")
  const [studyDuration, setStudyDuration] = useState("1")

  const selectedCountryData = selectedCountry ? countryData[selectedCountry] : null

  const calculations = useMemo(() => {
    if (!selectedCountryData) return null

    const tuition = Number.parseFloat(tuitionFee) || selectedCountryData.tuitionRange.min
    const living = {
      accommodation: Number.parseFloat(accommodation) || 8000,
      food: Number.parseFloat(food) || 3000,
      transport: Number.parseFloat(transport) || selectedCountryData.additionalCosts.transport,
      personal: Number.parseFloat(personal) || 2000,
    }

    const yearlyTotal =
      tuition +
      Object.values(living).reduce((a, b) => a + b, 0) +
      Object.values(selectedCountryData.additionalCosts).reduce((a, b) => a + b, 0)

    const totalCost = yearlyTotal * Number.parseFloat(studyDuration)

    return {
      tuition,
      living,
      additional: selectedCountryData.additionalCosts,
      yearlyTotal,
      totalCost,
      currency: selectedCountryData.currency,
    }
  }, [selectedCountry, tuitionFee, accommodation, food, transport, personal, studyDuration, selectedCountryData])

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Study Abroad Budget Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plan your finances for studying abroad. Get accurate cost estimates for tuition, living expenses, and
            additional costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="h-5 w-5 mr-2 text-blue-600" />
                Budget Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="country">Select Country</Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your study destination" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(countryData).map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedCountryData && (
                <>
                  <div>
                    <Label htmlFor="duration">Study Duration (Years)</Label>
                    <Select value={studyDuration} onValueChange={setStudyDuration}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Year</SelectItem>
                        <SelectItem value="2">2 Years</SelectItem>
                        <SelectItem value="3">3 Years</SelectItem>
                        <SelectItem value="4">4 Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="tuition">Annual Tuition Fee ({selectedCountryData.currency})</Label>
                    <Input
                      id="tuition"
                      type="number"
                      placeholder={`${selectedCountryData.tuitionRange.min} - ${selectedCountryData.tuitionRange.max}`}
                      value={tuitionFee}
                      onChange={(e) => setTuitionFee(e.target.value)}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Typical range: {selectedCountryData.currency}{" "}
                      {selectedCountryData.tuitionRange.min.toLocaleString()} -{" "}
                      {selectedCountryData.tuitionRange.max.toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="accommodation">Annual Accommodation ({selectedCountryData.currency})</Label>
                    <Input
                      id="accommodation"
                      type="number"
                      placeholder="8000"
                      value={accommodation}
                      onChange={(e) => setAccommodation(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="food">Annual Food & Groceries ({selectedCountryData.currency})</Label>
                    <Input
                      id="food"
                      type="number"
                      placeholder="3000"
                      value={food}
                      onChange={(e) => setFood(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="transport">Annual Transportation ({selectedCountryData.currency})</Label>
                    <Input
                      id="transport"
                      type="number"
                      placeholder={selectedCountryData.additionalCosts.transport.toString()}
                      value={transport}
                      onChange={(e) => setTransport(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="personal">Annual Personal Expenses ({selectedCountryData.currency})</Label>
                    <Input
                      id="personal"
                      type="number"
                      placeholder="2000"
                      value={personal}
                      onChange={(e) => setPersonal(e.target.value)}
                    />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Results */}
          {calculations && (
            <div className="space-y-6">
              {/* Summary Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                    Cost Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <span className="font-medium">
                        Total Cost ({studyDuration} year{studyDuration !== "1" ? "s" : ""})
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        {calculations.currency} {calculations.totalCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Annual Cost</span>
                      <span className="font-semibold">
                        {calculations.currency} {calculations.yearlyTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <PieChart className="h-5 w-5 mr-2 text-purple-600" />
                    Annual Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Tuition Fee</span>
                      <span className="font-medium">
                        {calculations.currency} {calculations.tuition.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Accommodation</span>
                      <span className="font-medium">
                        {calculations.currency} {calculations.living.accommodation.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Food & Groceries</span>
                      <span className="font-medium">
                        {calculations.currency} {calculations.living.food.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Transportation</span>
                      <span className="font-medium">
                        {calculations.currency} {calculations.living.transport.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Personal Expenses</span>
                      <span className="font-medium">
                        {calculations.currency} {calculations.living.personal.toLocaleString()}
                      </span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                      <span>Visa & Insurance</span>
                      <span className="font-medium">
                        {calculations.currency}{" "}
                        {(calculations.additional.visa + calculations.additional.insurance).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Books & Supplies</span>
                      <span className="font-medium">
                        {calculations.currency} {calculations.additional.books.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-orange-600" />
                    Money-Saving Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Consider shared accommodation to reduce housing costs
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Look for part-time work opportunities (check visa restrictions)
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Apply for scholarships and financial aid
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Use student discounts for transportation and entertainment
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* CTA */}
        {!selectedCountry && (
          <div className="text-center mt-12 p-8 bg-white rounded-lg shadow-md">
            <Calculator className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">Select a Country to Get Started</h3>
            <p className="text-gray-500">Choose your study destination to calculate accurate budget estimates.</p>
          </div>
        )}
      </div>
    </div>
  )
}
