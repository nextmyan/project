"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email?: string
  phone?: string
  verified: boolean
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (identifier: string, password: string) => Promise<{ success: boolean; message: string }>
  register: (
    name: string,
    identifier: string,
    password: string,
    isEmail: boolean,
  ) => Promise<{ success: boolean; message: string }>
  logout: () => void
  verifyOTP: (otp: string) => Promise<{ success: boolean; message: string }>
  sendOTP: (identifier: string) => Promise<{ success: boolean; message: string }>
  resetPassword: (
    identifier: string,
    newPassword: string,
    otp: string,
  ) => Promise<{ success: boolean; message: string }>
  pendingVerification: { identifier: string; isEmail: boolean } | null
  setPendingVerification: (value: { identifier: string; isEmail: boolean } | null) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [pendingVerification, setPendingVerification] = useState<{ identifier: string; isEmail: boolean } | null>(null)
  const router = useRouter()

  // Simulate loading user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  // Simulate login
  const login = async (identifier: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, any non-empty password works
      if (!identifier || !password) {
        return { success: false, message: "Please provide all required information" }
      }

      // Check if user exists in our "database" (localStorage)
      const isEmail = identifier.includes("@")
      const allUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const foundUser = allUsers.find(
        (u: any) => (isEmail ? u.email === identifier : u.phone === identifier) && u.password === password,
      )

      if (!foundUser) {
        return { success: false, message: "Invalid credentials" }
      }

      if (!foundUser.verified) {
        setPendingVerification({ identifier, isEmail })
        return { success: false, message: "Account not verified. Please verify your account." }
      }

      // Create user object without password
      const { password: _, ...userWithoutPassword } = foundUser
      setUser(userWithoutPassword)
      localStorage.setItem("user", JSON.stringify(userWithoutPassword))

      return { success: true, message: "Login successful" }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, message: "An error occurred during login" }
    } finally {
      setIsLoading(false)
    }
  }

  // Simulate registration
  const register = async (name: string, identifier: string, password: string, isEmail: boolean) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (!name || !identifier || !password) {
        return { success: false, message: "Please provide all required information" }
      }

      // Validate email format if using email
      if (isEmail && !/\S+@\S+\.\S+/.test(identifier)) {
        return { success: false, message: "Please enter a valid email address" }
      }

      // Validate phone format if using phone
      if (!isEmail && !/^\d{10}$/.test(identifier)) {
        return { success: false, message: "Please enter a valid 10-digit phone number" }
      }

      // Check if user already exists
      const allUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const userExists = allUsers.some((u: any) => (isEmail ? u.email === identifier : u.phone === identifier))

      if (userExists) {
        return {
          success: false,
          message: `This ${isEmail ? "email" : "phone number"} is already registered`,
        }
      }

      // Create new user
      const newUser = {
        id: `user_${Date.now()}`,
        name,
        ...(isEmail ? { email: identifier } : { phone: identifier }),
        password,
        verified: false,
      }

      // Save to our "database"
      allUsers.push(newUser)
      localStorage.setItem("users", JSON.stringify(allUsers))

      // Set pending verification
      setPendingVerification({ identifier, isEmail })

      return { success: true, message: "Registration successful. Please verify your account." }
    } catch (error) {
      console.error("Registration error:", error)
      return { success: false, message: "An error occurred during registration" }
    } finally {
      setIsLoading(false)
    }
  }

  // Simulate OTP verification
  const verifyOTP = async (otp: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (!pendingVerification) {
        return { success: false, message: "No verification pending" }
      }

      if (otp !== "123456") {
        return { success: false, message: "Invalid verification code" }
      }

      // Update user verification status
      const { identifier, isEmail } = pendingVerification
      const allUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const updatedUsers = allUsers.map((u: any) => {
        if (isEmail ? u.email === identifier : u.phone === identifier) {
          return { ...u, verified: true }
        }
        return u
      })

      localStorage.setItem("users", JSON.stringify(updatedUsers))

      // Find the verified user
      const verifiedUser = updatedUsers.find((u: any) => (isEmail ? u.email === identifier : u.phone === identifier))

      if (verifiedUser) {
        // Create user object without password
        const { password: _, ...userWithoutPassword } = verifiedUser
        setUser(userWithoutPassword)
        localStorage.setItem("user", JSON.stringify(userWithoutPassword))
      }

      setPendingVerification(null)
      return { success: true, message: "Verification successful" }
    } catch (error) {
      console.error("Verification error:", error)
      return { success: false, message: "An error occurred during verification" }
    } finally {
      setIsLoading(false)
    }
  }

  // Simulate sending OTP
  const sendOTP = async (identifier: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const isEmail = identifier.includes("@")

      // Check if user exists
      const allUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const userExists = allUsers.some((u: any) => (isEmail ? u.email === identifier : u.phone === identifier))

      if (!userExists) {
        return {
          success: false,
          message: `No account found with this ${isEmail ? "email" : "phone number"}`,
        }
      }

      // Set pending verification
      setPendingVerification({ identifier, isEmail })

      return {
        success: true,
        message: `Verification code sent to your ${isEmail ? "email" : "phone number"}`,
      }
    } catch (error) {
      console.error("Send OTP error:", error)
      return { success: false, message: "An error occurred while sending verification code" }
    } finally {
      setIsLoading(false)
    }
  }

  // Simulate password reset
  const resetPassword = async (identifier: string, newPassword: string, otp: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (otp !== "123456") {
        return { success: false, message: "Invalid verification code" }
      }

      const isEmail = identifier.includes("@")

      // Update user password
      const allUsers = JSON.parse(localStorage.getItem("users") || "[]")
      const updatedUsers = allUsers.map((u: any) => {
        if (isEmail ? u.email === identifier : u.phone === identifier) {
          return { ...u, password: newPassword }
        }
        return u
      })

      localStorage.setItem("users", JSON.stringify(updatedUsers))
      setPendingVerification(null)

      return { success: true, message: "Password reset successful" }
    } catch (error) {
      console.error("Reset password error:", error)
      return { success: false, message: "An error occurred during password reset" }
    } finally {
      setIsLoading(false)
    }
  }

  // Logout
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
    verifyOTP,
    sendOTP,
    resetPassword,
    pendingVerification,
    setPendingVerification,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
