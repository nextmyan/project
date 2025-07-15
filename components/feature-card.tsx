import type React from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  highlighted?: boolean
}

export default function FeatureCard({ icon, title, description, link, highlighted = false }: FeatureCardProps) {
  return (
    <Link href={link} className="group">
      <Card
        className={`h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
          highlighted ? "ring-2 ring-blue-500 bg-blue-50" : "hover:shadow-md"
        }`}
      >
        <CardContent className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div
              className={`p-3 rounded-full ${highlighted ? "bg-blue-100" : "bg-gray-100"} group-hover:scale-110 transition-transform duration-200`}
            >
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
