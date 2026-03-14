"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Sparkles,
  Building2,
  User,
  ShoppingCart,
  Camera,
  Briefcase,
  Utensils,
  Heart,
  Rocket
} from "lucide-react"
import { cn } from "@/lib/utils"

const businessTypes = [
  { id: "freelancer", label: "Freelancer/Solo", icon: User },
  { id: "small-business", label: "Small Business", icon: Building2 },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingCart },
  { id: "creative", label: "Creative/Portfolio", icon: Camera },
  { id: "professional", label: "Professional Services", icon: Briefcase },
  { id: "restaurant", label: "Restaurant/Food", icon: Utensils },
  { id: "health", label: "Health/Wellness", icon: Heart },
  { id: "startup", label: "Startup", icon: Rocket },
]

const websiteGoals = [
  "Generate leads & inquiries",
  "Sell products online",
  "Showcase portfolio/work",
  "Build brand awareness",
  "Provide information",
  "Book appointments",
  "Build community",
  "Other",
]

const websiteFeatures = [
  "Contact Form",
  "Blog",
  "Online Store",
  "Booking System",
  "Photo Gallery",
  "Video Integration",
  "Social Media Feeds",
  "Newsletter Signup",
  "Live Chat",
  "Customer Reviews",
  "FAQ Section",
  "Team/About Pages",
]

const budgetRanges = [
  { id: "starter", label: "Starter ($500-$800)", description: "Perfect for getting started" },
  { id: "professional", label: "Professional ($1,200-$2,000)", description: "Best for growing businesses" },
  { id: "premium", label: "Premium ($3,000-$5,000+)", description: "Full-featured solution" },
  { id: "custom", label: "Custom / Not sure", description: "Let's discuss your needs" },
]

const timelines = [
  "ASAP (1-2 weeks)",
  "Within 1 month",
  "Within 2-3 months",
  "No rush, just exploring",
]

const referralSources = [
  "Google Search",
  "Social Media",
  "Referral from a friend",
  "Online advertisement",
  "Other",
]

interface FormData {
  // Step 1 - Business Info
  businessType: string
  businessName: string
  industry: string
  
  // Step 2 - Contact
  name: string
  email: string
  phone: string
  
  // Step 3 - Website Goals
  goals: string[]
  currentWebsite: string
  competitors: string
  
  // Step 4 - Features
  features: string[]
  pages: string
  
  // Step 5 - Package & Budget
  budget: string
  timeline: string
  
  // Step 6 - Additional Info
  description: string
  referralSource: string
  additionalNotes: string
}

const initialFormData: FormData = {
  businessType: "",
  businessName: "",
  industry: "",
  name: "",
  email: "",
  phone: "",
  goals: [],
  currentWebsite: "",
  competitors: "",
  features: [],
  pages: "",
  budget: "",
  timeline: "",
  description: "",
  referralSource: "",
  additionalNotes: "",
}

