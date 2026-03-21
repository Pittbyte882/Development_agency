"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Check, ArrowRight, Clock, Shield,
  Headphones, Star, ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Template {
  id: string
  name: string
  industry: string
  price: string
  originalPrice: string
  description: string
  includes: string[]
  icon: React.ElementType
  color: string
  themes: string[]
  requiresPayment?: boolean
  paymentNote?: string
}

export function OrderForm({ template }: { template: Template }) {
  const [formData, setFormData] = useState({
    // Contact
    yourName: "",
    email: "",
    phone: "",
    // Business
    businessName: "",
    domainStatus: "",
    domainName: "",
    // Design
    colorTheme: "",
    // Social
    instagram: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
    tiktok: "",
    // Logo
    logoStatus: "",
    // Extras
    addOns: "",
    specialRequests: "",
    // Source
    referral: "",
    paymentPlatform: "",
    paymentAccountStatus: "",
    paymentEmail: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Dynamic section numbering based on whether template requires payment
  const sectionNum = (base: number) => template.requiresPayment ? base : base - 1

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, template }),
      })
      if (!res.ok) throw new Error("Failed")
      setIsSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      alert("Something went wrong. Please call us at (555) 123-4567")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = "w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all bg-secondary border border-border text-foreground focus:border-primary placeholder:text-muted-foreground"
  const labelClass = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2"
  const selectClass = `${inputClass} appearance-none cursor-pointer`

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 bg-primary"
          >
            <Check className="w-12 h-12 text-primary-foreground" />
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Order Received!
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Thank you, <strong className="text-foreground">{formData.yourName}</strong>!
            We have received your order for the{" "}
            <strong className="text-primary">{template.name}</strong> template.
          </p>
          <div
            className="p-8 rounded-2xl border border-border bg-card text-left mb-8 space-y-3"
          >
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">What happens next:</strong>
            </p>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-xs font-bold">1</span>
              </div>
              <p className="text-sm text-muted-foreground">
                We&apos;ll review your order and send a{" "}
                <strong className="text-foreground">50% deposit invoice</strong>{" "}
                to <strong className="text-primary">{formData.email}</strong> within 24 hours.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-xs font-bold">2</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Once the deposit is paid we&apos;ll kick off your project immediately.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-xs font-bold">3</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {formData.logoStatus === "need-one"
                  ? "We'll reach out about your logo design before getting started."
                  : "Please reply to your confirmation email with your logo file."
                }
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-xs font-bold">4</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your site will be live in{" "}
                <strong className="text-foreground">1–2 weeks</strong>{" "}
                from deposit payment.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Questions? Call us at{" "}
            <a href="tel:+15551234567" className="text-primary font-semibold hover:underline">
              (555) 123-4567
            </a>
          </p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* Left — Order Summary (sticky) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 lg:sticky lg:top-32 space-y-6"
          >
            {/* Template card */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              {/* Preview header */}
              <div className={cn("h-32 bg-gradient-to-br flex items-center justify-center", template.color)}>
                <div className="bg-card/90 rounded-xl border border-border/50 p-4 flex flex-col items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <template.icon className="w-8 h-8 text-primary/60" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{template.name}</h2>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">
                      {template.industry} Template
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground line-through">{template.originalPrice}</p>
                    <p className="text-2xl font-bold text-primary">{template.price}</p>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {template.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    What&apos;s Included
                  </p>
                  {template.includes.map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Clock, label: "1–2 Week Delivery" },
                { icon: Shield, label: "Satisfaction Guaranteed" },
                { icon: Headphones, label: "30-Day Support" },
              ].map((badge) => (
                <div
                  key={badge.label}
                  className="p-3 rounded-xl border border-border bg-card/50 text-center"
                >
                  <badge.icon className="w-4 h-4 text-primary mx-auto mb-1.5" />
                  <p className="text-xs text-muted-foreground leading-tight">{badge.label}</p>
                </div>
              ))}
            </div>

            {/* Reviews */}
            <div className="p-5 rounded-xl border border-border bg-card/50">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-foreground font-medium mb-1">
                &ldquo;Best investment I made for my business.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">— Sarah M., Restaurant Owner</p>
            </div>
          </motion.div>

          {/* Right — Order Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Order Your Website
              </h1>
              <p className="text-muted-foreground">
                Fill out the form below and we&apos;ll send your invoice within 24 hours.
                No payment required until you&apos;ve reviewed everything.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Section 1 — Your Contact Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">1</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">Your Contact Information</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>
                      Your Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.yourName}
                      onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@yourbusiness.com"
                      className={inputClass}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>

              {/* Section 2 — Business Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">2</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">Business Information</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>
                      Business Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="Your Business Name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      Do you have a domain name? <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.domainStatus}
                        onChange={(e) => setFormData({ ...formData, domainStatus: e.target.value })}
                        className={selectClass}
                      >
                        <option value="">Select an option</option>
                        <option value="have-one">Yes — I already have a domain</option>
                        <option value="need-one">No — I need help getting one</option>
                        <option value="not-sure">Not sure — let&apos;s discuss</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>

                  {formData.domainStatus === "have-one" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                    >
                      <label className={labelClass}>Your Domain Name</label>
                      <input
                        type="text"
                        value={formData.domainName}
                        onChange={(e) => setFormData({ ...formData, domainName: e.target.value })}
                        placeholder="www.yourbusiness.com"
                        className={inputClass}
                      />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Section 3 — Design Preferences */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">3</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">Design Preferences</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div>
                  <label className={labelClass}>
                    Color Theme <span className="text-primary">*</span>
                  </label>
                  <p className="text-xs text-muted-foreground mb-3">
                    You saw these on the live preview. Which style fits your brand best?
                  </p>
                  <div className="relative">
                    <select
                      required
                      value={formData.colorTheme}
                      onChange={(e) => setFormData({ ...formData, colorTheme: e.target.value })}
                      className={selectClass}
                    >
                      <option value="">Select your preferred theme</option>
                      {template.themes.map((theme) => (
                        <option key={theme} value={theme}>{theme}</option>
                      ))}
                      <option value="not-sure">Not sure — you choose what fits best</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>
              {/* Section 4 — Payment Setup (only for templates that include it) */}
              {template.requiresPayment && (
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-xs font-bold">4</span>
                    </div>
                    <h3 className="text-base font-bold text-foreground">Payment Setup</h3>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Included badge */}
                  <div className="flex items-center gap-2 mb-5 p-3 rounded-xl bg-primary/5 border border-primary/20">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Included in your price</strong>
                      {" "}— {template.paymentNote}
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Platform */}
                    <div>
                      <label className={labelClass}>
                        Which payment platform do you use or prefer?{" "}
                        <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <select
                          required={template.requiresPayment}
                          value={formData.paymentPlatform}
                          onChange={(e) => setFormData({ ...formData, paymentPlatform: e.target.value })}
                          className={selectClass}
                        >
                          <option value="">Select a platform</option>
                          <option value="stripe">Stripe</option>
                          <option value="paypal">PayPal</option>
                          <option value="square">Square</option>
                          {(template.id === "ecommerce") && (
                            <>
                              <option value="shopify">Shopify</option>
                              <option value="woocommerce">WooCommerce</option>
                            </>
                          )}
                          <option value="no-account">I don't have one yet — help me choose</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    {/* Account status */}
                    {formData.paymentPlatform && formData.paymentPlatform !== "no-account" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-5"
                      >
                        <div>
                          <label className={labelClass}>
                            Do you already have an account set up?{" "}
                            <span className="text-primary">*</span>
                          </label>
                          <div className="relative">
                            <select
                              required
                              value={formData.paymentAccountStatus}
                              onChange={(e) => setFormData({ ...formData, paymentAccountStatus: e.target.value })}
                              className={selectClass}
                            >
                              <option value="">Select an option</option>
                              <option value="yes-active">Yes — I have an active account ready to connect</option>
                              <option value="yes-not-setup">Yes — I have an account but haven't set it up fully</option>
                              <option value="no">No — I need to create one</option>
                              <option value="not-sure">Not sure</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                          </div>
                        </div>

                        {(formData.paymentAccountStatus === "yes-active" ||
                          formData.paymentAccountStatus === "yes-not-setup") && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                          >
                            <label className={labelClass}>
                              Account Email Address
                            </label>
                            <input
                              type="email"
                              value={formData.paymentEmail}
                              onChange={(e) => setFormData({ ...formData, paymentEmail: e.target.value })}
                              placeholder="email@youraccount.com"
                              className={inputClass}
                            />
                            <p className="text-xs text-muted-foreground mt-2">
                              This helps us connect your account during setup.
                            </p>
                          </motion.div>
                        )}

                        {formData.paymentAccountStatus === "no" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="p-4 rounded-xl bg-secondary border border-border"
                          >
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              No problem! We&apos;ll guide you through creating and verifying
                              your {formData.paymentPlatform.charAt(0).toUpperCase() + formData.paymentPlatform.slice(1)} account
                              as part of your setup. It typically takes 15–30 minutes and
                              we&apos;ll walk you through every step.
                            </p>
                          </motion.div>
                        )}
                      </motion.div>
                    )}

                    {formData.paymentPlatform === "no-account" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="p-4 rounded-xl bg-primary/5 border border-primary/20"
                      >
                        <p className="text-sm font-medium text-foreground mb-1">
                          We&apos;ll help you choose the right platform
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          During your project kickoff call we&apos;ll recommend the best payment
                          platform for your business and walk you through the entire setup process.
                          Most platforms are free to create — they only charge a small fee per transaction.
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              )}
              {/* Section 4 — Logo */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">
                      {template.requiresPayment ? "5" : "4"}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">Your Logo</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div>
                  <label className={labelClass}>
                    Logo Status <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.logoStatus}
                      onChange={(e) => setFormData({ ...formData, logoStatus: e.target.value })}
                      className={selectClass}
                    >
                      <option value="">Select an option</option>
                      <option value="have-one">I have a logo — I&apos;ll email it to you</option>
                      <option value="need-one">I need a logo designed — please add this service</option>
                      <option value="use-text">Just use my business name as text for now</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>

                  {formData.logoStatus === "need-one" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 p-4 rounded-xl bg-primary/5 border border-primary/20"
                    >
                      <p className="text-sm text-foreground font-medium mb-1">
                        Logo Design Add-On
                      </p>
                      <p className="text-xs text-muted-foreground">
                        We&apos;ll include logo design in your invoice.
                        Logo design starts at <strong className="text-foreground">$250</strong>.
                        We&apos;ll discuss your vision before we start.
                      </p>
                    </motion.div>
                  )}

                  {formData.logoStatus === "have-one" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-3 p-4 rounded-xl bg-secondary border border-border"
                    >
                      <p className="text-xs text-muted-foreground">
                        Please reply to your confirmation email with your logo file
                        (PNG or SVG preferred). If you have brand colors or fonts,
                        include those too!
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Section 5 — Social Media */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">
                      {template.requiresPayment ? "6" : "5"}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">Social Media Links</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <p className="text-sm text-muted-foreground mb-5">
                  Add any social profiles you want linked on your site. Leave blank if not applicable.
                </p>

                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { key: "instagram", label: "Instagram", placeholder: "instagram.com/yourbusiness" },
                    { key: "facebook", label: "Facebook", placeholder: "facebook.com/yourbusiness" },
                    { key: "twitter", label: "X / Twitter", placeholder: "x.com/yourbusiness" },
                    { key: "linkedin", label: "LinkedIn", placeholder: "linkedin.com/company/yourbusiness" },
                    { key: "youtube", label: "YouTube", placeholder: "youtube.com/@yourbusiness" },
                    { key: "tiktok", label: "TikTok", placeholder: "tiktok.com/@yourbusiness" },
                  ].map((social) => (
                    <div key={social.key}>
                      <label className={labelClass}>{social.label}</label>
                      <input
                        type="text"
                        value={formData[social.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [social.key]: e.target.value })}
                        placeholder={social.placeholder}
                        className={inputClass}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 6 — Add-Ons & Special Requests */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-foreground text-xs font-bold">
                      {template.requiresPayment ? "7" : "6"}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground">Add-Ons & Special Requests</h3>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>Any Add-Ons You&apos;d Like?</label>
                    <p className="text-xs text-muted-foreground mb-3">
                      Check our{" "}
                      <a href="/addons" className="text-primary hover:underline" target="_blank">
                        add-ons page
                      </a>{" "}
                      for pricing. List anything you&apos;re interested in and we&apos;ll include it in your invoice.
                    </p>
                    <textarea
                      value={formData.addOns}
                      onChange={(e) => setFormData({ ...formData, addOns: e.target.value })}
                      placeholder="e.g. Blog setup, Google Ads setup, extra pages, email marketing integration..."
                      rows={3}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Special Requests or Notes</label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Anything specific about your business, content, style preferences, or anything else we should know..."
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>How Did You Find Us?</label>
                    <div className="relative">
                      <select
                        value={formData.referral}
                        onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                        className={selectClass}
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="tiktok">TikTok</option>
                        <option value="referral">Friend or Colleague Referral</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Invoice notice */}
              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm font-semibold text-foreground mb-1">
                  No payment required right now
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  After you submit this form we&apos;ll review your order and send a{" "}
                  <strong className="text-foreground">50% deposit invoice</strong> to{" "}
                  {formData.email || "your email"} within 24 hours via Found.
                  Work begins as soon as the deposit is paid.
                  {formData.logoStatus === "need-one" && " Logo design will be included in your invoice."}
                  {formData.addOns && " Any add-ons will also be included in your invoice."}
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50 flex items-center justify-center gap-2 bg-primary text-primary-foreground"
                style={{ letterSpacing: "0.15em" }}
              >
                {isSubmitting ? "Submitting Your Order..." : (
                  <>
                    Submit Order — Invoice Coming Within 24hrs
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                By submitting you agree to our{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>.
                No payment is taken until you approve your invoice.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}