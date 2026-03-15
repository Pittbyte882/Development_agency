"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Link from "next/link"

export function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [notified, setNotified] = useState(false)

  useEffect(() => {
    if (sessionId && !notified) {
      fetch("/api/maintenance-notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      })
      setNotified(true)
    }
  }, [sessionId, notified])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full text-center p-12 rounded-3xl bg-card border border-primary/20"
      >
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          You're all set!
        </h1>
        <p className="text-muted-foreground mb-6">
          Your maintenance plan is now active. We'll be in touch within 24 hours to get everything set up.
        </p>
        <div className="p-6 rounded-2xl bg-secondary/50 text-left mb-8">
          <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              Check your email for a confirmation receipt
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              We'll review your website within 24 hours
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              You'll receive a welcome email with next steps
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
