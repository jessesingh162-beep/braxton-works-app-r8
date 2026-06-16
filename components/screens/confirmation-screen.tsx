"use client"

import { useApp } from "@/lib/app-context"
import { CheckCircle } from "lucide-react"

export function ConfirmationScreen() {
  const { setCurrentScreen } = useApp()

  return (
    <div className="min-h-screen pb-32 flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="h-24 w-24 rounded-full bg-[#D1FAE5] flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="h-12 w-12 text-[#10B981]" />
        </div>
        
        <h1 className="text-2xl font-semibold text-white tracking-tight mb-3">
          Thanks, we&apos;ve received your inquiry.
        </h1>
        
        <p className="text-[#94A3B8] text-lg mb-12 leading-relaxed">
          We&apos;ll handle it from here.
        </p>

        <button
          onClick={() => setCurrentScreen("jobs")}
          className="w-full h-14 text-[17px] font-semibold rounded-2xl glass-button-primary flex items-center justify-center active:scale-[0.98] transition-transform"
        >
          View My Jobs
        </button>

        <button
          onClick={() => setCurrentScreen("home")}
          className="mt-6 text-[#94A3B8] hover:text-white text-sm font-medium transition-colors"
        >
          Back to home
        </button>
      </div>
    </div>
  )
}
