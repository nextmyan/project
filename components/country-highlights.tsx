import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

const countries = [
  {
    name: "United States",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/us.png",
    universities: 4500,
    avgTuition: "$25,000 - $55,000",
    popularCourses: ["Computer Science", "Business", "Engineering"],
  },
  {
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
    universities: 100,
    avgTuition: "CAD 20,000 - 30,000",
    popularCourses: ["Engineering", "Computer Science", "Business"],
  },
  {
    name: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/au.png",
    universities: 43,
    avgTuition: "AUD 20,000 - 45,000",
    popularCourses: ["Business", "Engineering", "Health Sciences"],
  },
  {
    name: "Japan",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/jp.png",
    universities: 780,
    avgTuition: "¥535,800 - ¥950,000",
    popularCourses: ["Engineering", "Business", "Japanese Studies"],
  },
]

export default function CountryHighlights() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Popular Study Destinations</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Explore top countries for international education with comprehensive information on universities, costs, and
          opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <Card key={country.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={country.image || "/placeholder.svg"}
                    alt={`${country.name} universities`}
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <h3 className="text-white text-xl font-bold">{country.name}</h3>
                    <Image
                      src={country.flag || "/placeholder.svg"}
                      alt={`${country.name} flag`}
                      width={24}
                      height={16}
                      className="rounded-sm"
                    />
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Universities</span>
                    <span className="text-sm font-medium">{country.universities}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Avg. Tuition</span>
                    <span className="text-sm font-medium">{country.avgTuition}</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 block mb-1">Popular Courses</span>
                    <div className="flex flex-wrap gap-1">
                      {country.popularCourses.map((course) => (
                        <span key={course} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Link href={`/countries/${country.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-50">
                    Explore {country.name}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/countries">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View All Countries <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
