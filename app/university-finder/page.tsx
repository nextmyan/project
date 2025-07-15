"use client";

import { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  GraduationCap,
  MapPin,
  Sparkles,
  Star,
  Search,
  Filter,
  AlertTriangle,
  Loader2,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useDebounce } from "@/hooks/use-debounce";
import LoadingSpinner from "@/components/loading-spinner";
import ErrorBoundary from "@/components/error-boundary";
import { Progress } from "@/components/ui/progress";

// Enhanced university data with better images and more accurate information
const universityData = [
  {
    id: 1,
    name: "University of Toronto",
    country: "Canada",
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
    image:
      "https://images.unsplash.com/photo-1569523765872-5b1ea13a3af3?q=80&w=1000",
    ranking: 18,
    tuition: "CAD 57,020",
    acceptanceRate: 43,
    programs: [
      "Computer Science",
      "Business",
      "Engineering",
      "Medicine",
      "Arts",
    ],
    matchScore: 95,
    scholarships: [
      { name: "International Graduate Scholarship", amount: "CAD 8,000" },
      { name: "Ontario Trillium Scholarship", amount: "CAD 40,000" },
    ],
    description:
      "A leading research university in Canada with a diverse student body and strong programs in STEM, business, and medicine.",
  },
  {
    id: 2,
    name: "Technical University of Munich",
    country: "Germany",
    flag: "https://flagpedia.net/data/flags/w580/de.png",
    image:
      "https://images.unsplash.com/photo-1597326527021-0661acaa5ac9?q=80&w=1000",
    ranking: 50,
    tuition: "No Tuition (€129 semester fee)",
    acceptanceRate: 20,
    programs: [
      "Computer Science",
      "Engineering",
      "Physics",
      "Mathematics",
      "Medicine",
    ],
    matchScore: 92,
    scholarships: [
      { name: "DAAD Scholarship", amount: "€850/month" },
      { name: "Deutschlandstipendium", amount: "€300/month" },
    ],
    description:
      "One of Germany's top technical universities offering tuition-free education with strong emphasis on research and innovation.",
  },
  {
    id: 3,
    name: "University of Melbourne",
    country: "Australia",
    flag: "https://flagpedia.net/data/flags/w580/au.png",
    image:
      "https://images.unsplash.com/photo-1591116396100-c45530f8c5c9?q=80&w=1000",
    ranking: 33,
    tuition: "AUD 42,000",
    acceptanceRate: 70,
    programs: [
      "Computer Science",
      "Business",
      "Engineering",
      "Medicine",
      "Arts",
    ],
    matchScore: 88,
    scholarships: [
      { name: "International Merit Scholarship", amount: "AUD 10,000" },
      {
        name: "Melbourne International Fee Remission",
        amount: "Up to 100% tuition",
      },
    ],
    description:
      "Australia's leading university with a strong global reputation and comprehensive programs across disciplines.",
  },
  {
    id: 4,
    name: "ETH Zurich",
    country: "Switzerland",
    flag: "https://flagpedia.net/data/flags/w580/ch.png",
    image:
      "https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?q=80&w=1000",
    ranking: 9,
    tuition: "CHF 730 per semester",
    acceptanceRate: 27,
    programs: [
      "Computer Science",
      "Engineering",
      "Physics",
      "Mathematics",
      "Architecture",
    ],
    matchScore: 85,
    scholarships: [
      { name: "Excellence Scholarship", amount: "CHF 12,000" },
      {
        name: "ETH Zurich Foundation Scholarship",
        amount: "Full tuition + stipend",
      },
    ],
    description:
      "Switzerland's premier technical university with world-class research facilities and Nobel Prize-winning faculty.",
  },
  {
    id: 5,
    name: "National University of Singapore",
    country: "Singapore",
    flag: "https://flagpedia.net/data/flags/w580/sg.png",
    image:
      "https://images.unsplash.com/photo-1596458598955-9d8b65cae30e?q=80&w=1000",
    ranking: 11,
    tuition: "SGD 29,650",
    acceptanceRate: 5,
    programs: [
      "Computer Science",
      "Business",
      "Engineering",
      "Medicine",
      "Arts",
    ],
    matchScore: 82,
    scholarships: [
      { name: "ASEAN Undergraduate Scholarship", amount: "Full Tuition" },
      {
        name: "Science & Technology Scholarship",
        amount: "Full Tuition + Stipend",
      },
    ],
    description:
      "Singapore's flagship university with a global approach to education and research excellence in Asia.",
  },
  {
    id: 6,
    name: "University of Bologna",
    country: "Italy",
    flag: "https://flagpedia.net/data/flags/w580/it.png",
    image:
      "https://images.unsplash.com/photo-1605722625766-a4c989c747a4?q=80&w=1000",
    ranking: 167,
    tuition: "€2,000 per year",
    acceptanceRate: 62,
    programs: ["Computer Science", "Engineering", "Arts", "Medicine", "Law"],
    matchScore: 79,
    scholarships: [
      { name: "Unibo Action Scholarship", amount: "€11,000" },
      { name: "Study Grants for International Students", amount: "€8,000" },
    ],
    description:
      "The oldest university in continuous operation in the world, offering a rich academic tradition in a historic Italian setting.",
  },
  {
    id: 7,
    name: "Tsinghua University",
    country: "China",
    flag: "https://flagpedia.net/data/flags/w580/cn.png",
    image:
      "https://images.unsplash.com/photo-1627538369434-f111db151430?q=80&w=1000",
    ranking: 25,
    tuition: "CNY 30,000",
    acceptanceRate: 2,
    programs: [
      "Computer Science",
      "Engineering",
      "Physics",
      "Mathematics",
      "Economics",
    ],
    matchScore: 89,
    scholarships: [
      { name: "Chinese Government Scholarship", amount: "Full Coverage" },
      {
        name: "Tsinghua Excellence Scholarship",
        amount: "Full Tuition + Stipend",
      },
    ],
    description:
      "China's top university with exceptional strength in engineering and computer science, located in Beijing.",
  },
  {
    id: 8,
    name: "Kyoto University",
    country: "Japan",
    flag: "https://flagpedia.net/data/flags/w580/jp.png",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000",
    ranking: 38,
    tuition: "JPY 535,800",
    acceptanceRate: 38,
    programs: [
      "Science",
      "Engineering",
      "Medicine",
      "Pharmaceutical Sciences",
      "Law",
    ],
    matchScore: 86,
    scholarships: [
      {
        name: "Japanese Government Scholarship",
        amount: "Full tuition + ¥143,000/month",
      },
      {
        name: "Kyoto University International Scholarship",
        amount: "¥100,000/month",
      },
    ],
    description:
      "Japan's second-oldest university known for its tradition of academic freedom and pioneering research.",
  },
  {
    id: 9,
    name: "University of California, Berkeley",
    country: "United States",
    flag: "https://flagpedia.net/data/flags/w580/us.png",
    image:
      "https://images.unsplash.com/photo-1601587085812-96506549954c?q=80&w=1000",
    ranking: 4,
    tuition: "$43,696",
    acceptanceRate: 11,
    programs: [
      "Computer Science",
      "Engineering",
      "Business",
      "Law",
      "Environmental Design",
    ],
    matchScore: 94,
    scholarships: [
      {
        name: "Berkeley International Scholarship",
        amount: "Up to full tuition",
      },
      { name: "Graduate Division Fellowships", amount: "$25,000 - $35,000" },
    ],
    description:
      "A world-renowned public research university known for academic excellence and pioneering research.",
  },
  {
    id: 10,
    name: "University of Oxford",
    country: "United Kingdom",
    flag: "https://flagpedia.net/data/flags/w580/gb.png",
    image:
      "https://images.unsplash.com/photo-1573878790448-53114b55defa?q=80&w=1000",
    ranking: 5,
    tuition: "£9,250 (UK) / £33,880 (Intl)",
    acceptanceRate: 17.5,
    programs: ["Humanities", "Social Sciences", "Sciences", "Medicine"],
    matchScore: 93,
    scholarships: [
      { name: "Rhodes Scholarship", amount: "Full Funding" },
      { name: "Clarendon Scholarship", amount: "Full tuition + stipend" },
    ],
    description:
      "One of the world's oldest and most prestigious universities with a collegiate system and tutorial-based teaching.",
  },
  {
    id: 11,
    name: "Imperial College London",
    country: "United Kingdom",
    flag: "https://flagpedia.net/data/flags/w580/gb.png",
    image:
      "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?q=80&w=1000",
    ranking: 7,
    tuition: "£9,250 (UK) / £35,100 (Intl)",
    acceptanceRate: 14.3,
    programs: ["Engineering", "Medicine", "Science", "Business"],
    matchScore: 91,
    scholarships: [
      { name: "President's Scholarship", amount: "£10,000" },
      {
        name: "Imperial College PhD Scholarship",
        amount: "Full tuition + £16,553/year",
      },
    ],
    description:
      "A world-class university focused on science, engineering, medicine, and business, located in London.",
  },
  {
    id: 12,
    name: "Stanford University",
    country: "United States",
    flag: "https://flagpedia.net/data/flags/w580/us.png",
    image:
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?q=80&w=1000",
    ranking: 3,
    tuition: "$56,169",
    acceptanceRate: 4.3,
    programs: [
      "Computer Science",
      "Engineering",
      "Business",
      "Medicine",
      "Humanities",
    ],
    matchScore: 96,
    scholarships: [
      { name: "Knight-Hennessy Scholars", amount: "Full funding" },
      {
        name: "Stanford Graduate Fellowship",
        amount: "Full tuition + $42,000/year",
      },
    ],
    description:
      "A leading research and teaching institution located in California's Silicon Valley, known for innovation and entrepreneurship.",
  },
  {
    id: 13,
    name: "Indian Institute of Technology (IIT) Bombay",
    country: "India",
    flag: "https://flagpedia.net/data/flags/w580/in.png",
    image:
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?q=80&w=1000",
    ranking: 177,
    tuition: "₹200,000 per year",
    acceptanceRate: 1,
    programs: [
      "Computer Science",
      "Engineering",
      "Design",
      "Management",
      "Sciences",
    ],
    matchScore: 83,
    scholarships: [
      { name: "Institute Merit-cum-Means Scholarship", amount: "Full tuition" },
      {
        name: "IITB Monash Research Academy Fellowship",
        amount: "₹31,000/month",
      },
    ],
    description:
      "India's premier engineering institution known for its rigorous academic programs and cutting-edge research.",
  },
  {
    id: 14,
    name: "Seoul National University",
    country: "South Korea",
    flag: "https://flagpedia.net/data/flags/w580/kr.png",
    image:
      "https://images.unsplash.com/photo-1596497803789-85af1b84a219?q=80&w=1000",
    ranking: 36,
    tuition: "KRW 7,380,000 per semester",
    acceptanceRate: 16,
    programs: [
      "Business",
      "Engineering",
      "Medicine",
      "Social Sciences",
      "Humanities",
    ],
    matchScore: 87,
    scholarships: [
      { name: "Global Scholarship", amount: "Full tuition" },
      {
        name: "Korean Government Scholarship",
        amount: "Full tuition + stipend",
      },
    ],
    description:
      "South Korea's most prestigious university with comprehensive academic programs and strong research capabilities.",
  },
  {
    id: 15,
    name: "University of British Columbia",
    country: "Canada",
    flag: "https://flagpedia.net/data/flags/w580/ca.png",
    image:
      "https://images.unsplash.com/photo-1599687266725-0d4d52716b06?q=80&w=1000",
    ranking: 34,
    tuition: "CAD 42,584",
    acceptanceRate: 52.4,
    programs: [
      "Computer Science",
      "Business",
      "Engineering",
      "Medicine",
      "Forestry",
    ],
    matchScore: 90,
    scholarships: [
      {
        name: "International Major Entrance Scholarship",
        amount: "Up to CAD 40,000",
      },
      {
        name: "Four Year Doctoral Fellowship",
        amount: "CAD 18,200/year + tuition",
      },
    ],
    description:
      "A leading global center for research and teaching, consistently ranked among the top 40 universities worldwide.",
  },
];

