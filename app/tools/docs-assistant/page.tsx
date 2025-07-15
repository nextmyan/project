import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Lightbulb, ScrollText, ClipboardList, Download, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export default function DocsAssistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-12 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Document Assistant</h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Get expert assistance in crafting essential application documents like SOPs, CVs, LORs, and more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg rounded-xl p-6 text-left">
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <ScrollText className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-semibold">Statement of Purpose (SOP)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>
                Your SOP is crucial for showcasing your academic journey, career aspirations, and why you're a perfect
                fit for your chosen program.
              </CardDescription>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Personalized content tailored to your story</li>
                <li>Highlight academic achievements and research interests</li>
                <li>Align with university and program requirements</li>
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Link href="/guide/documents/sop" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  SOP Guide
                </Button>
              </Link>
              <Button
                variant="outline"
                className="flex-1 text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Template
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg rounded-xl p-6 text-left">
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-semibold">Curriculum Vitae (CV)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>
                A well-structured CV is your professional snapshot, highlighting your skills, experience, and
                qualifications.
              </CardDescription>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Professional formatting and design</li>
                <li>Keyword optimization for ATS</li>
                <li>Showcase relevant experience and achievements</li>
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Link href="/guide/documents/cv" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                >
                  CV Guide
                </Button>
              </Link>
              <Button
                variant="outline"
                className="flex-1 text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Template
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg rounded-xl p-6 text-left">
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <div className="bg-yellow-100 p-3 rounded-full">
                <ClipboardList className="h-6 w-6 text-yellow-600" />
              </div>
              <CardTitle className="text-2xl font-semibold">Letters of Recommendation (LOR)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>
                Guidance for securing strong LORs that highlight your strengths and potential from your recommenders.
              </CardDescription>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Tips for choosing the right recommenders</li>
                <li>Templates and guidelines for content</li>
                <li>Ensuring impactful and relevant recommendations</li>
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Link href="/guide/documents/lor" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full text-yellow-600 border-yellow-600 hover:bg-yellow-50 bg-transparent"
                >
                  LOR Guide
                </Button>
              </Link>
              <Button
                variant="outline"
                className="flex-1 text-yellow-600 border-yellow-600 hover:bg-yellow-50 bg-transparent"
              >
                <Download className="h-4 w-4 mr-2" />
                Template
              </Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg rounded-xl p-6 text-left">
            <CardHeader className="flex flex-row items-center space-x-4 pb-4">
              <div className="bg-red-100 p-3 rounded-full">
                <Lightbulb className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-2xl font-semibold">Essay & Portfolio Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>
                Expert review and feedback on your application essays and creative portfolios to make them stand out.
              </CardDescription>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Constructive feedback on content and structure</li>
                <li>Grammar, spelling, and punctuation checks</li>
                <li>Tips for showcasing creativity and uniqueness</li>
              </ul>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="w-full bg-red-600 hover:bg-red-700">Review My Documents</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="bg-blue-50 rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-semibold mb-4">Document Checklist by Country</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:bg-blue-100 px-4 rounded-lg">
                <div className="flex items-center">
                  <img src="https://flagpedia.net/data/flags/w580/us.png" alt="US flag" className="h-4 mr-2" />
                  <span>United States</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Statement of Purpose</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Resume/CV</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>3 Letters of Recommendation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Official Transcripts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Standardized Test Scores (GRE/GMAT)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>English Proficiency Test Scores (TOEFL/IELTS)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Financial Documents</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download US Checklist
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:bg-blue-100 px-4 rounded-lg">
                <div className="flex items-center">
                  <img src="https://flagpedia.net/data/flags/w580/gb.png" alt="UK flag" className="h-4 mr-2" />
                  <span>United Kingdom</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personal Statement</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>CV/Resume</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 Academic References</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Degree Certificates and Transcripts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>English Language Test Results (IELTS/TOEFL)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Research Proposal (for research degrees)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Portfolio (for art/design courses)</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download UK Checklist
                </Button>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:bg-blue-100 px-4 rounded-lg">
                <div className="flex items-center">
                  <img src="https://flagpedia.net/data/flags/w580/ca.png" alt="Canada flag" className="h-4 mr-2" />
                  <span>Canada</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Statement of Purpose</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>CV/Resume</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2-3 Letters of Recommendation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Transcripts and Degree Certificates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>English/French Proficiency Test Results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proof of Financial Support</span>
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Canada Checklist
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="text-center">
          <Link href="/guide/documents">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View All Document Guides <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
