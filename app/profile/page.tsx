"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { useAuth } from "@/contexts/auth-context"
import { Loader2, User } from "lucide-react"
import ProtectedRoute from "@/components/protected-route"

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const { toast } = useToast()

  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState(user?.name || "")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      })
    } catch (error) {
      toast({
        title: "Update failed",
        description: "An error occurred while updating your profile.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (newPassword !== confirmPassword) {
        toast({
          title: "Passwords don't match",
          description: "Please make sure your new passwords match.",
          variant: "destructive",
        })
        return
      }

      toast({
        title: "Password changed",
        description: "Your password has been changed successfully.",
      })

      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
    } catch (error) {
      toast({
        title: "Update failed",
        description: "An error occurred while changing your password.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Profile</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Manage your account settings and preferences</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-1">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                        <User className="h-12 w-12 text-blue-600" />
                      </div>
                      <h3 className="font-medium text-lg">{user?.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{user?.email || user?.phone}</p>
                      <Button variant="outline" className="w-full" onClick={logout}>
                        Log Out
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-3">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle>Account Settings</CardTitle>
                    <CardDescription>Update your account information and preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="profile" className="w-full">
                      <TabsList className="grid grid-cols-2 mb-8">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="security">Security</TabsTrigger>
                      </TabsList>

                      <TabsContent value="profile" className="space-y-6">
                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email-phone">Email/Phone</Label>
                            <Input
                              id="email-phone"
                              value={user?.email || user?.phone || ""}
                              disabled
                              className="bg-gray-50"
                            />
                            <p className="text-sm text-gray-500">Contact information cannot be changed</p>
                          </div>

                          <div className="pt-4">
                            <Button type="submit" disabled={isLoading}>
                              {isLoading ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...
                                </>
                              ) : (
                                "Update Profile"
                              )}
                            </Button>
                          </div>
                        </form>
                      </TabsContent>

                      <TabsContent value="security" className="space-y-6">
                        <form onSubmit={handleChangePassword} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input
                              id="current-password"
                              type="password"
                              value={currentPassword}
                              onChange={(e) => setCurrentPassword(e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input
                              id="new-password"
                              type="password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input
                              id="confirm-password"
                              type="password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              required
                            />
                          </div>

                          <div className="pt-4">
                            <Button type="submit" disabled={isLoading}>
                              {isLoading ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Updating...
                                </>
                              ) : (
                                "Change Password"
                              )}
                            </Button>
                          </div>
                        </form>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}
