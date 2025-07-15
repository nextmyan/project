import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, CheckCircle, BookOpen, Award, FileText } from "lucide-react"
import HeroSection from "@/components/hero-section"
import FeatureCard from "@/components/feature-card"
import CountryHighlights from "@/components/country-highlights"
import ErrorBoundary from "@/components/error-boundary"
import { Search } from "lucide-react"

export default function Home() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection />

        {/* Main Features */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Your Journey Abroad Starts Here</h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              AbroadiQ helps you find the perfect university match based on your academic profile, budget, and
              interests.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-blue-600" />}
                title="Country Database"
                description="Explore countries with details on tuition fees, living costs, job opportunities, and PR pathways."
                link="/countries"
              />

              <FeatureCard
                icon={<CheckCircle className="h-10 w-10 text-blue-600" />}
                title="AI University Finder"
                description="Enter your academic details and get matched with suitable universities worldwide."
                link="/finder"
                highlighted={true}
              />

              <FeatureCard
                icon={<Search className="h-10 w-10 text-blue-600" />}
                title="Course Finder"
                description="Discover courses and programs that align with your academic background and career aspirations."
                link="/tools/program-finder"
              />

              <FeatureCard
                icon={<BookOpen className="h-10 w-10 text-blue-600" />}
                title="Study Abroad Guide"
                description="Step-by-step guides for each country with sample SOPs, LORs, and resumes."
                link="/guide"
              />

              <FeatureCard
                icon={<Award className="h-10 w-10 text-blue-600" />}
                title="Scholarship Finder"
                description="Search for fully funded, partially funded, and need-based scholarships."
                link="/scholarships"
              />

              <FeatureCard
                icon={<FileText className="h-10 w-10 text-blue-600" />}
                title="Docs Assistant"
                description="Get expert assistance in crafting essential application documents like SOPs, CVs, LORs, and more."
                link="/tools/docs-assistant"
              />
            </div>
          </div>
        </section>

        {/* Country Highlights */}
        <CountryHighlights />

        {/* Statistics Section */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AbroadiQ</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We've helped thousands of students achieve their study abroad dreams with our data-driven approach.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <p className="text-gray-700 text-sm md:text-base">Students Helped</p>
              </div>

              <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <p className="text-700 text-sm md:text-base">Success Rate</p>
              </div>

              <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-700 text-sm md:text-base">Countries Covered</p>
              </div>

              <div className="bg-blue-50 p-4 md:p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-gray-700 text-sm md:text-base">University Partners</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get personalized university recommendations based on your profile today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/finder">
                <Button className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-6 text-lg w-full sm:w-auto">
                  Find Universities
                </Button>
              </Link>
              <Link href="/guide">
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-6 text-lg font-bold w-full sm:w-auto bg-transparent"
                >
                  Explore Guide
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  )
}
