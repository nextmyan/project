import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Building,
  GraduationCap,
  MapPin,
  Briefcase,
  DollarSign,
  Globe,
  FileText,
  BookOpen,
  Award,
  CheckCircle,
} from "lucide-react"
import StudentExperiences from "@/components/student-experiences"
import Image from "next/image"

// This would typically come from a database or API
const countries = {
  "united-states": {
    name: "United States",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/us.png",
    description:
      "The United States is home to some of the world's top universities, offering a diverse range of programs and research opportunities. With a flexible education system, students can customize their academic journey while experiencing American campus life and culture.",
    universities: 4500,
    avgTuition: "$25,000 - $55,000",
    livingCost: "$10,000 - $25,000",
    workRights: "20 hours/week during studies, OPT after graduation",
    prPathway: "H-1B visa, Green Card through employment",
    popularCourses: ["Computer Science", "Business", "Engineering", "Medicine", "Arts"],
    languages: ["English"],
    scholarships: [
      {
        name: "Fulbright Foreign Student Program",
        amount: "Full tuition and living expenses",
        eligibility: "International students with outstanding academic records",
      },
      {
        name: "Hubert H. Humphrey Fellowship Program",
        amount: "Full funding",
        eligibility: "Young and mid-career professionals",
      },
      {
        name: "Onsi Sawiris Scholarship",
        amount: "Full tuition and living expenses",
        eligibility: "Egyptian students pursuing graduate studies",
      },
    ],
    topUniversities: [
      {
        name: "Harvard University",
        ranking: 1,
        location: "Cambridge, Massachusetts",
        image:
          "https://images.unsplash.com/photo-1605806616949-59175deb4b46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts & Sciences", "Business", "Law", "Medicine", "Engineering"],
        tuition: "$51,925",
        acceptanceRate: "4%",
      },
      {
        name: "Stanford University",
        ranking: 3,
        location: "Stanford, California",
        image:
          "https://images.unsplash.com/photo-1602643187329-9ea3e75f9b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Business", "Earth Sciences", "Education", "Medicine"],
        tuition: "$56,169",
        acceptanceRate: "4%",
      },
      {
        name: "Massachusetts Institute of Technology (MIT)",
        ranking: 2,
        location: "Cambridge, Massachusetts",
        image:
          "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Computer Science", "Business", "Science", "Architecture"],
        tuition: "$53,790",
        acceptanceRate: "7%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Take standardized tests (SAT/ACT for undergraduate, GRE/GMAT for graduate)",
      "Prepare application documents (transcripts, essays, recommendation letters)",
      "Submit applications through Common App or university portals",
      "Apply for scholarships and financial aid",
      "Apply for F-1 student visa after receiving acceptance",
    ],
    visaRequirements: [
      "Acceptance letter from a SEVP-approved institution",
      "Completed I-20 form",
      "Payment of SEVIS fee",
      "Completed DS-160 form",
      "Valid passport",
      "Evidence of financial support",
      "Proof of ties to home country",
      "Visa interview at US embassy or consulate",
    ],
  },
  "united-kingdom": {
    name: "United Kingdom",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/gb.png",
    description:
      "The United Kingdom offers world-class education with a rich academic heritage. UK degrees are internationally recognized and typically shorter than in other countries, making them cost-effective. Students benefit from innovative teaching methods and develop critical thinking skills valued by employers worldwide.",
    universities: 130,
    avgTuition: "£10,000 - £38,000",
    livingCost: "£9,000 - £15,000",
    workRights: "20 hours/week during studies, 2-year PSW visa",
    prPathway: "Skilled Worker visa, Indefinite Leave to Remain after 5 years",
    popularCourses: ["Business", "Law", "Medicine", "Engineering", "Arts"],
    languages: ["English"],
    scholarships: [
      {
        name: "Chevening Scholarships",
        amount: "Full tuition and living expenses",
        eligibility: "International students with leadership potential",
      },
      {
        name: "Commonwealth Scholarships",
        amount: "Full funding",
        eligibility: "Students from Commonwealth countries",
      },
      {
        name: "GREAT Scholarships",
        amount: "£10,000 towards tuition fees",
        eligibility: "Students from selected countries",
      },
    ],
    topUniversities: [
      {
        name: "University of Oxford",
        ranking: 2,
        location: "Oxford, England",
        image:
          "https://images.unsplash.com/photo-1580492516014-4a28533b3f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Humanities", "Sciences", "Social Sciences", "Medical Sciences", "Mathematics"],
        tuition: "£26,770 - £37,510",
        acceptanceRate: "17%",
      },
      {
        name: "University of Cambridge",
        ranking: 3,
        location: "Cambridge, England",
        image:
          "https://images.unsplash.com/photo-1579556090562-bf7e6b081afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts & Humanities", "Biological Sciences", "Clinical Medicine", "Technology", "Physical Sciences"],
        tuition: "£22,227 - £58,038",
        acceptanceRate: "21%",
      },
      {
        name: "Imperial College London",
        ranking: 7,
        location: "London, England",
        image:
          "https://images.unsplash.com/photo-1607975218223-94f6636e2a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Medicine", "Natural Sciences", "Business"],
        tuition: "£32,000 - £45,300",
        acceptanceRate: "14%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Prepare application documents (transcripts, personal statement, reference letters)",
      "Apply through UCAS for undergraduate programs or directly to universities for postgraduate programs",
      "Attend interviews if required",
      "Apply for scholarships",
      "Apply for student visa after receiving acceptance",
    ],
    visaRequirements: [
      "Confirmation of Acceptance for Studies (CAS) from your university",
      "Proof of funds to cover tuition and living costs",
      "Valid passport",
      "Tuberculosis test results (if applicable)",
      "Academic Technology Approval Scheme (ATAS) certificate (if applicable)",
      "English language proficiency",
    ],
  },
  canada: {
    name: "Canada",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
    description:
      "Canada offers high-quality education at affordable tuition rates compared to other English-speaking countries. Known for its safe, multicultural environment, Canada provides excellent post-graduation work opportunities and pathways to permanent residency, making it increasingly popular among international students.",
    universities: 100,
    avgTuition: "CAD 20,000 - 30,000",
    livingCost: "CAD 10,000 - 15,000",
    workRights: "20 hours/week during studies, 3-year PGWP",
    prPathway: "Express Entry, Provincial Nominee Program",
    popularCourses: ["Engineering", "Computer Science", "Business", "Healthcare", "Media"],
    languages: ["English", "French"],
    scholarships: [
      {
        name: "Vanier Canada Graduate Scholarships",
        amount: "CAD 50,000 per year for three years",
        eligibility: "Doctoral students with leadership skills and high academic achievement",
      },
      {
        name: "Banting Postdoctoral Fellowships",
        amount: "CAD 70,000 per year for two years",
        eligibility: "Postdoctoral researchers",
      },
      {
        name: "Trudeau Foundation Scholarships",
        amount: "CAD 40,000 per year for three years",
        eligibility: "Doctoral students in social sciences and humanities",
      },
    ],
    topUniversities: [
      {
        name: "University of Toronto",
        ranking: 18,
        location: "Toronto, Ontario",
        image:
          "https://images.unsplash.com/photo-1569523765872-5b1ea13a3af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts & Science", "Engineering", "Medicine", "Business", "Law"],
        tuition: "CAD 57,020",
        acceptanceRate: "43%",
      },
      {
        name: "University of British Columbia",
        ranking: 34,
        location: "Vancouver, British Columbia",
        image:
          "https://images.unsplash.com/photo-1604778234463-761f94e8316a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts", "Science", "Business", "Engineering", "Education"],
        tuition: "CAD 42,000 - 54,000",
        acceptanceRate: "52%",
      },
      {
        name: "McGill University",
        ranking: 31,
        location: "Montreal, Quebec",
        image:
          "https://images.unsplash.com/photo-1580843411760-ea8dd57deab6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Agricultural & Environmental Sciences", "Arts", "Education", "Engineering", "Medicine"],
        tuition: "CAD 29,200 - 45,600",
        acceptanceRate: "46%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Prepare application documents (transcripts, essays, reference letters)",
      "Submit applications directly to universities",
      "Apply for scholarships",
      "Apply for study permit after receiving acceptance",
      "Apply for provincial health insurance upon arrival",
    ],
    visaRequirements: [
      "Acceptance letter from a Designated Learning Institution (DLI)",
      "Proof of funds to cover tuition and living expenses",
      "Valid passport",
      "Clean criminal record",
      "Medical examination (if required)",
      "Biometrics (fingerprints and photo)",
      "Letter of explanation",
    ],
  },
  australia: {
    name: "Australia",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/au.png",
    description:
      "Australia offers a relaxed, high-quality living environment with excellent education standards. The Australian education system is distinguished by its innovative research and teaching practices. With post-study work opportunities and a welcoming atmosphere, Australia is an attractive destination for international students.",
    universities: 43,
    avgTuition: "AUD 20,000 - 45,000",
    livingCost: "AUD 15,000 - 25,000",
    workRights: "40 hours/fortnight during studies, 2-4 year PSW visa",
    prPathway: "Skilled Independent visa, Employer Sponsored visa",
    popularCourses: ["Business", "Engineering", "Health Sciences", "IT", "Hospitality"],
    languages: ["English"],
    scholarships: [
      {
        name: "Australia Awards Scholarships",
        amount: "Full tuition, living expenses, and travel",
        eligibility: "Students from developing countries",
      },
      {
        name: "Endeavour Postgraduate Scholarship",
        amount: "AUD 15,000 - 272,500",
        eligibility: "International students for master's and doctoral degrees",
      },
      {
        name: "University-specific scholarships",
        amount: "Varies",
        eligibility: "Based on academic merit and other criteria",
      },
    ],
    topUniversities: [
      {
        name: "University of Melbourne",
        ranking: 33,
        location: "Melbourne, Victoria",
        image:
          "https://images.unsplash.com/photo-1591116396100-c45530f8c5c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts", "Science", "Business", "Engineering", "Medicine"],
        tuition: "AUD 42,000",
        acceptanceRate: "70%",
      },
      {
        name: "Australian National University",
        ranking: 27,
        location: "Canberra, ACT",
        image:
          "https://images.unsplash.com/photo-1612559098141-c89ec006b6f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: [
          "Arts & Social Sciences",
          "Business & Economics",
          "Engineering & Computer Science",
          "Law",
          "Science",
        ],
        tuition: "AUD 36,000 - 48,000",
        acceptanceRate: "35%",
      },
      {
        name: "University of Sydney",
        ranking: 38,
        location: "Sydney, New South Wales",
        image:
          "https://images.unsplash.com/photo-1506377585622-bedcbb027afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts & Social Sciences", "Business", "Engineering", "Medicine", "Science"],
        tuition: "AUD 38,000 - 46,000",
        acceptanceRate: "30%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Prepare application documents (transcripts, statement of purpose, reference letters)",
      "Submit applications directly to universities",
      "Apply for scholarships",
      "Apply for student visa (subclass 500) after receiving acceptance",
      "Arrange for Overseas Student Health Cover (OSHC)",
    ],
    visaRequirements: [
      "Confirmation of Enrollment (CoE) from your university",
      "Genuine Temporary Entrant (GTE) statement",
      "Proof of funds for tuition and living expenses",
      "Valid passport",
      "English language proficiency",
      "Health insurance (OSHC)",
      "Health examination",
      "Character requirements",
    ],
  },
  germany: {
    name: "Germany",
    image:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/de.png",
    description:
      "Germany offers tuition-free education at public universities for all international students, making it one of the most affordable study destinations. Known for excellence in engineering and technical fields, German universities combine theoretical knowledge with practical experience through industry partnerships. The country also offers good post-graduation work opportunities and quality of life.",
    universities: 400,
    avgTuition: "No tuition (€100-300 semester fee)",
    livingCost: "€10,000 - €12,000",
    workRights: "120 full days or 240 half days per year, 18-month job seeker visa",
    prPathway: "EU Blue Card, Settlement permit after 21-33 months",
    popularCourses: ["Engineering", "Computer Science", "Medicine", "Physics", "Business"],
    languages: ["German", "English (some programs)"],
    scholarships: [
      {
        name: "DAAD Scholarships",
        amount: "€850 per month plus additional allowances",
        eligibility: "International students for various degree levels",
      },
      {
        name: "Erasmus+ Programme",
        amount: "€250 - €500 per month",
        eligibility: "Students from partner universities",
      },
      {
        name: "Heinrich Böll Foundation Scholarships",
        amount: "€850 per month plus additional allowances",
        eligibility: "Students with excellent academic records and social/political engagement",
      },
    ],
    topUniversities: [
      {
        name: "Technical University of Munich",
        ranking: 50,
        location: "Munich, Bavaria",
        image:
          "https://images.unsplash.com/photo-1597326527055-6c5f9be9b53f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Natural Sciences", "Medicine", "Life Sciences", "Management"],
        tuition: "No tuition (€129 semester fee)",
        acceptanceRate: "20%",
      },
      {
        name: "Ludwig Maximilian University of Munich",
        ranking: 32,
        location: "Munich, Bavaria",
        image:
          "https://images.unsplash.com/photo-1599941973480-33ce6bbca4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Humanities", "Social Sciences", "Natural Sciences", "Medicine", "Law"],
        tuition: "No tuition (€129 semester fee)",
        acceptanceRate: "N/A",
      },
      {
        name: "Heidelberg University",
        ranking: 42,
        location: "Heidelberg, Baden-Württemberg",
        image:
          "https://images.unsplash.com/photo-1597225244660-1cd128c64284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Medicine", "Law", "Economics", "Natural Sciences", "Humanities"],
        tuition: "No tuition (€171.80 semester fee)",
        acceptanceRate: "N/A",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Check language requirements (German or English)",
      "Get your educational documents recognized",
      "Apply through uni-assist or directly to universities",
      "Apply for scholarships",
      "Apply for student visa after receiving acceptance",
      "Register for health insurance upon arrival",
    ],
    visaRequirements: [
      "Acceptance letter from a German university",
      "Proof of financial resources (€10,332 per year)",
      "Valid passport",
      "Health insurance",
      "Proof of language proficiency",
      "Biometric photos",
      "Visa application form",
    ],
  },
  india: {
    name: "India",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/in.png",
    description:
      "India offers affordable, quality education with globally recognized degrees. The country has a rich cultural heritage and is becoming an increasingly popular destination for international students, particularly from neighboring countries and Africa. With lower tuition and living costs compared to Western countries, India provides excellent value for education.",
    universities: 1000,
    avgTuition: "$3,000 - $8,000",
    livingCost: "$2,500 - $5,000",
    workRights: "Limited, primarily on-campus employment",
    prPathway: "Employment visa after graduation, potential for long-term residency",
    popularCourses: ["Engineering", "Medicine", "IT", "Business Management", "Pharmacy"],
    languages: ["English", "Hindi", "Various regional languages"],
    scholarships: [
      {
        name: "Study in India Scholarship",
        amount: "Full or partial tuition waiver",
        eligibility: "International students based on merit",
      },
      {
        name: "Indian Council for Cultural Relations (ICCR) Scholarships",
        amount: "Tuition fees, living allowance, and other benefits",
        eligibility: "Students from specific countries under cultural exchange programs",
      },
      {
        name: "Commonwealth Scholarship and Fellowship Plan",
        amount: "Varies",
        eligibility: "Students from Commonwealth countries",
      },
    ],
    topUniversities: [
      {
        name: "Indian Institute of Technology (IIT) Delhi",
        ranking: 174,
        location: "New Delhi",
        image:
          "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Technology", "Management", "Design", "Sciences"],
        tuition: "$4,000 - $8,000",
        acceptanceRate: "2%",
      },
      {
        name: "Indian Institute of Science (IISc)",
        ranking: 155,
        location: "Bangalore, Karnataka",
        image:
          "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Science", "Engineering", "Management", "Interdisciplinary Sciences"],
        tuition: "$2,500 - $5,000",
        acceptanceRate: "1-2%",
      },
      {
        name: "University of Delhi",
        ranking: 501 - 510,
        location: "Delhi",
        image:
          "https://images.unsplash.com/photo-1599941973480-33ce6bbca4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts", "Commerce", "Science", "Law", "Management"],
        tuition: "$1,500 - $4,000",
        acceptanceRate: "20%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Check eligibility requirements",
      "Prepare application documents (transcripts, statement of purpose, recommendation letters)",
      "Apply directly to universities or through centralized admission tests",
      "Apply for scholarships",
      "Apply for student visa after receiving acceptance",
    ],
    visaRequirements: [
      "Acceptance letter from an Indian university",
      "Valid passport",
      "Proof of financial resources",
      "Health insurance",
      "HIV test results (for stays longer than 1 year)",
      "Visa application form",
      "Passport-sized photographs",
    ],
  },
  france: {
    name: "France",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/fr.png",
    description:
      "France offers high-quality education with relatively low tuition fees at public universities. Known for its rich cultural heritage and excellent quality of life, France provides a unique study experience. The country is particularly strong in business, arts, fashion, and culinary arts education.",
    universities: 250,
    avgTuition: "€170 - €3,770",
    livingCost: "€9,600 - €14,400",
    workRights: "964 hours per year (about 20 hours/week), 1-year job search visa after graduation",
    prPathway: "Talent Passport, permanent residence after 5 years",
    popularCourses: ["Business", "Engineering", "Arts", "Fashion Design", "Culinary Arts"],
    languages: ["French", "English (some programs)"],
    scholarships: [
      {
        name: "Eiffel Excellence Scholarship Program",
        amount: "€1,181 monthly allowance plus other benefits",
        eligibility: "International students for master's and doctoral programs",
      },
      {
        name: "French Government Scholarships (BGF)",
        amount: "Varies",
        eligibility: "Based on academic excellence and project relevance",
      },
      {
        name: "Charpak Scholarship Program",
        amount: "€700 monthly allowance plus other benefits",
        eligibility: "Indian students for exchange programs or master's degrees",
      },
    ],
    topUniversities: [
      {
        name: "Paris Sciences et Lettres University (PSL)",
        ranking: 40,
        location: "Paris",
        image:
          "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Sciences", "Engineering", "Arts", "Humanities", "Social Sciences"],
        tuition: "€170 - €3,770",
        acceptanceRate: "N/A",
      },
      {
        name: "Sorbonne University",
        ranking: 83,
        location: "Paris",
        image:
          "https://images.unsplash.com/photo-1541679486598-5b8a1c9f1ddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts & Humanities", "Medicine", "Science & Engineering", "Business"],
        tuition: "€170 - €3,770",
        acceptanceRate: "N/A",
      },
      {
        name: "HEC Paris",
        ranking: 1,
        location: "Paris",
        image:
          "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Business", "Management", "Finance", "Entrepreneurship"],
        tuition: "€15,000 - €78,000",
        acceptanceRate: "15%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Check language requirements (French or English)",
      "Apply through the national platform (Parcoursup for undergraduate, Campus France for international students)",
      "Apply for scholarships",
      "Apply for student visa after receiving acceptance",
      "Register for health insurance upon arrival",
    ],
    visaRequirements: [
      "Acceptance letter from a French university",
      "Proof of financial resources (€615 per month)",
      "Valid passport",
      "Health insurance",
      "Proof of accommodation",
      "OFII form (for stays longer than 3 months)",
      "Campus France approval (for students from certain countries)",
    ],
  },
  italy: {
    name: "Italy",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/it.png",
    description:
      "Italy offers a rich cultural experience with high-quality education at affordable tuition fees. Known for its historical significance and artistic heritage, Italy provides a unique study environment. The country is particularly strong in arts, architecture, design, and humanities.",
    universities: 97,
    avgTuition: "€900 - €4,000",
    livingCost: "€8,000 - €12,000",
    workRights: "20 hours/week during studies, post-study work options available",
    prPathway: "Work permit, permanent residence after 5 years",
    popularCourses: ["Arts", "Architecture", "Fashion Design", "Engineering", "Business"],
    languages: ["Italian", "English (some programs)"],
    scholarships: [
      {
        name: "Italian Government Scholarships",
        amount: "Full tuition and monthly allowance",
        eligibility: "International students based on academic merit",
      },
      {
        name: "Regional Scholarships",
        amount: "Varies by region",
        eligibility: "Based on financial need and academic performance",
      },
      {
        name: "University-specific Scholarships",
        amount: "Partial to full tuition waiver",
        eligibility: "Varies by university",
      },
    ],
    topUniversities: [
      {
        name: "University of Bologna",
        ranking: 167,
        location: "Bologna, Italy",
        image:
          "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts & Humanities", "Law", "Medicine", "Engineering", "Economics"],
        tuition: "€2,000 - €4,000",
        acceptanceRate: "35%",
      },
      {
        name: "Sapienza University of Rome",
        ranking: 171,
        location: "Rome, Italy",
        image:
          "https://images.unsplash.com/photo-1531572753322-ad063cecc140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Medicine", "Humanities", "Architecture", "Sciences"],
        tuition: "€1,000 - €3,500",
        acceptanceRate: "40%",
      },
      {
        name: "Politecnico di Milano",
        ranking: 142,
        location: "Milan, Italy",
        image:
          "https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Architecture", "Design", "Engineering", "Urban Planning"],
        tuition: "€3,500 - €4,000",
        acceptanceRate: "30%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Check language requirements (Italian or English)",
      "Prepare application documents (transcripts, motivation letter, recommendation letters)",
      "Apply directly to universities",
      "Apply for pre-enrollment at the Italian consulate/embassy in your country",
      "Apply for student visa after receiving acceptance",
      "Register for health insurance upon arrival",
    ],
    visaRequirements: [
      "Acceptance letter from an Italian university",
      "Proof of financial resources (approximately €6,000 per year)",
      "Valid passport",
      "Health insurance",
      "Proof of accommodation",
      "Return ticket or sufficient funds to purchase one",
      "Visa application form",
    ],
  },
  spain: {
    name: "Spain",
    image:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/es.png",
    description:
      "Spain offers a vibrant cultural experience with affordable education options. With a relaxed lifestyle, excellent weather, and rich history, Spain is an attractive destination for international students. The country is particularly strong in business, tourism, and arts education.",
    universities: 76,
    avgTuition: "€750 - €3,500",
    livingCost: "€7,000 - €12,000",
    workRights: "20 hours/week during studies, post-study options available",
    prPathway: "Work permit, permanent residence after 5 years",
    popularCourses: ["Business", "Tourism", "Engineering", "Arts", "Medicine"],
    languages: ["Spanish", "English (some programs)"],
    scholarships: [
      {
        name: "Spanish Government Scholarships",
        amount: "Full tuition and monthly stipend",
        eligibility: "International students based on academic merit",
      },
      {
        name: "Erasmus+ Programme",
        amount: "€250 - €500 per month",
        eligibility: "Students from partner universities",
      },
      {
        name: "Carolina Foundation Scholarships",
        amount: "Full or partial funding",
        eligibility: "Students from Latin America and Portugal",
      },
    ],
    topUniversities: [
      {
        name: "Complutense University of Madrid",
        ranking: 206,
        location: "Madrid, Spain",
        image:
          "https://images.unsplash.com/photo-1558370781-d6196949e317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts & Humanities", "Social Sciences", "Medicine", "Sciences", "Law"],
        tuition: "€1,500 - €3,500",
        acceptanceRate: "40%",
      },
      {
        name: "University of Barcelona",
        ranking: 168,
        location: "Barcelona, Spain",
        image:
          "https://images.unsplash.com/photo-1561632669-7f55f7975606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Business", "Medicine", "Law", "Sciences", "Arts"],
        tuition: "€1,500 - €3,000",
        acceptanceRate: "35%",
      },
      {
        name: "IE University",
        ranking: 347,
        location: "Madrid & Segovia, Spain",
        image:
          "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Business", "Law", "International Relations", "Architecture", "Technology"],
        tuition: "€18,000 - €25,000",
        acceptanceRate: "25%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Check language requirements (Spanish or English)",
      "Prepare application documents (transcripts, motivation letter, recommendation letters)",
      "Apply directly to universities",
      "Get your qualifications recognized by the Spanish Ministry of Education",
      "Apply for student visa after receiving acceptance",
      "Register for health insurance upon arrival",
    ],
    visaRequirements: [
      "Acceptance letter from a Spanish university",
      "Proof of financial resources (approximately €6,000 per year)",
      "Valid passport",
      "Health insurance",
      "Criminal record certificate",
      "Medical certificate",
      "Visa application form",
    ],
  },
  ireland: {
    name: "Ireland",
    image:
      "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/ie.png",
    description:
      "Ireland offers high-quality education in an English-speaking environment with a friendly atmosphere. As a member of the European Union, Ireland provides excellent career opportunities and a gateway to Europe. The country is particularly strong in technology, business, and humanities education.",
    universities: 34,
    avgTuition: "€9,000 - €25,000",
    livingCost: "€9,000 - €15,000",
    workRights: "20 hours/week during studies, 2-year stay back option",
    prPathway: "Critical Skills Employment Permit, permanent residence after 5 years",
    popularCourses: ["Computer Science", "Business", "Medicine", "Engineering", "Humanities"],
    languages: ["English"],
    scholarships: [
      {
        name: "Government of Ireland International Education Scholarships",
        amount: "€10,000",
        eligibility: "International students with outstanding academic records",
      },
      {
        name: "Walsh Fellowship Programme",
        amount: "Full tuition and stipend",
        eligibility: "Research students in agriculture and food science",
      },
      {
        name: "University-specific Scholarships",
        amount: "Varies",
        eligibility: "Based on academic merit and other criteria",
      },
    ],
    topUniversities: [
      {
        name: "Trinity College Dublin",
        ranking: 98,
        location: "Dublin, Ireland",
        image:
          "https://images.unsplash.com/photo-1565373677928-80b26c689826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts & Humanities", "Business", "Engineering", "Medicine", "Science"],
        tuition: "€18,000 - €25,000",
        acceptanceRate: "33%",
      },
      {
        name: "University College Dublin",
        ranking: 173,
        location: "Dublin, Ireland",
        image:
          "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Business", "Science", "Engineering", "Arts", "Medicine"],
        tuition: "€16,000 - €25,000",
        acceptanceRate: "40%",
      },
      {
        name: "University College Cork",
        ranking: 298,
        location: "Cork, Ireland",
        image:
          "https://images.unsplash.com/photo-1568797629192-150b1088b839?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Medicine", "Science", "Business", "Arts", "Law"],
        tuition: "€15,000 - €23,000",
        acceptanceRate: "45%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Prepare application documents (transcripts, personal statement, recommendation letters)",
      "Apply through the Central Applications Office (CAO) for undergraduate programs or directly to universities for postgraduate programs",
      "Apply for scholarships",
      "Apply for student visa after receiving acceptance (non-EU students)",
      "Arrange for health insurance",
    ],
    visaRequirements: [
      "Acceptance letter from an Irish university",
      "Proof of funds (at least €7,000 plus tuition fees)",
      "Valid passport",
      "Health insurance",
      "Proof of English language proficiency",
      "Visa application form",
      "Two passport-sized photographs",
    ],
  },
  japan: {
    name: "Japan",
    image:
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/jp.png",
    description:
      "Japan offers a unique blend of traditional culture and cutting-edge technology. With high academic standards and a safe living environment, Japan is becoming increasingly popular among international students. The country is particularly strong in engineering, technology, and sciences.",
    universities: 780,
    avgTuition: "¥535,800 - ¥950,000",
    livingCost: "¥1,000,000 - ¥1,500,000",
    workRights: "28 hours/week during studies, post-study work options available",
    prPathway: "Work visa, permanent residence after 10 years",
    popularCourses: ["Engineering", "Business", "Japanese Studies", "Computer Science", "Arts"],
    languages: ["Japanese", "English (some programs)"],
    scholarships: [
      {
        name: "Japanese Government (MEXT) Scholarship",
        amount: "Full tuition, monthly stipend, and round-trip airfare",
        eligibility: "International students with outstanding academic records",
      },
      {
        name: "JASSO Student Exchange Support Program",
        amount: "¥80,000 per month",
        eligibility: "Exchange students from partner universities",
      },
      {
        name: "University-specific Scholarships",
        amount: "Varies",
        eligibility: "Based on academic merit and other criteria",
      },
    ],
    topUniversities: [
      {
        name: "University of Tokyo",
        ranking: 23,
        location: "Tokyo, Japan",
        image:
          "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Science", "Engineering", "Medicine", "Humanities", "Law"],
        tuition: "¥535,800",
        acceptanceRate: "33%",
      },
      {
        name: "Kyoto University",
        ranking: 33,
        location: "Kyoto, Japan",
        image:
          "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Science", "Medicine", "Agriculture", "Letters"],
        tuition: "¥535,800",
        acceptanceRate: "38%",
      },
      {
        name: "Osaka University",
        ranking: 75,
        location: "Osaka, Japan",
        image:
          "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Medicine", "Science", "Dentistry", "Pharmaceutical Sciences"],
        tuition: "¥535,800",
        acceptanceRate: "40%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Check language requirements (Japanese or English)",
      "Prepare application documents (transcripts, statement of purpose, recommendation letters)",
      "Take the Examination for Japanese University Admission for International Students (EJU) if required",
      "Apply directly to universities",
      "Apply for scholarships",
      "Apply for student visa after receiving acceptance",
    ],
    visaRequirements: [
      "Certificate of Eligibility (COE) from your university",
      "Valid passport",
      "Visa application form",
      "Passport-sized photographs",
      "Proof of financial resources",
      "Academic transcripts",
      "Return air ticket or sufficient funds to purchase one",
    ],
  },
  singapore: {
    name: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/sg.png",
    description:
      "Singapore offers world-class education in a multicultural, safe environment. As a global business hub, Singapore provides excellent career opportunities and a gateway to Asia. The country is particularly strong in business, engineering, and technology education.",
    universities: 34,
    avgTuition: "SGD 20,000 - 45,000",
    livingCost: "SGD 10,000 - 15,000",
    workRights: "16 hours/week during term, full-time during holidays",
    prPathway: "Employment Pass, permanent residence after 2-6 years",
    popularCourses: ["Business", "Engineering", "Computer Science", "Medicine", "Law"],
    languages: ["English", "Mandarin (some programs)"],
    scholarships: [
      {
        name: "Singapore Government Scholarships",
        amount: "Full tuition and living expenses",
        eligibility: "International students with outstanding academic records",
      },
      {
        name: "ASEAN Scholarships",
        amount: "Full tuition and living allowance",
        eligibility: "Students from ASEAN countries",
      },
      {
        name: "University-specific Scholarships",
        amount: "Varies",
        eligibility: "Based on academic merit and other criteria",
      },
    ],
    topUniversities: [
      {
        name: "National University of Singapore",
        ranking: 11,
        location: "Singapore",
        image:
          "https://images.unsplash.com/photo-1596458598955-9d8b65cae30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts & Social Sciences", "Business", "Computing", "Engineering", "Medicine"],
        tuition: "SGD 29,650",
        acceptanceRate: "5%",
      },
      {
        name: "Nanyang Technological University",
        ranking: 19,
        location: "Singapore",
        image:
          "https://images.unsplash.com/photo-1599941973480-33ce6bbca4c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Business", "Science", "Humanities", "Art & Design"],
        tuition: "SGD 29,350",
        acceptanceRate: "7%",
      },
      {
        name: "Singapore Management University",
        ranking: 511 - 520,
        location: "Singapore",
        image:
          "https://images.unsplash.com/photo-1596458598955-9d8b65cae30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Business", "Economics", "Law", "Information Systems", "Social Sciences"],
        tuition: "SGD 28,000",
        acceptanceRate: "20%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Prepare application documents (transcripts, personal statement, recommendation letters)",
      "Apply directly to universities",
      "Apply for scholarships",
      "Apply for student visa (Student's Pass) after receiving acceptance",
      "Arrange for health insurance",
    ],
    visaRequirements: [
      "Acceptance letter from a Singapore university",
      "Student's Pass application through the Student's Pass Online Application & Registration (SOLAR) system",
      "Valid passport",
      "Passport-sized photographs",
      "Proof of financial resources",
      "Health declaration",
      "Medical insurance",
    ],
  },
  "new-zealand": {
    name: "New Zealand",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    flag: "https://flagpedia.net/data/flags/w580/nz.png",
    description:
      "New Zealand offers high-quality education in a stunning natural environment. Known for its friendly people, outdoor lifestyle, and excellent work-life balance, New Zealand is an attractive destination for international students. The country is particularly strong in agriculture, environmental science, and tourism.",
    universities: 8,
    avgTuition: "NZD 22,000 - 35,000",
    livingCost: "NZD 15,000 - 25,000",
    workRights: "20 hours/week during studies, 1-3 year post-study work visa",
    prPathway: "Skilled Migrant Category, permanent residence after 2 years",
    popularCourses: ["Agriculture", "Environmental Science", "Tourism", "Engineering", "Business"],
    languages: ["English"],
    scholarships: [
      {
        name: "New Zealand International Doctoral Research Scholarships",
        amount: "Full tuition and living allowance",
        eligibility: "International students for doctoral studies",
      },
      {
        name: "New Zealand Commonwealth Scholarships",
        amount: "Full tuition and living expenses",
        eligibility: "Students from Commonwealth countries",
      },
      {
        name: "University-specific Scholarships",
        amount: "Varies",
        eligibility: "Based on academic merit and other criteria",
      },
    ],
    topUniversities: [
      {
        name: "University of Auckland",
        ranking: 87,
        location: "Auckland, New Zealand",
        image:
          "https://images.unsplash.com/photo-1595612267446-5a4a6e5b3ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Arts", "Business", "Engineering", "Law", "Science"],
        tuition: "NZD 32,000 - 42,000",
        acceptanceRate: "65%",
      },
      {
        name: "University of Otago",
        ranking: 194,
        location: "Dunedin, New Zealand",
        image:
          "https://images.unsplash.com/photo-1596458598955-9d8b65cae30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Health Sciences", "Sciences", "Humanities", "Business", "Law"],
        tuition: "NZD 27,000 - 37,000",
        acceptanceRate: "70%",
      },
      {
        name: "University of Canterbury",
        ranking: 258,
        location: "Christchurch, New Zealand",
        image:
          "https://images.unsplash.com/photo-1596458598955-9d8b65cae30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        programs: ["Engineering", "Science", "Business", "Arts", "Law"],
        tuition: "NZD 26,000 - 36,000",
        acceptanceRate: "75%",
      },
    ],
    applicationProcess: [
      "Research universities and programs",
      "Prepare application documents (transcripts, personal statement, recommendation letters)",
      "Apply directly to universities",
      "Apply for scholarships",
      "Apply for student visa after receiving acceptance",
      "Arrange for health insurance",
    ],
    visaRequirements: [
      "Acceptance letter from a New Zealand university",
      "Proof of funds (NZD 15,000 per year for living expenses)",
      "Valid passport",
      "Health insurance",
      "Return air ticket or sufficient funds to purchase one",
      "Visa application form",
      "Medical and police certificates",
    ],
  },
}