export function IntakeForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalSteps = 6

  const updateField = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const toggleArrayField = (field: 'goals' | 'features', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(v => v !== value)
        : [...prev[field], value]
    }))
  }

  const canProceed = () => {
    switch (step) {
      case 1: return formData.businessType && formData.businessName
      case 2: return formData.name && formData.email
      case 3: return formData.goals.length > 0
      case 4: return formData.features.length > 0
      case 5: return formData.budget && formData.timeline
      case 6: return formData.description
      default: return true
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const getRecommendedPackage = () => {
    const score = 
      (formData.businessType === "ecommerce" ? 3 : 0) +
      (formData.features.length > 8 ? 2 : formData.features.length > 4 ? 1 : 0) +
      (formData.goals.includes("Sell products online") ? 2 : 0)
    
    if (score >= 4) return "Premium"
    if (score >= 2) return "Professional"
    return "Starter"
  }

  if (isSubmitted) {
    return (
      <section id="intake-form" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-card border border-primary/20"
          >
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Thank You, {formData.name}!
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Your request has been received. Based on your needs, we recommend our{" "}
              <span className="text-primary font-semibold">{getRecommendedPackage()} Package</span>.
            </p>
            <p className="text-muted-foreground mb-8">
              We&apos;ll review your information and get back to you within 24 hours with a custom quote and next steps.
            </p>
            <div className="p-6 rounded-2xl bg-secondary/50 text-left">
              <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  We&apos;ll review your project requirements
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  You&apos;ll receive a detailed proposal within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary" />
                  Schedule a free consultation call
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="intake-form" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let&apos;s Build Your{" "}
            <span className="text-primary">Dream Website</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Answer a few questions to help us understand your project and provide an accurate quote.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Step {step} of {totalSteps}</span>
            <span className="text-sm text-primary font-medium">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-card border border-border/50">
            <AnimatePresence mode="wait">
              {/* Step 1: Business Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">Tell us about your business</h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      What type of business do you have?
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {businessTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => updateField("businessType", type.id)}
                          className={cn(
                            "p-4 rounded-xl border-2 transition-all text-center",
                            formData.businessType === type.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <type.icon className={cn(
                            "w-6 h-6 mx-auto mb-2",
                            formData.businessType === type.id ? "text-primary" : "text-muted-foreground"
                          )} />
                          <span className={cn(
                            "text-sm font-medium",
                            formData.businessType === type.id ? "text-foreground" : "text-muted-foreground"
                          )}>
                            {type.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Business Name *
                      </label>
                      <Input
                        value={formData.businessName}
                        onChange={(e) => updateField("businessName", e.target.value)}
                        placeholder="Your Company Name"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Industry (optional)
                      </label>
                      <Input
                        value={formData.industry}
                        onChange={(e) => updateField("industry", e.target.value)}
                        placeholder="e.g., Fashion, Technology, Food"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Information */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">How can we reach you?</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => updateField("name", e.target.value)}
                        placeholder="John Doe"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField("email", e.target.value)}
                        placeholder="john@example.com"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number (optional)
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Website Goals */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">What are your website goals?</h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Select all that apply *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {websiteGoals.map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => toggleArrayField("goals", goal)}
                          className={cn(
                            "p-3 rounded-xl border-2 transition-all text-left",
                            formData.goals.includes(goal)
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-5 h-5 rounded-md border-2 flex items-center justify-center",
                              formData.goals.includes(goal)
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            )}>
                              {formData.goals.includes(goal) && (
                                <Check className="w-3 h-3 text-primary-foreground" />
                              )}
                            </div>
                            <span className={cn(
                              "text-sm font-medium",
                              formData.goals.includes(goal) ? "text-foreground" : "text-muted-foreground"
                            )}>
                              {goal}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Current website URL (if any)
                      </label>
                      <Input
                        value={formData.currentWebsite}
                        onChange={(e) => updateField("currentWebsite", e.target.value)}
                        placeholder="https://yoursite.com"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Any competitor websites you admire?
                      </label>
                      <Input
                        value={formData.competitors}
                        onChange={(e) => updateField("competitors", e.target.value)}
                        placeholder="https://example.com, https://another.com"
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Features */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">What features do you need?</h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      Select all features you want *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {websiteFeatures.map((feature) => (
                        <button
                          key={feature}
                          type="button"
                          onClick={() => toggleArrayField("features", feature)}
                          className={cn(
                            "p-3 rounded-xl border-2 transition-all text-left",
                            formData.features.includes(feature)
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <div className="flex items-center gap-2">
                            <div className={cn(
                              "w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0",
                              formData.features.includes(feature)
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            )}>
                              {formData.features.includes(feature) && (
                                <Check className="w-2.5 h-2.5 text-primary-foreground" />
                              )}
                            </div>
                            <span className={cn(
                              "text-sm",
                              formData.features.includes(feature) ? "text-foreground" : "text-muted-foreground"
                            )}>
                              {feature}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How many pages do you need? (approximate)
                    </label>
                    <Input
                      value={formData.pages}
                      onChange={(e) => updateField("pages", e.target.value)}
                      placeholder="e.g., 5-8 pages, Home, About, Services, Contact, etc."
                      className="bg-secondary/50 border-border"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 5: Budget & Timeline */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">Budget & Timeline</h3>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      What&apos;s your budget range? *
                    </label>
                    <div className="space-y-3">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget.id}
                          type="button"
                          onClick={() => updateField("budget", budget.id)}
                          className={cn(
                            "w-full p-4 rounded-xl border-2 transition-all text-left",
                            formData.budget === budget.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className={cn(
                                "font-medium",
                                formData.budget === budget.id ? "text-foreground" : "text-muted-foreground"
                              )}>
                                {budget.label}
                              </span>
                              <p className="text-sm text-muted-foreground">{budget.description}</p>
                            </div>
                            <div className={cn(
                              "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                              formData.budget === budget.id
                                ? "border-primary bg-primary"
                                : "border-muted-foreground"
                            )}>
                              {formData.budget === budget.id && (
                                <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">
                      When do you need the website? *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline}
                          type="button"
                          onClick={() => updateField("timeline", timeline)}
                          className={cn(
                            "p-3 rounded-xl border-2 transition-all",
                            formData.timeline === timeline
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          )}
                        >
                          <span className={cn(
                            "text-sm font-medium",
                            formData.timeline === timeline ? "text-foreground" : "text-muted-foreground"
                          )}>
                            {timeline}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 6: Final Details */}
              {step === 6 && (
                <motion.div
                  key="step6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-6">Tell us more about your vision</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Describe your ideal website *
                      </label>
                      <Textarea
                        value={formData.description}
                        onChange={(e) => updateField("description", e.target.value)}
                        placeholder="Tell us about your vision, preferred style, colors, must-have features, or anything else you'd like us to know..."
                        className="bg-secondary/50 border-border min-h-[120px]"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3">
                        How did you hear about us?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {referralSources.map((source) => (
                          <button
                            key={source}
                            type="button"
                            onClick={() => updateField("referralSource", source)}
                            className={cn(
                              "px-4 py-2 rounded-full text-sm transition-all",
                              formData.referralSource === source
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/50 text-muted-foreground hover:bg-secondary"
                            )}
                          >
                            {source}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Anything else we should know?
                      </label>
                      <Textarea
                        value={formData.additionalNotes}
                        onChange={(e) => updateField("additionalNotes", e.target.value)}
                        placeholder="Any questions, concerns, or additional details..."
                        className="bg-secondary/50 border-border"
                      />
                    </div>
                  </div>

                  {/* Summary Preview */}
                  <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-foreground">Based on your answers...</h4>
                    </div>
                    <p className="text-muted-foreground">
                      We recommend the <span className="text-primary font-semibold">{getRecommendedPackage()} Package</span> for your project. 
                      This includes {formData.features.length} selected features and aligns with your goals.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep(s => s - 1)}
                disabled={step === 1}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>

              {step < totalSteps ? (
                <Button
                  type="button"
                  onClick={() => setStep(s => s + 1)}
                  disabled={!canProceed()}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canProceed() || isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
