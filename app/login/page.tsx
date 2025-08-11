"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Shield, Lock, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {

    const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Left Section with Enhanced Aesthetics */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white flex-col items-center justify-center p-12 relative overflow-hidden">
        {/* Abstract animated background */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjAzIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+')]"></div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-4000"></div>

          {/* Geometric elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute top-0 left-1/4 w-32 h-32 border border-white/10 rounded-lg rotate-12 animate-spin-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-white/10 rounded-lg -rotate-12 animate-spin-slow animation-delay-3000"></div>
            <div className="absolute top-1/3 right-1/3 w-40 h-40 border border-white/10 rounded-full animate-spin-slow animation-delay-5000"></div>
          </div>
        </div>

        {/* Content */}
        <div className="z-10 max-w-md text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-70 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-3">
                <Shield className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl font-bold ml-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-white">
              ProctorX
            </h1>
          </div>

          <h2 className="text-2xl font-light mb-6 tracking-wide">Secure Online Examination Platform</h2>

          <p className="mb-10 text-lg opacity-80 leading-relaxed font-light">
          Next-Gen Lab Assessments
          </p>

          {/* Main illustration */}
          <div className="relative h-72 w-full mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer hexagon */}
              <div className="w-64 h-64 relative animate-pulse-slow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-indigo-300/30 rounded-xl rotate-45"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full border-2 border-purple-300/20 rounded-xl -rotate-45"></div>
                </div>
              </div>

              {/* Middle circle with dots */}
              <div className="absolute w-48 h-48 rounded-full border-2 border-dashed border-blue-300/30 animate-spin-slow">
                {/* Dots on the circle */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-purple-400 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-400 rounded-full"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-pink-400 rounded-full"></div>
              </div>

              {/* Inner circle with lock */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-indigo-800/50 to-purple-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-3">
                    <Lock className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute w-full h-full">
                <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-blue-400 rounded-full animate-ping-slow"></div>
                <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping-slow animation-delay-1000"></div>
                <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-ping-slow animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section with Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center justify-center mb-8">
            <Shield className="w-10 h-10 mr-2 text-blue-900" />
            <h1 className="text-3xl font-bold text-blue-900">ProctorX</h1>
          </div>

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