export async function generateStaticParams() {
  // Get all country slugs from the countries object
  const slugs = Object.keys(countries)

  // Return an array of objects with the slug parameter for each country
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export default function CountryDetailPage({ params }: { params: { slug: string } }) {
  const country = countries[params.slug]

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <p className="text-gray-600 mb-6">The country you're looking for doesn't exist in our database.</p>
          <Link href="/countries">
            <Button className="bg-blue-600 hover:bg-blue-700">Back to Countries</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Country Header */}
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8">
            <Image
              src={country.image || "/placeholder.svg"}
              alt={`${country.name} landscape`}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6 w-full flex justify-between items-center">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{country.name}</h1>
                  <div className="flex items-center">
                    <Badge className="bg-blue-600 mr-2">
                      <Building className="h-3 w-3 mr-1" />
                      {country.universities}+ Universities
                    </Badge>
                    <Badge className="bg-blue-600">
                      <Globe className="h-3 w-3 mr-1" />
                      {country.languages.join(", ")}
                    </Badge>
                  </div>
                </div>
                <Image
                  src={country.flag || "/placeholder.svg"}
                  alt={`${country.name} flag`}
                  className="h-12 rounded-sm"
                  width={48}
                  height={32}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Country Overview */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-600 mb-6">{country.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                  Education Costs
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Average Tuition:</span>
                    <span className="font-medium">{country.avgTuition}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Living Expenses:</span>
                    <span className="font-medium">{country.livingCost}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
                  Work & Immigration
                </h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Work Rights:</span>
                    <span className="font-medium">{country.workRights}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">PR Pathway:</span>
                    <span className="font-medium">{country.prPathway}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                Popular Courses
              </h3>
              <div className="flex flex-wrap gap-2">
                {country.popularCourses.map((course) => (
                  <Badge key={course} variant="outline" className="bg-gray-50">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs for different sections */}
          <Tabs defaultValue="universities" className="mb-8">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 mb-6">
              <TabsTrigger value="universities">Top Universities</TabsTrigger>
              <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
              <TabsTrigger value="application">Application Process</TabsTrigger>
            </TabsList>

            <TabsContent value="universities">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                  Top Universities in {country.name}
                </h2>

                <div className="space-y-8">
                  {country.topUniversities.map((university) => (
                    <Card
                      key={university.name}
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="relative h-48 md:h-full overflow-hidden">
                          <Image
                            src={university.image || "/placeholder.svg"}
                            alt={university.name}
                            className="w-full h-full object-cover"
                            fill
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                          <div className="absolute top-2 right-2">
                            <Badge className="bg-blue-600">Rank #{university.ranking}</Badge>
                          </div>
                        </div>
                        <div className="md:col-span-2 p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                          <div className="flex items-center text-gray-600 mb-4">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{university.location}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Tuition Fee</h4>
                              <p className="text-gray-900">{university.tuition}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Acceptance Rate</h4>
                              <p className="text-gray-900">{university.acceptanceRate}</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Popular Programs</h4>
                            <div className="flex flex-wrap gap-2">
                              {university.programs.map((program) => (
                                <Badge key={program} variant="outline" className="bg-gray-50">
                                  {program}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Link href={`/universities/${university.name.toLowerCase().replace(/\s+/g, "-")}`}>
                              <Button className="bg-blue-600 hover:bg-blue-700">
                                View Details <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link href="/universities">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      View All Universities <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="scholarships">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 text-blue-600 mr-2" />
                  Scholarships for {country.name}
                </h2>

                <div className="space-y-6">
                  {country.scholarships.map((scholarship) => (
                    <Card key={scholarship.name} className="p-6 hover:shadow-md transition-shadow duration-300">
                      <h3 className="text-lg font-semibold mb-2">{scholarship.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Amount</h4>
                          <p className="text-gray-900">{scholarship.amount}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Eligibility</h4>
                          <p className="text-gray-900">{scholarship.eligibility}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="mt-2 w-full text-blue-600 border-blue-600 hover:bg-blue-50">
                        View Scholarship Details
                      </Button>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link href="/services">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Find More Scholarships <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="application">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <FileText className="h-6 w-6 text-blue-600 mr-2" />
                      Application Process
                    </h2>
                    <ol className="space-y-4">
                      {country.applicationProcess.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-gray-600">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <FileText className="h-6 w-6 text-blue-600 mr-2" />
                      Visa Requirements
                    </h2>
                    <ul className="space-y-4">
                      {country.visaRequirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="bg-blue-100 text-blue-800 rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">
                            <CheckCircle className="h-3 w-3" />
                          </div>
                          <p className="text-gray-600">{requirement}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link href="/guide">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      View Detailed Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-blue-50 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Need Help with Your Application?</h2>
            <p className="text-gray-600 mb-6 text-center">
              Our counselors can guide you through the entire application process for {country.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Check Eligibility <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/guide">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
                  View Application Guide
                </Button>
              </Link>
            </div>
          </div>
          <StudentExperiences country={country.name} />
        </div>
      </div>
    </div>
  )
}
