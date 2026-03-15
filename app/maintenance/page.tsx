"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Check, X, ArrowRight, Shield, Star,
  Globe, ShoppingCart, Code, Zap
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const platforms = [
  { id: "nextjs",    label: "Next.js",    icon: Code,         desc: "Custom React apps" },
  { id: "webflow",   label: "Webflow",    icon: Globe,        desc: "Visual web design" },
  { id: "wordpress", label: "WordPress",  icon: Zap,          desc: "Content management" },
  { id: "shopify",   label: "Shopify",    icon: ShoppingCart, desc: "E-commerce stores" },
]

const plans = {
  nextjs: {
    platform: "Next.js",
    tiers: [
      {
        key: "basic",
        name: "Basic Care",
        monthlyPrice: 79,
        yearlyPrice: 790,
        description: "Essential maintenance for custom apps",
        highlight: false,
        features: [
          "Dependency & package updates",
          "Security patches",
          "Weekly automated backups",
          "Uptime monitoring & alerts",
          "1 content update/month",
          "Monthly performance report",
          "Bug fixes (up to 1hr/month)",
        ],
        notIncluded: ["New features", "Design changes", "After-hours support"],
      },
      {
        key: "growth",
        name: "Growth Plan",
        monthlyPrice: 149,
        yearlyPrice: 1490,
        description: "For actively growing businesses",
        highlight: true,
        features: [
          "Everything in Basic Care",
          "3 content updates/month",
          "Priority bug fixes (up to 3hrs/month)",
          "Google Analytics reporting",
          "Core Web Vitals optimization",
          "24hr priority email support",
          "Monthly SEO health check",
          "Database maintenance",
        ],
        notIncluded: ["New page builds", "After-hours support"],
      },
      {
        key: "pro",
        name: "Pro Plan",
        monthlyPrice: 249,
        yearlyPrice: 2490,
        description: "Full-service for high-traffic apps",
        highlight: false,
        features: [
          "Everything in Growth",
          "Unlimited content updates",
          "New feature development (2hrs/month)",
          "Same-day support response",
          "Monthly strategy call (30 mins)",
          "Performance & load testing",
          "CI/CD pipeline maintenance",
          "Staging environment management",
        ],
        notIncluded: [],
      },
    ],
    addons: [
      { name: "New page build",                price: "$200–$400" },
      { name: "New feature development",       price: "$100/hr" },
      { name: "Emergency after-hours support", price: "$100/hr" },
      { name: "Performance audit",             price: "$150 flat" },
      { name: "SEO content writing",           price: "$100–$150/page" },
      { name: "API integration",               price: "$200–$500" },
    ],
  },
  webflow: {
    platform: "Webflow",
    tiers: [
      {
        key: "basic",
        name: "Basic Care",
        monthlyPrice: 49,
        yearlyPrice: 490,
        description: "Keep your Webflow site healthy",
        highlight: false,
        features: [
          "CMS content updates (2/month)",
          "Weekly backups",
          "Uptime monitoring",
          "Image optimization",
          "Form & integration checks",
          "Monthly health report",
        ],
        notIncluded: ["Design changes", "New pages", "After-hours support"],
      },
      {
        key: "growth",
        name: "Growth Plan",
        monthlyPrice: 99,
        yearlyPrice: 990,
        description: "Most popular for small businesses",
        highlight: true,
        features: [
          "Everything in Basic Care",
          "Unlimited CMS updates",
          "3 design tweaks/month",
          "SEO metadata updates",
          "Google Analytics reports",
          "24hr priority support",
          "Monthly SEO health check",
        ],
        notIncluded: ["New page builds", "After-hours support"],
      },
      {
        key: "pro",
        name: "Pro Plan",
        monthlyPrice: 199,
        yearlyPrice: 1990,
        description: "Complete Webflow management",
        highlight: false,
        features: [
          "Everything in Growth",
          "Unlimited design updates",
          "1 new page/month",
          "E-commerce management",
          "Same-day support response",
          "Quarterly strategy call",
          "A/B testing setup",
          "Conversion optimization",
        ],
        notIncluded: [],
      },
    ],
    addons: [
      { name: "New page design & build",       price: "$150–$300" },
      { name: "Custom animations",             price: "$100–$250" },
      { name: "E-commerce product bulk upload",price: "$75/hr" },
      { name: "Emergency after-hours support", price: "$75/hr" },
      { name: "Domain setup",                  price: "$50 flat" },
      { name: "Blog post writing",             price: "$75–$125" },
    ],
  },
  wordpress: {
    platform: "WordPress",
    tiers: [
      {
        key: "basic",
        name: "Basic Care",
        monthlyPrice: 49,
        yearlyPrice: 490,
        description: "Keep WordPress secure & updated",
        highlight: false,
        features: [
          "WordPress core updates",
          "Plugin & theme updates",
          "Weekly backups (offsite)",
          "Security scanning & malware removal",
          "Uptime monitoring",
          "1 content update/month",
        ],
        notIncluded: ["Design changes", "New pages", "After-hours support"],
      },
      {
        key: "growth",
        name: "Growth Plan",
        monthlyPrice: 99,
        yearlyPrice: 990,
        description: "Best for active WordPress sites",
        highlight: true,
        features: [
          "Everything in Basic Care",
          "Daily backups",
          "3 content updates/month",
          "Speed optimization",
          "Google Analytics reports",
          "24hr priority support",
          "Monthly SEO health check",
          "Spam & comment management",
        ],
        notIncluded: ["New page builds", "After-hours support"],
      },
      {
        key: "pro",
        name: "Pro Plan",
        monthlyPrice: 199,
        yearlyPrice: 1990,
        description: "Full WordPress management",
        highlight: false,
        features: [
          "Everything in Growth",
          "Unlimited content updates",
          "WooCommerce management",
          "Same-day support response",
          "Custom plugin configuration",
          "Quarterly strategy call",
          "Staging site management",
          "Database optimization",
        ],
        notIncluded: [],
      },
    ],
    addons: [
      { name: "New page build",                price: "$100–$250" },
      { name: "Custom plugin development",     price: "$100/hr" },
      { name: "Emergency malware removal",     price: "$150 flat" },
      { name: "Emergency after-hours support", price: "$75/hr" },
      { name: "WooCommerce product upload",    price: "$50/hr" },
      { name: "Blog post writing",             price: "$75–$125" },
    ],
  },
  shopify: {
    platform: "Shopify",
    tiers: [
      {
        key: "basic",
        name: "Basic Care",
        monthlyPrice: 49,
        yearlyPrice: 490,
        description: "Keep your store running smoothly",
        highlight: false,
        features: [
          "Theme updates & compatibility",
          "App updates & monitoring",
          "Weekly backups",
          "Uptime monitoring",
          "2 product updates/month",
          "Monthly store health report",
        ],
        notIncluded: ["Design changes", "New pages", "After-hours support"],
      },
      {
        key: "growth",
        name: "Growth Plan",
        monthlyPrice: 99,
        yearlyPrice: 990,
        description: "For growing Shopify stores",
        highlight: true,
        features: [
          "Everything in Basic Care",
          "Unlimited product updates",
          "3 design tweaks/month",
          "Abandoned cart optimization",
          "Google Analytics & Sales reports",
          "24hr priority support",
          "Monthly SEO health check",
          "Discount & promotion setup",
        ],
        notIncluded: ["New page builds", "After-hours support"],
      },
      {
        key: "pro",
        name: "Pro Plan",
        monthlyPrice: 199,
        yearlyPrice: 1990,
        description: "Complete Shopify store management",
        highlight: false,
        features: [
          "Everything in Growth",
          "Unlimited store updates",
          "New landing page/month",
          "Email marketing setup (Klaviyo)",
          "Same-day support response",
          "Quarterly strategy call",
          "Conversion rate optimization",
          "Inventory management support",
        ],
        notIncluded: [],
      },
    ],
    addons: [
      { name: "Custom theme development",      price: "$500–$1,500" },
      { name: "Bulk product upload",           price: "$50/hr" },
      { name: "Custom app integration",        price: "$200–$500" },
      { name: "Emergency after-hours support", price: "$75/hr" },
      { name: "Email marketing campaign",      price: "$150–$300" },
      { name: "Google/Meta ads setup",         price: "$200–$400" },
    ],
  },
}

