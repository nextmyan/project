"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Send, User, Clock, Lock } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import ProtectedRoute from "@/components/protected-route"

interface Post {
  id: number
  author: string
  timestamp: string
  content: string
  replies: Reply[]
}

interface Reply {
  id: number
  author: string
  timestamp: string
  content: string
}

export default function ForumPage() {
  const { user } = useAuth()
  const router = useRouter()
  const { toast } = useToast()

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      author: "StudentAbroad",
      timestamp: "2 hours ago",
      content: "What are the best scholarships for Master's in Computer Science in Canada?",
      replies: [
        {
          id: 101,
          author: "CounselorSarah",
          timestamp: "1 hour ago",
          content:
            "For CS Masters in Canada, check out Vanier Canada Graduate Scholarships and the University of Toronto's International Student Awards. Eligibility varies, so review each carefully!",
        },
        {
          id: 102,
          author: "GlobalScholar",
          timestamp: "30 minutes ago",
          content:
            "Also look into specific university-funded scholarships. Many departments offer assistantships or fellowships for graduate students.",
        },
      ],
    },
    {
      id: 2,
      author: "VisaQuery",
      timestamp: "1 day ago",
      content: "How long does the UK student visa processing typically take after biometrics?",
      replies: [],
    },
  ])

  const [newPostContent, setNewPostContent] = useState("")
  const [newReplyContent, setNewReplyContent] = useState<{ [key: number]: string }>({})

  const handleNewPost = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to post a question",
        variant: "destructive",
      })
      router.push("/login?redirect=/forum")
      return
    }
    if (newPostContent.trim()) {
      const newPost: Post = {
        id: posts.length + 1,
        author: user.username || "Anonymous",
        timestamp: "Just now",
        content: newPostContent.trim(),
        replies: [],
      }
      setPosts([newPost, ...posts])
      setNewPostContent("")
    }
  }

  const handleNewReply = (postId: number) => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to reply",
        variant: "destructive",
      })
      router.push("/login?redirect=/forum")
      return
    }
    const replyContent = newReplyContent[postId]
    if (replyContent && replyContent.trim()) {
      const newReply: Reply = {
        id: Date.now(), // Simple unique ID
        author: user.username || "Anonymous",
        timestamp: "Just now",
        content: replyContent.trim(),
      }
      setPosts(posts.map((post) => (post.id === postId ? { ...post, replies: [...post.replies, newReply] } : post)))
      setNewReplyContent((prev) => ({ ...prev, [postId]: "" }))
    }
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Community Forum</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with fellow students, ask questions, share experiences, and get advice on your study abroad
              journey.
            </p>
          </div>

          {/* New Post Section */}
          <Card className="mb-8 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                Ask a New Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!user ? (
                <div className="relative p-6 border-2 border-dashed border-gray-200 rounded-lg text-center">
                  <Lock className="h-8 w-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-lg font-semibold text-gray-700 mb-2">Login to Participate</p>
                  <p className="text-gray-500 mb-4">Join the community to ask questions and share your insights.</p>
                  <Link href="/login?redirect=/forum">
                    <Button className="bg-blue-600 hover:bg-blue-700">Login / Sign Up</Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  <Textarea
                    placeholder="Type your question here..."
                    rows={4}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                  />
                  <Button onClick={handleNewPost} className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    Post Question
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Forum Posts */}
          <div className="space-y-6">
            {posts.map((post) => (
              <Card key={post.id} className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <User className="h-6 w-6 text-gray-500 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">{post.author}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.timestamp}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{post.content}</p>

                  {/* Replies Section */}
                  {post.replies.length > 0 && (
                    <div className="ml-8 mt-4 border-l-2 border-gray-200 pl-4 space-y-4">
                      {post.replies.map((reply) => (
                        <div key={reply.id}>
                          <div className="flex items-center mb-1">
                            <User className="h-4 w-4 text-gray-400 mr-2" />
                            <div>
                              <p className="font-medium text-gray-700 text-sm">{reply.author}</p>
                              <p className="text-xs text-gray-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {reply.timestamp}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">{reply.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reply Input */}
                  <div className="mt-6">
                    <Textarea
                      placeholder="Write a reply..."
                      rows={2}
                      value={newReplyContent[post.id] || ""}
                      onChange={(e) => setNewReplyContent((prev) => ({ ...prev, [post.id]: e.target.value }))}
                      disabled={!user}
                    />
                    <Button
                      onClick={() => handleNewReply(post.id)}
                      className="mt-2 bg-blue-500 hover:bg-blue-600"
                      size="sm"
                      disabled={!user}
                    >
                      Reply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <MessageCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-700 mb-2">No Questions Yet</h3>
              <p className="text-gray-500 mb-6">Be the first to ask a question!</p>
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}
