"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface OTPInputProps {
  length?: number
  onComplete: (otp: string) => void
}

export default function OTPInput({ length = 6, onComplete }: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Initialize refs array
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length)
  }, [length])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value

    // Only allow numbers
    if (!/^\d*$/.test(value)) return

    // Take the last character if multiple characters are pasted
    const digit = value.substring(value.length - 1)

    // Update the OTP array
    const newOtp = [...otp]
    newOtp[index] = digit
    setOtp(newOtp)

    // If a digit was entered and there's a next input, focus it
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }

    // Check if OTP is complete
    const otpValue = newOtp.join("")
    if (otpValue.length === length) {
      onComplete(otpValue)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        // If current input is empty and backspace is pressed, focus previous input
        const newOtp = [...otp]
        newOtp[index - 1] = ""
        setOtp(newOtp)
        inputRefs.current[index - 1]?.focus()
      } else if (otp[index] !== "") {
        // If current input has a value, clear it
        const newOtp = [...otp]
        newOtp[index] = ""
        setOtp(newOtp)
      }
    }

    // Handle left arrow
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }

    // Handle right arrow
    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted data is all digits and has correct length
    if (!/^\d+$/.test(pastedData)) return

    const digits = pastedData.substring(0, length).split("")
    const newOtp = [...otp]

    // Fill in as many inputs as we have digits
    digits.forEach((digit, idx) => {
      if (idx < length) {
        newOtp[idx] = digit
      }
    })

    setOtp(newOtp)

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex((val) => val === "")
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    } else {
      inputRefs.current[length - 1]?.focus()
    }

    // Check if OTP is complete
    const otpValue = newOtp.join("")
    if (otpValue.length === length) {
      onComplete(otpValue)
    }
  }

  return (
    <div className="flex justify-center space-x-2">
      {Array.from({ length }, (_, index) => (
        <Input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el)}
          className="w-12 h-12 text-center text-xl font-bold"
          autoFocus={index === 0}
        />
      ))}
    </div>
  )
}