export default function MaintenancePage() {
  const [selectedPlatform, setSelectedPlatform] = useState("webflow")
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly")
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const currentPlans = plans[selectedPlatform as keyof typeof plans]

  const handleCheckout = async (planKey: string, planName: string) => {
    setIsLoading(planKey)
    try {
      const res = await fetch("/api/maintenance-checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          platform: selectedPlatform,
          plan: planKey,
          billing,
        }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        throw new Error("No checkout URL")
      }
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Website Maintenance Plans
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Keep Your Site{" "}
              <span className="text-primary">Fast, Secure</span>
              <br />& Always Online
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose your platform and the right plan. We handle the technical stuff so you can focus on running your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />No contracts</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Cancel anytime</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />Secure checkout via Stripe</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-primary" />24hr onboarding</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Selector */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground mb-6 text-sm font-medium uppercase tracking-wider">
            Select Your Platform
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPlatform(p.id)}
                className={cn(
                  "p-4 rounded-2xl border-2 transition-all text-center",
                  selectedPlatform === p.id
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50 bg-card"
                )}
              >
                <p className={cn(
                  "font-bold text-base mb-1",
                  selectedPlatform === p.id ? "text-foreground" : "text-muted-foreground"
                )}>
                  {p.label}
                </p>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <span className={cn(
              "text-sm font-medium",
              billing === "monthly" ? "text-foreground" : "text-muted-foreground"
            )}>
              Monthly
            </span>
            <button
              onClick={() => setBilling(b => b === "monthly" ? "yearly" : "monthly")}
              className={cn(
                "relative w-14 h-7 rounded-full transition-colors",
                billing === "yearly" ? "bg-primary" : "bg-secondary"
              )}
            >
              <span className={cn(
                "absolute top-0.5 w-6 h-6 bg-white rounded-full transition-transform shadow-sm",
                billing === "yearly" ? "translate-x-7" : "translate-x-0.5"
              )} />
            </button>
            <span className={cn(
              "text-sm font-medium",
              billing === "yearly" ? "text-foreground" : "text-muted-foreground"
            )}>
              Yearly
              <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-bold">
                Save 2 months
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlatform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            >
              {currentPlans.tiers.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "relative rounded-3xl border-2 p-8 flex flex-col",
                    plan.highlight
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card"
                  )}
                >
                  {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center gap-1 whitespace-nowrap">
                      <Star className="w-3 h-3" />
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-black text-foreground">
                        ${billing === "yearly"
                          ? Math.round(plan.yearlyPrice / 12)
                          : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground mb-1">/month</span>
                    </div>
                    {billing === "yearly" ? (
                      <p className="text-sm text-primary mt-1">
                        ${plan.yearlyPrice}/year — save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground mt-1">billed monthly</p>
                    )}
                  </div>

                  <div className="space-y-2 mb-6 flex-1">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-start gap-2 opacity-40">
                        <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCheckout(plan.key, plan.name)}
                    disabled={isLoading === plan.key}
                    className={cn(
                      "w-full py-3 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2",
                      plan.highlight
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-foreground hover:bg-secondary/80",
                      isLoading === plan.key && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isLoading === plan.key ? (
                      <>
                        <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                        Redirecting...
                      </>
                    ) : (
                      <>
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Add-On Services</h2>
            <p className="text-muted-foreground">Need something extra? These can be added to any plan.</p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlatform + "-addons"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {currentPlans.addons.map((addon) => (
                <div key={addon.name} className="p-4 rounded-2xl bg-card border border-border">
                  <p className="text-sm font-medium text-foreground mb-1">{addon.name}</p>
                  <p className="text-primary font-bold text-sm">{addon.price}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Yes. No contracts, no cancellation fees. Cancel anytime from your Stripe customer portal.",
              },
              {
                q: "What counts as a content update?",
                a: "Any change under 30 minutes — text edits, image swaps, adding/removing items. Anything over 30 minutes is billed as an add-on at our hourly rate.",
              },
              {
                q: "How do I get started after subscribing?",
                a: "After checkout you'll receive a welcome email within 24 hours with a short onboarding form to share your website access details securely.",
              },
              {
                q: "Do you offer discounts for multiple sites?",
                a: "Yes! If you have 2+ sites reach out to sales@readysetgosites.com for a custom bundle quote.",
              },
            ].map((item) => (
              <div key={item.q} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}