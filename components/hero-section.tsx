import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, GraduationCap, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Perfect <span className="text-blue-600">University</span> Abroad
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
              Personalized guidance to help you discover top universities worldwide based on your academic profile,
              budget, and interests.
            </p>

            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/finder" className="w-full sm:w-auto">
                <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-6 text-lg w-full">Find Your University</Button>
              </Link>
              <Link href="/countries" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-6 text-lg w-full bg-transparent"
                >
                  Explore Countries
                </Button>
              </Link>
            </div>

            <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 text-gray-600">
              <div className="flex items-center mr-4">
                <GraduationCap className="h-5 w-5 mr-2 text-blue-600" />
                <span>100+ Universities</span>
              </div>
              <div className="flex items-center mr-4">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                <span>50+ Countries</span>
              </div>
              <div className="flex items-center">
                <Search className="h-5 w-5 mr-2 text-blue-600" />
                <span>AI-Powered Matching</span>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Students exploring global education opportunities"
                className="w-full h-auto"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
