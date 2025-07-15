"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Menu,
  X,
  ChevronDown,
  Globe,
  Search,
  Calculator,
  GraduationCap,
  Award,
  BarChart,
  Clock,
  FileText,
} from "lucide-react"
import { AuthStatus } from "@/components/auth-status"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Finder", href: "/finder" },
    {
      name: "Explore",
      href: "#",
      dropdown: [
        { name: "Countries", href: "/countries", icon: <Globe className="h-4 w-4" /> },
        { name: "Universities", href: "/universities", icon: <GraduationCap className="h-4 w-4" /> },
        { name: "Compare", href: "/countries/compare", icon: <Search className="h-4 w-4" /> },
        { name: "Scholarships", href: "/scholarships", icon: <Award className="h-4 w-4" /> },
      ],
    },
    {
      name: "Tools",
      href: "#",
      dropdown: [
        { name: "Budget Calculator", href: "/tools/budget-calculator", icon: <Calculator className="h-4 w-4" /> },
        { name: "Score Estimator", href: "/tools/score-estimator", icon: <BarChart className="h-4 w-4" /> },
        { name: "Intake Tracker", href: "/tools/intake-tracker", icon: <Clock className="h-4 w-4" /> },
        { name: "Docs Assistant", href: "/tools/docs-assistant", icon: <FileText className="h-4 w-4" /> },
      ],
    },
    { name: "Forum", href: "/forum" },
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-gray-900">AbroadiQ</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={closeDropdown}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.icon}
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                      pathname === item.href ? "text-blue-600 font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Auth Status and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <AuthStatus />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {activeDropdown === item.name && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
                          >
                            {dropdownItem.icon}
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200 ${
                      pathname === item.href ? "text-blue-600 bg-blue-50 font-semibold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop for dropdowns */}
      {activeDropdown && <div className="fixed inset-0 z-40" onClick={closeDropdown} />}
    </nav>
  )
}
