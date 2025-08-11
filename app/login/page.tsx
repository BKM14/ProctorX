"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Codesandbox, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { TypingText } from "@/components/ui/shadcn-io/typing-text"

export default function LoginPage() {

    const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center br-2 text-6xl bg-slate-900 text-white">
        <div className="flex items-center justify-center">
          <Codesandbox size={50}/>
          <span className="font-bold">ProctorX</span>
        </div>
        <TypingText 
          text={["Secure", "Isolated", "Scalable", "Reliable"]} 
          holdDelay={1000} 
          loop 
          cursor
          cursorClassName="cursor-blink"
          className="ml-1 text-lg"
        />
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">

          <h2 className="text-3xl font-bold mb-2 text-gray-800">Welcome back</h2>
          <p className="text-gray-600 mb-8">Please sign in to your account</p>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="name@university.edu" className="h-12" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input id="password" type={passwordVisible ? "text" : "password"} placeholder="••••••••" className="h-12" />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  onClick={() => setPasswordVisible((status) => !status)}
                >
                  {passwordVisible ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                  <span className="sr-only">Toggle password visibility</span>
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 bg-blue-900 hover:bg-blue-800 cursor-pointer">
              Sign in
            </Button>

            <div className="text-center text-sm text-gray-600">
              Need access?{" "}
              <Link href="" className="text-blue-600 hover:text-blue-800 font-medium">
                Contact your administrator
              </Link>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
            By signing in, you agree to our{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