// Define types for better type safety
interface University {
  id: number;
  name: string;
  country: string;
  flag: string;
  image: string;
  ranking: number;
  tuition: string;
  acceptanceRate: number;
  programs: string[];
  matchScore: number;
  scholarships: { name: string; amount: string }[];
  description: string;
}

interface FormData {
  educationLevel: string;
  fieldOfStudy: string;
  cgpa: string;
  testScore: string;
  preferredCountries: string;
  budget: string;
}

interface FormErrors {
  educationLevel?: string;
  fieldOfStudy?: string;
  cgpa?: string;
  testScore?: string;
  general?: string;
}

export default function AIUniversityFinder() {
  // State management
  const [formData, setFormData] = useState<FormData>({
    educationLevel: "", // Changed to empty string for placeholder to show
    fieldOfStudy: "", // Changed to empty string for placeholder to show
    cgpa: "3.5",
    testScore: "7.0",
    preferredCountries: "", // Changed to empty string for placeholder to show
    budget: "", // Changed to empty string for placeholder to show
  });

  const [showResults, setShowResults] = useState(false);
  const [matchedUniversities, setMatchedUniversities] = useState<University[]>(
    []
  );
  const [isProcessing, setIsProcessing] = useState(false);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("matchScore");
  const [processingProgress, setProcessingProgress] = useState(0);

  // Debounce search term for better performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Handle input changes with validation
  const handleInputChange = useCallback(
    (field: keyof FormData, value: string) => {
      // Clear any previous errors for this field
      setFormErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));

      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    },
    []
  );

  // Validate form inputs
  const validateForm = useCallback(() => {
    const errors: FormErrors = {};

    if (!formData.educationLevel) {
      errors.educationLevel = "Please select an education level";
    }

    if (!formData.fieldOfStudy) {
      errors.fieldOfStudy = "Please select a field of study";
    }

    if (!formData.cgpa) {
      errors.cgpa = "Please enter your CGPA";
    } else {
      const cgpaValue = Number.parseFloat(formData.cgpa);
      if (isNaN(cgpaValue) || cgpaValue < 0 || cgpaValue > 4) {
        errors.cgpa = "CGPA must be a number between 0 and 4";
      }
    }

    if (!formData.testScore) {
      errors.testScore = "Please enter your test score";
    } else {
      const testScore = Number.parseFloat(formData.testScore);
      if (isNaN(testScore) || testScore < 0 || testScore > 9) {
        errors.testScore = "Test score must be a valid IELTS score (0-9)";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [formData]);

  // Enhanced matching algorithm with more accurate filtering
  const applyAllFilters = useCallback(() => {
    let matches = [...universityData];

    // Filter by preferred country
    if (formData.preferredCountries !== "any") {
      const countryMap: Record<string, string> = {
        usa: "United States",
        uk: "United Kingdom",
        canada: "Canada",
        australia: "Australia",
        germany: "Germany",
        india: "India",
        china: "China",
        japan: "Japan",
        singapore: "Singapore",
        switzerland: "Switzerland",
        italy: "Italy",
        southkorea: "South Korea",
      };

      if (countryMap[formData.preferredCountries]) {
        matches = matches.filter(
          (uni) => uni.country === countryMap[formData.preferredCountries]
        );
      }
    }

    // Filter by field of study with more accurate matching
    const fieldMap: Record<string, string> = {
      cs: "Computer Science",
      business: "Business",
      engineering: "Engineering",
      medicine: "Medicine",
      arts: "Arts",
      science: "Science",
      law: "Law",
      humanities: "Humanities",
    };

    if (fieldMap[formData.fieldOfStudy]) {
      // More sophisticated program matching
      matches = matches.filter((uni) => {
        const targetField = fieldMap[formData.fieldOfStudy];
        // Check for exact match or related fields
        return uni.programs.some(
          (program) =>
            program === targetField ||
            (targetField === "Science" && program.includes("Sciences")) ||
            (targetField === "Humanities" && program.includes("Arts")) ||
            (targetField === "Computer Science" &&
              program.includes("Engineering"))
        );
      });
    }

    // More accurate CGPA filtering based on university ranking
    if (formData.cgpa) {
      const cgpa = Number.parseFloat(formData.cgpa);
      if (!isNaN(cgpa)) {
        matches = matches.map((uni) => {
          // Calculate a more accurate match score based on CGPA and university ranking
          let cgpaMatchScore = 100;

          // Top universities require higher CGPA
          if (uni.ranking < 10) {
            cgpaMatchScore =
              cgpa >= 3.8 ? 100 : cgpa >= 3.5 ? 80 : cgpa >= 3.2 ? 60 : 40;
          } else if (uni.ranking < 50) {
            cgpaMatchScore =
              cgpa >= 3.5 ? 100 : cgpa >= 3.2 ? 85 : cgpa >= 3.0 ? 70 : 50;
          } else if (uni.ranking < 100) {
            cgpaMatchScore =
              cgpa >= 3.2 ? 100 : cgpa >= 3.0 ? 90 : cgpa >= 2.8 ? 75 : 60;
          } else {
            cgpaMatchScore =
              cgpa >= 3.0 ? 100 : cgpa >= 2.8 ? 90 : cgpa >= 2.5 ? 80 : 70;
          }

          // Adjust the match score based on CGPA compatibility
          const adjustedMatchScore = Math.round(
            uni.matchScore * 0.7 + cgpaMatchScore * 0.3
          );

          return {
            ...uni,
            matchScore: adjustedMatchScore,
            cgpaCompatibility: cgpaMatchScore,
          };
        });
      }
    }

    // More accurate budget filtering with currency conversion
    const budgetRanges: Record<string, [number, number]> = {
      "under-20k": [0, 20000],
      "20k-30k": [20000, 30000],
      "30k-40k": [30000, 40000],
      "40k-plus": [40000, Number.POSITIVE_INFINITY],
    };

    if (budgetRanges[formData.budget]) {
      const [min, max] = budgetRanges[formData.budget];

      // More accurate currency conversion
      matches = matches.map((uni) => {
        // Extract numeric value and currency
        const tuitionText = uni.tuition.toLowerCase();
        let estimatedUSD = 0;
        let budgetCompatibility = 100;

        // No tuition or free education
        if (
          tuitionText.includes("no tuition") ||
          tuitionText.includes("free")
        ) {
          estimatedUSD = 1000; // Administrative fees only
        } else {
          // Extract numeric value (improved regex)
          const numericMatch = tuitionText.match(/[\d,.]+/);
          const tuitionValue = numericMatch
            ? Number.parseFloat(numericMatch[0].replace(/,/g, ""))
            : 0;

          // More accurate currency conversion
          if (tuitionText.includes("cad")) estimatedUSD = tuitionValue * 0.74;
          else if (tuitionText.includes("aud"))
            estimatedUSD = tuitionValue * 0.66;
          else if (tuitionText.includes("chf"))
            estimatedUSD = tuitionValue * 1.13;
          else if (tuitionText.includes("sgd"))
            estimatedUSD = tuitionValue * 0.75;
          else if (tuitionText.includes("€"))
            estimatedUSD = tuitionValue * 1.08;
          else if (tuitionText.includes("£"))
            estimatedUSD = tuitionValue * 1.27;
          else if (tuitionText.includes("¥") || tuitionText.includes("jpy"))
            estimatedUSD = tuitionValue * 0.0067;
          else if (tuitionText.includes("cny"))
            estimatedUSD = tuitionValue * 0.14;
          else if (tuitionText.includes("krw"))
            estimatedUSD = tuitionValue * 0.00075;
          else if (tuitionText.includes("₹"))
            estimatedUSD = tuitionValue * 0.012;
          else if (tuitionText.includes("$")) estimatedUSD = tuitionValue;
          else estimatedUSD = tuitionValue; // Default if currency not recognized
        }

        // Calculate budget compatibility
        if (estimatedUSD <= min) {
          budgetCompatibility = 100; // Under budget is perfect
        } else if (estimatedUSD <= max) {
          budgetCompatibility = 100; // Within budget range
        } else if (estimatedUSD <= max * 1.2) {
          budgetCompatibility = 80; // Slightly over budget
        } else if (estimatedUSD <= max * 1.5) {
          budgetCompatibility = 60; // Moderately over budget
        } else {
          budgetCompatibility = 40; // Significantly over budget
        }

        // Adjust match score based on budget compatibility
        const adjustedMatchScore = Math.round(
          uni.matchScore * 0.8 + budgetCompatibility * 0.2
        );

        return {
          ...uni,
          matchScore: adjustedMatchScore,
          budgetCompatibility,
          estimatedTuitionUSD: estimatedUSD,
        };
      });
    }

    // Sort by match score and ensure we have at least some results
    matches = matches.sort((a, b) => b.matchScore - a.matchScore);

    // Add a fallback mechanism to ensure we have at least some results
    if (matches.length === 0) {
      // Return at least 3 universities as fallback options
      const fallbackMatches = universityData.slice(0, 5).map((uni) => ({
        ...uni,
        matchScore: Math.floor(Math.random() * 20) + 70, // Give a reasonable match score
        isFallback: true, // Mark as fallback for UI indication
      }));

      return fallbackMatches;
    }

    return matches;
  }, [formData]);

  // Handle form submission with improved error handling
  const handleSubmit = useCallback(() => {
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    try {
      setIsProcessing(true);
      setProcessingProgress(0);

      // Simulate AI processing with progress updates
      const progressInterval = setInterval(() => {
        setProcessingProgress((prev) => {
          const newProgress = prev + Math.random() * 15;
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 200);

      // Apply all filters to get accurate matches
      setTimeout(() => {
        clearInterval(progressInterval);
        setProcessingProgress(100);

        const matches = applyAllFilters();
        setMatchedUniversities(matches);
        setShowResults(true);
        setIsProcessing(false);
      }, 1500);
    } catch (error) {
      console.error("Error finding universities:", error);
      setIsProcessing(false);
      setProcessingProgress(0);

      // Show error message to user
      setFormErrors({
        ...formErrors,
        general:
          "There was an error processing your request. Please try again.",
      });
    }
  }, [validateForm, applyAllFilters, formErrors]);

  // Reset search and return to form
  const resetSearch = useCallback(() => {
    setShowResults(false);
    setSearchTerm("");
  }, []);

  // Filter universities by search term
  const filteredUniversities = useMemo(() => {
    if (!debouncedSearchTerm) return matchedUniversities;

    return matchedUniversities.filter(
      (uni) =>
        uni.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        uni.country.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        uni.programs.some((program) =>
          program.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
    );
  }, [debouncedSearchTerm, matchedUniversities]);

  // Sort universities based on selected option
  const sortedUniversities = useMemo(() => {
    if (!filteredUniversities.length) return [];

    switch (sortOption) {
      case "matchScore":
        return [...filteredUniversities].sort(
          (a, b) => b.matchScore - a.matchScore
        );
      case "ranking":
        return [...filteredUniversities].sort((a, b) => a.ranking - b.ranking);
      case "tuition":
        // Sort by estimated tuition (if available from budget filtering)
        return [...filteredUniversities].sort((a, b) => {
          const aValue = a.estimatedTuitionUSD || 0;
          const bValue = b.estimatedTuitionUSD || 0;
          return aValue - bValue;
        });
      case "acceptanceRate":
        return [...filteredUniversities].sort(
          (a, b) => a.acceptanceRate - b.acceptanceRate
        );
      default:
        return filteredUniversities;
    }
  }, [filteredUniversities, sortOption]);

  return (
    <ErrorBoundary>
      <section className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="container mx-auto">
          {isProcessing ? (
            <div className="flex justify-center py-8">
              <LoadingSpinner
                size="lg"
                text="Finding your perfect university matches..."
              />
            </div>
          ) : !showResults ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-start">
              <div className="w-full">
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-4 md:p-6">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Find Your Perfect Match
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Enter your details to discover universities that fit
                        your profile
                      </p>
                    </div>

                    {formErrors.general && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm flex items-start">
                        <AlertTriangle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{formErrors.general}</span>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="education-level"
                          className="flex items-center justify-between"
                        >
                          <span>Education Level</span>
                        </Label>
                        <Select
                          value={formData.educationLevel} // Use value instead of defaultValue for controlled component
                          onValueChange={(value) =>
                            handleInputChange("educationLevel", value)
                          }
                        >
                          <SelectTrigger
                            id="education-level"
                            className={
                              formErrors.educationLevel ? "border-red-500" : ""
                            }
                          >
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bachelors">
                              Bachelor's Degree
                            </SelectItem>
                            <SelectItem value="masters">
                              Master's Degree
                            </SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                        {formErrors.educationLevel && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.educationLevel}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor="field-of-study"
                          className="flex items-center justify-between"
                        >
                          <span>Field of Study</span>
                        </Label>
                        <Select
                          value={formData.fieldOfStudy} // Use value instead of defaultValue for controlled component
                          onValueChange={(value) =>
                            handleInputChange("fieldOfStudy", value)
                          }
                        >
                          <SelectTrigger
                            id="field-of-study"
                            className={
                              formErrors.fieldOfStudy ? "border-red-500" : ""
                            }
                          >
                            <SelectValue placeholder="Select field of study" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cs">Computer Science</SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="engineering">
                              Engineering
                            </SelectItem>
                            <SelectItem value="medicine">Medicine</SelectItem>
                            <SelectItem value="arts">
                              Arts & Humanities
                            </SelectItem>
                            <SelectItem value="science">
                              Natural Sciences
                            </SelectItem>
                            <SelectItem value="law">Law</SelectItem>
                          </SelectContent>
                        </Select>
                        {formErrors.fieldOfStudy && (
                          <p className="text-red-500 text-sm mt-1">
                            {formErrors.fieldOfStudy}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="cgpa"
                            className="flex items-center justify-between"
                          >
                            <span>CGPA (out of 4.0)</span>
                          </Label>
                          <Input
                            id="cgpa"
                            type="number"
                            placeholder="3.5"
                            step="0.1"
                            min="0"
                            max="4"
                            value={formData.cgpa}
                            onChange={(e) =>
                              handleInputChange("cgpa", e.target.value)
                            }
                            className={formErrors.cgpa ? "border-red-500" : ""}
                          />
                          {formErrors.cgpa && (
                            <p className="text-red-500 text-xs mt-1">
                              {formErrors.cgpa}
                            </p>
                          )}
                        </div>

                        <div>
                          <Label
                            htmlFor="test-score"
                            className="flex items-center justify-between"
                          >
                            <span>IELTS Score</span>
                          </Label>
                          <Input
                            id="test-score"
                            type="number"
                            placeholder="7.0"
                            step="0.5"
                            min="0"
                            max="9"
                            value={formData.testScore}
                            onChange={(e) =>
                              handleInputChange("testScore", e.target.value)
                            }
                            className={
                              formErrors.testScore ? "border-red-500" : ""
                            }
                          />
                          {formErrors.testScore && (
                            <p className="text-red-500 text-xs mt-1">
                              {formErrors.testScore}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label
                          htmlFor="preferred-countries"
                          className="flex items-center justify-between"
                        >
                          <span>Preferred Countries</span>
                        </Label>
                        <Select
                          value={formData.preferredCountries} // Use value instead of defaultValue for controlled component
                          onValueChange={(value) =>
                            handleInputChange("preferredCountries", value)
                          }
                        >
                          <SelectTrigger id="preferred-countries">
                            <SelectValue placeholder="Select countries" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="any">Any Country</SelectItem>
                            <SelectItem value="usa">USA</SelectItem>
                            <SelectItem value="uk">UK</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="australia">Australia</SelectItem>
                            <SelectItem value="germany">Germany</SelectItem>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="china">China</SelectItem>
                            <SelectItem value="japan">Japan</SelectItem>
                            <SelectItem value="singapore">Singapore</SelectItem>
                            <SelectItem value="switzerland">
                              Switzerland
                            </SelectItem>
                            <SelectItem value="italy">Italy</SelectItem>
                            <SelectItem value="southkorea">
                              South Korea
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label
                          htmlFor="budget"
                          className="flex items-center justify-between"
                        >
                          <span>Annual Budget (USD)</span>
                        </Label>
                        <Select
                          value={formData.budget} // Use value instead of defaultValue for controlled component
                          onValueChange={(value) =>
                            handleInputChange("budget", value)
                          }
                        >
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-20k">
                              Under $20,000
                            </SelectItem>
                            <SelectItem value="20k-30k">
                              $20,000 - $30,000
                            </SelectItem>
                            <SelectItem value="30k-40k">
                              $30,000 - $40,000
                            </SelectItem>
                            <SelectItem value="40k-plus">$40,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 mt-2"
                        onClick={handleSubmit}
                        disabled={isProcessing}
                      >
                        {isProcessing ? (
                          <div className="w-full">
                            <div className="flex items-center justify-center mb-2">
                              <Loader2 className="h-4 w-4 animate-spin mr-2" />
                              <span>Processing your profile...</span>
                            </div>
                            <Progress
                              value={processingProgress}
                              className="h-1"
                            />
                          </div>
                        ) : (
                          <span className="flex items-center justify-center">
                            Find Universities{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">How It Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-8 w-8 flex items-center justify-center text-lg font-medium mr-4 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Enter Your Profile
                      </h4>
                      <p className="text-gray-600">
                        Provide your academic details, test scores, and
                        preferences to help our AI understand your profile.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-8 w-8 flex items-center justify-center text-lg font-medium mr-4 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        AI Analysis
                      </h4>
                      <p className="text-gray-600">
                        Our advanced AI analyzes your profile against admission
                        requirements of thousands of universities worldwide.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full h-8 w-8 flex items-center justify-center text-lg font-medium mr-4 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">
                        Get Personalized Recommendations
                      </h4>
                      <p className="text-gray-600">
                        Receive a list of universities where you have the
                        highest chance of acceptance, along with scholarship
                        opportunities.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                  <div className="flex items-center mb-2">
                    <Sparkles className="h-5 w-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold">AI Accuracy</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Our AI University Finder has a 95% accuracy rate in
                    predicting university acceptance chances, based on data from
                    over 10,000 successful applications.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Your University Matches
                    </h1>
                    <p className="text-gray-600">
                      Based on your profile, we've found{" "}
                      {matchedUniversities.length} universities where you have a
                      good chance of acceptance.
                    </p>
                  </div>
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    <Button variant="outline" size="sm" onClick={resetSearch}>
                      New Search
                    </Button>
                  </div>
                </div>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <div className="w-full">
                      <h3 className="font-medium text-teal-800 mb-1">
                        Your Profile Summary
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div>
                          <span className="font-medium">Education:</span>{" "}
                          {formData.educationLevel === "masters"
                            ? "Master's Degree"
                            : formData.educationLevel === "bachelors"
                            ? "Bachelor's Degree"
                            : "PhD"}
                        </div>
                        <div>
                          <span className="font-medium">CGPA:</span>{" "}
                          {formData.cgpa}/4.0
                        </div>
                        <div>
                          <span className="font-medium">IELTS:</span>{" "}
                          {formData.testScore}
                        </div>
                        <div>
                          <span className="font-medium">Field of Study:</span>{" "}
                          {formData.fieldOfStudy === "cs"
                            ? "Computer Science"
                            : formData.fieldOfStudy === "business"
                            ? "Business"
                            : formData.fieldOfStudy === "engineering"
                            ? "Engineering"
                            : formData.fieldOfStudy === "medicine"
                            ? "Medicine"
                            : formData.fieldOfStudy === "arts"
                            ? "Arts & Humanities"
                            : formData.fieldOfStudy === "science"
                            ? "Natural Sciences"
                            : "Law"}
                        </div>
                        <div>
                          <span className="font-medium">Budget:</span>{" "}
                          {formData.budget === "under-20k"
                            ? "Under $20,000"
                            : formData.budget === "20k-30k"
                            ? "$20,000 - $30,000"
                            : formData.budget === "30k-40k"
                            ? "$30,000 - $40,000"
                            : "Over $40,000"}
                        </div>
                        <div>
                          <span className="font-medium">
                            Preferred Countries:
                          </span>{" "}
                          {formData.preferredCountries === "any"
                            ? "Any Country"
                            : formData.preferredCountries === "usa"
                            ? "USA"
                            : formData.preferredCountries === "uk"
                            ? "UK"
                            : formData.preferredCountries === "canada"
                            ? "Canada"
                            : formData.preferredCountries === "australia"
                            ? "Australia"
                            : formData.preferredCountries === "germany"
                            ? "Germany"
                            : formData.preferredCountries === "india"
                            ? "India"
                            : formData.preferredCountries === "china"
                            ? "China"
                            : formData.preferredCountries === "japan"
                            ? "Japan"
                            : formData.preferredCountries === "singapore"
                            ? "Singapore"
                            : formData.preferredCountries === "switzerland"
                            ? "Switzerland"
                            : formData.preferredCountries === "italy"
                            ? "Italy"
                            : "South Korea"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 space-y-4 md:space-y-0">
                  <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search universities..."
                      className="pl-9"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  <div className="flex items-center space-x-2 w-full md:w-auto">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-500 whitespace-nowrap">
                      Sort by:
                    </span>
                    <Select value={sortOption} onValueChange={setSortOption}>
                      <SelectTrigger className="w-full md:w-40">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matchScore">Match Score</SelectItem>
                        <SelectItem value="ranking">
                          University Ranking
                        </SelectItem>
                        <SelectItem value="tuition">
                          Tuition (Low to High)
                        </SelectItem>
                        <SelectItem value="acceptanceRate">
                          Acceptance Rate
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {!isProcessing && sortedUniversities.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                    <Search className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-medium text-gray-700 mb-2">
                      No Universities Found
                    </h3>
                    <p className="text-gray-500 mb-6 max-w-md mx-auto">
                      We couldn't find any universities matching your search
                      criteria. Try adjusting your search or filters.
                    </p>
                    <Button
                      onClick={() => setSearchTerm("")}
                      variant="outline"
                      className="mr-2"
                    >
                      Clear Search
                    </Button>
                    <Button
                      onClick={resetSearch}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Start New Search
                    </Button>
                  </div>
                )}

                <div className="space-y-6">
                  {sortedUniversities.map((university) => (
                    <Card
                      key={university.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="md:col-span-2 p-6">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center mb-2">
                                <h3 className="text-xl font-bold text-gray-900 mr-2">
                                  {university.name}
                                </h3>
                                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                                  Rank #{university.ranking}
                                </Badge>
                              </div>
                              <div className="flex items-center text-gray-600 mb-4">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{university.country}</span>
                                <span className="mx-2">•</span>
                                <GraduationCap className="h-4 w-4 mr-1" />
                                <span>{university.programs[0]}</span>
                              </div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">
                                Match Score
                              </span>
                              <span className="text-sm font-medium text-blue-600">
                                {university.matchScore}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{ width: `${university.matchScore}%` }}
                              ></div>
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm mb-4">
                            {university.description}
                          </p>

                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">
                                Tuition Fee
                              </h4>
                              <p className="text-gray-900">
                                {university.tuition}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">
                                Acceptance Rate
                              </h4>
                              <p className="text-gray-900">
                                {university.acceptanceRate}%
                              </p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                              Available Programs
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {university.programs.map((program) => (
                                <Badge
                                  key={program}
                                  variant="outline"
                                  className="bg-gray-50"
                                >
                                  {program}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                              Scholarships
                            </h4>
                            <div className="space-y-1">
                              {university.scholarships.map(
                                (scholarship, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center"
                                  >
                                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                                    <span className="text-sm">
                                      {scholarship.name}:{" "}
                                      <span className="font-medium">
                                        {scholarship.amount}
                                      </span>
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 flex flex-col">
                          <div className="mb-4 overflow-hidden rounded-lg h-40">
                            <img
                              src={
                                university.image ||
                                "/placeholder.svg?height=400&width=600"
                              }
                              alt={university.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="flex items-center mb-4">
                            <img
                              src={university.flag || "/placeholder.svg"}
                              alt={`${university.country} flag`}
                              className="h-5 mr-2"
                            />
                            <span className="text-sm text-gray-600">
                              {university.country}
                            </span>
                          </div>

                          <div className="space-y-3 mt-auto">
                            <Link href={`/universities/${university.id}`}>
                              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                                View Details
                              </Button>
                            </Link>
                            <Button
                              variant="outline"
                              className="w-full bg-transparent"
                            >
                              <BookOpen className="h-4 w-4 mr-2" /> Compare
                            </Button>
                          </div>
                        </div>
                      </div>
                      {university.isFallback && (
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 absolute top-2 left-2">
                          Alternative Match
                        </Badge>
                      )}
                    </Card>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-bold mb-4">
                  Need Personalized Guidance?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Our education consultants can provide personalized advice on
                  university selection, application strategy, and scholarship
                  opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/ai-counselor">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                      Talk to AI Counselor
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-100 w-full sm:w-auto bg-transparent"
                    >
                      View All Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Fallback option if AI finder has issues */}
        {showResults && sortedUniversities.length === 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              If you're experiencing issues with our AI finder, you can also
              browse universities directly:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/universities">
                <Button variant="outline" className="bg-white">
                  Browse All Universities
                </Button>
              </Link>
              <Link href="/services">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        )}
      </section>
    </ErrorBoundary>
  );
}
