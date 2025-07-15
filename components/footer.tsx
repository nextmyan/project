import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About AbroadiQ</h3>
            <p className="text-gray-300 mb-4">
              AbroadiQ is your trusted partner for international education consulting, helping students find their
              perfect university match worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-300 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-300 hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/countries" className="text-gray-300 hover:text-white transition-colors">
                  Countries
                </Link>
              </li>
              <li>
                <Link href="/universities" className="text-gray-300 hover:text-white transition-colors">
                  Universities
                </Link>
              </li>
              <li>
                <Link href="/university-finder" className="text-gray-300 hover:text-white transition-colors">
                  University Finder
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guide" className="text-gray-300 hover:text-white transition-colors">
                  Study Abroad Guide
                </Link>
              </li>
              <li>
                <Link href="/language-tests" className="text-gray-300 hover:text-white transition-colors">
                  IELTS/PTE Preparation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Visa Assistance
                </Link>
              </li>
              <li>
                <Link href="/scholarships" className="text-gray-300 hover:text-white transition-colors">
                  Scholarship Guidance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">abroad@nepiq.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">+977 9805465115</span>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Butwal, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AbroadiQ. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
