"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, X, Star, Zap, Crown, ArrowRight, Eye, ShoppingCart, Briefcase, Camera, Utensils, Dumbbell, Coffee, ChefHat, UtensilsCrossed, PersonStanding, Leaf, Rocket, Shield, Code, Sparkles, Palette, TrendingUp, Users, Scale, Lightbulb, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// ── CATEGORIES ──────────────────────────────────────────
const categories = [
  { id: "all", label: "All Templates" },
  { id: "food", label: "Food & Culinary" },
  { id: "health", label: "Health & Fitness" },
  { id: "tech", label: "Tech & SaaS" },
  { id: "creative", label: "Creative & Creators" },
  { id: "agency", label: "Agency & Professional" },
  { id: "startup", label: "Startups & Business" },
]

// ── TEMPLATES ───────────────────────────────────────────
const prebuiltSites = [
  // Food & Culinary
  {
    id: "restaurant", category: "food",
    name: "The Grand Table", industry: "Restaurant",
    icon: Utensils, price: "$997", originalPrice: "$1,297",
    description: "Perfect for restaurants, cafes, and food businesses",
    color: "from-orange-500/20 to-red-500/20",
    features: ["Menu display with photos", "Online reservation form", "Location & hours section", "Photo gallery", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://restaurant.readysetgosites.com",
  },
  {
    id: "cafe", category: "food",
    name: "Brew & Bloom", industry: "Café",
    icon: Coffee, price: "$799", originalPrice: "$1,099",
    description: "Cozy café site with seasonal menu and online ordering",
    color: "from-amber-500/20 to-yellow-500/20",
    features: ["Seasonal menu display", "Online ordering setup", "Events calendar", "Photo gallery", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://cafe.readysetgosites.com",
  },
  {
    id: "chef", category: "food",
    name: "Chef's Table", industry: "Personal Chef",
    icon: ChefHat, price: "$997", originalPrice: "$1,297",
    description: "Sophisticated personal chef portfolio with booking",
    color: "from-green-500/20 to-emerald-500/20",
    features: ["Chef portfolio & bio", "Menu showcase", "Booking form", "Client testimonials", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://chef.readysetgosites.com",
  },
  {
    id: "catering", category: "food",
    name: "Feast & Co", industry: "Catering",
    icon: UtensilsCrossed, price: "$997", originalPrice: "$1,297",
    description: "Professional catering company with packages and inquiry form",
    color: "from-rose-500/20 to-pink-500/20",
    features: ["Service packages", "Photo gallery", "Inquiry form", "Pricing display", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://catering.readysetgosites.com",
  },
  // Health & Fitness
  {
    id: "gym", category: "health",
    name: "Iron & Grit", industry: "Gym & Fitness",
    icon: Dumbbell, price: "$997", originalPrice: "$1,297",
    description: "High-energy gym site with membership plans and class schedule",
    color: "from-green-500/20 to-emerald-500/20",
    features: ["Class schedule display", "Membership plans", "Trainer profiles", "Before/after gallery", "Contact form", "Booking integration ready", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://gym.readysetgosites.com",
  },
  {
    id: "trainer", category: "health",
    name: "Peak Performance", industry: "Personal Trainer",
    icon: PersonStanding, price: "$997", originalPrice: "$1,297",
    description: "Personal trainer site with transformation gallery and bookings",
    color: "from-blue-500/20 to-indigo-500/20",
    features: ["Trainer bio & credentials", "Program packages", "Transformation gallery", "Booking form", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://trainer.readysetgosites.com",
  },
  {
    id: "yoga", category: "health",
    name: "Flow State", industry: "Yoga & Wellness",
    icon: Leaf, price: "$799", originalPrice: "$1,099",
    description: "Calming yoga studio with class bookings and instructor profiles",
    color: "from-teal-500/20 to-cyan-500/20",
    features: ["Class schedule", "Instructor profiles", "Booking system", "Wellness blog", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://yoga.readysetgosites.com",
  },
  // Tech & SaaS
  {
    id: "saas", category: "tech",
    name: "LaunchPad", industry: "SaaS",
    icon: Rocket, price: "$1,097", originalPrice: "$1,397",
    description: "Modern SaaS landing page with pricing, features, and demo CTA",
    color: "from-violet-500/20 to-purple-500/20",
    features: ["Feature showcase", "Pricing tiers", "Demo CTA", "Testimonials", "FAQ section", "Analytics ready", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://saas.readysetgosites.com",
  },
  {
    id: "security", category: "tech",
    name: "SecureStack", industry: "Cybersecurity",
    icon: Shield, price: "$1,097", originalPrice: "$1,397",
    description: "Trust-building cybersecurity firm with services and case studies",
    color: "from-green-500/20 to-emerald-500/20",
    features: ["Services showcase", "Case studies", "Trust badges", "Team profiles", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://security.readysetgosites.com",
  },
  {
    id: "software", category: "tech",
    name: "AppForge", industry: "Software / App Dev",
    icon: Code, price: "$1,097", originalPrice: "$1,397",
    description: "Software company site with product showcase and team profiles",
    color: "from-blue-500/20 to-sky-500/20",
    features: ["Product showcase", "Team profiles", "Portfolio section", "Pricing plans", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://software.readysetgosites.com",
  },
  // Creative & Creators
  {
    id: "photography", category: "creative",
    name: "Lens & Light", industry: "Photographer",
    icon: Camera, price: "$799", originalPrice: "$1,099",
    description: "Stunning photography portfolio with galleries and booking",
    color: "from-amber-500/20 to-orange-500/20",
    features: ["Gallery with lightbox", "About me section", "Services/offerings page", "Testimonials", "Contact form", "Social media links", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://photo.readysetgosites.com",
  },
  {
    id: "creator", category: "creative",
    name: "The Creator Hub", industry: "Influencer / Creator",
    icon: Sparkles, price: "$799", originalPrice: "$1,099",
    description: "Creator site with media kit, brand deals, and social links",
    color: "from-fuchsia-500/20 to-pink-500/20",
    features: ["Media kit page", "Brand partnerships", "Social links hub", "Content showcase", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://creator.readysetgosites.com",
  },
  {
    id: "portfolio", category: "creative",
    name: "Folio Pro", industry: "Portfolio",
    icon: Palette, price: "$799", originalPrice: "$1,099",
    description: "Clean developer or designer portfolio with project showcase",
    color: "from-purple-500/20 to-pink-500/20",
    features: ["Project showcase", "Skills section", "About me page", "Testimonials", "Contact form", "Social media links", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://portfolio.readysetgosites.com",
  },
  // Agency & Professional
  {
    id: "marketing", category: "agency",
    name: "Amplify Agency", industry: "Marketing Agency",
    icon: TrendingUp, price: "$1,097", originalPrice: "$1,397",
    description: "Bold marketing agency site with case studies and results",
    color: "from-orange-500/20 to-amber-500/20",
    features: ["Case studies", "Services showcase", "Team profiles", "Client results", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://agency.readysetgosites.com",
  },
  {
    id: "recruitment", category: "agency",
    name: "TalentBridge", industry: "Recruitment Agency",
    icon: Users, price: "$1,097", originalPrice: "$1,397",
    description: "Recruitment agency with job listings and candidate portal",
    color: "from-blue-500/20 to-indigo-500/20",
    features: ["Job listings", "Candidate portal", "Services page", "Team profiles", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://recruit.readysetgosites.com",
  },
  {
    id: "law", category: "agency",
    name: "Counsel Pro", industry: "Law Firm",
    icon: Scale, price: "$1,097", originalPrice: "$1,397",
    description: "Professional law firm site with practice areas and attorney profiles",
    color: "from-stone-500/20 to-neutral-500/20",
    features: ["Practice areas", "Attorney profiles", "Case results", "FAQ section", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://law.readysetgosites.com",
  },
  // Startups & Business
  {
    id: "startup", category: "startup",
    name: "Venture Launch", industry: "Startup",
    icon: Lightbulb, price: "$1,097", originalPrice: "$1,397",
    description: "Investor-ready startup site with pitch deck and team section",
    color: "from-violet-500/20 to-indigo-500/20",
    features: ["Product pitch section", "Team profiles", "Investor info", "Roadmap display", "Contact form", "Mobile responsive", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://startup.readysetgosites.com",
  },
  {
    id: "ecommerce", category: "startup",
    name: "ShopFront", industry: "E-Commerce",
    icon: ShoppingBag, price: "$1,297", originalPrice: "$1,697",
    description: "Ready-to-sell e-commerce brand site with product showcase",
    color: "from-pink-500/20 to-rose-500/20",
    features: ["Product catalog", "Shopping cart", "Checkout integration", "Customer reviews", "Category filtering", "Inventory management", "Domain & hosting setup",
  "SEO setup & Google Analytics",
  "2 rounds of revisions",
  "30-day post-launch support",],
    demoUrl: "https://ecom.readysetgosites.com",
  },
]

// ── PACKAGES ────────────────────────────────────────────
const packages = [
  {
    name: "Starter",
    icon: Zap,
    price: "$1,500",
    priceRange: "$1,500–$2,500",
    bestFor: "Solo businesses or freelancers",
    delivery: "2–3 weeks",
    popular: false,
    description: "A professionally custom-built website from scratch tailored to your brand and business goals.",
    industries: ["Restaurants & Cafés", "Personal Trainers", "Photographers", "Local Businesses", "Freelancers"],
    platforms: ["Webflow", "WordPress"],
    features: [
      "Custom design from scratch",
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form setup",
      "Basic SEO optimization",
      "Google Analytics setup",
      "Domain & hosting setup",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    notIncluded: [],
  },
  {
    name: "Professional",
    icon: Star,
    price: "$3,000",
    priceRange: "$3,000–$5,000",
    bestFor: "Growing small to mid-size businesses",
    delivery: "3–4 weeks",
    popular: true,
    description: "A fully custom website with advanced features, integrations, and a design built to convert visitors into customers.",
    industries: ["Gyms & Fitness Studios", "Marketing Agencies", "SaaS Companies", "Recruitment Firms", "Startups"],
    platforms: ["Webflow", "WordPress", "Shopify"],
    features: [
      "Everything in Starter",
      "Up to 10 custom pages",
      "Premium conversion-focused design",
      "Blog or news section",
      "Booking system integration",
      "E-commerce (up to 50 products)",
      "Advanced SEO setup & schema markup",
      "Social media & newsletter integration",
      "Speed & performance optimization",
      "3 rounds of revisions",
      "60-day priority support",
    ],
    notIncluded: [],
  },
  {
    name: "Premium",
    icon: Crown,
    price: "$6,000",
    priceRange: "$6,000–$10,000+",
    bestFor: "Established businesses & high-growth brands",
    delivery: "4–8 weeks",
    popular: false,
    description: "A bespoke, high-performance website built with cutting-edge technology — designed to scale with your business.",
    industries: ["Tech Companies", "Enterprise Startups", "E-Commerce Brands", "Influencers & Creators", "Any Custom Need"],
    platforms: ["Next.js", "Webflow", "WordPress", "Shopify"],
    features: [
      "Everything in Professional",
      "Unlimited pages",
      "Full custom e-commerce store",
      "Custom animations & micro-interactions",
      "Advanced API & third-party integrations",
      "CMS setup — fully editable by you",
      "Comprehensive SEO strategy",
      "Performance & Core Web Vitals optimization",
      "Same-day priority support",
      "Unlimited revisions",
      "90 days post-launch support",
      "Free first month maintenance",
      "1-on-1 training session",
      "Dedicated project manager (you)",
    ],
    notIncluded: [],
  },
]
// ── COMPONENT ───────────────────────────────────────────
export function PrebuiltSites() {
  const [activeTab, setActiveTab] = useState<"ready" | "custom">("ready")
  const [activeCategory, setActiveCategory] = useState("all")
  useEffect(() => {
  const handleSwitchTab = (e: CustomEvent) => {
    setActiveTab(e.detail)
  }
  window.addEventListener("switchTab", handleSwitchTab as EventListener)
  return () => window.removeEventListener("switchTab", handleSwitchTab as EventListener)
}, [])

  const filtered = activeCategory === "all"
    ? prebuiltSites
    : prebuiltSites.filter(t => t.category === activeCategory)

  return (
    <section id="prebuilt-sites" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Pricing & Templates
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find the Right{" "}
            <span className="text-primary">Solution for You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose a ready-made template and launch fast, or go fully custom
            with a site built from scratch just for you.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center p-1 rounded-full bg-secondary/50 border border-border/50">
            <button
              onClick={() => setActiveTab("ready")}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-semibold transition-all",
                activeTab === "ready"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Ready-Made
            </button>
            <button
              onClick={() => setActiveTab("custom")}
              className={cn(
                "px-8 py-3 rounded-full text-sm font-semibold transition-all",
                activeTab === "custom"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Custom Built
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">

          {/* ── READY-MADE TAB ── */}
          {activeTab === "ready" && (
            <motion.div
              key="ready"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Template Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                >
                  {filtered.map((site, i) => (
                    <motion.div
                      key={site.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/50"
                    >
                      {/* Preview Header */}
                      <div className={cn(
                        "aspect-[16/10] bg-gradient-to-br p-4 relative",
                        site.color
                      )}>
                        <div className="w-full h-full bg-card/90 rounded-xl border border-border/50 backdrop-blur-sm p-3 flex flex-col">
                          <div className="flex gap-1.5 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                          </div>
                          <div className="flex-1 flex items-center justify-center">
                            <site.icon className="w-12 h-12 text-primary/50" />
                          </div>
                        </div>
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <a
                            href={site.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button variant="outline" size="sm" className="gap-2">
                              <Eye className="w-4 h-4" />
                              Preview
                            </Button>
                          </a>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-foreground">{site.name}</h3>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground line-through">{site.originalPrice}</span>
                            <span className="text-xl font-bold text-primary">{site.price}</span>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-2">
                          {site.industry}
                        </p>
                        <p className="text-sm text-muted-foreground mb-4">{site.description}</p>
                        <ul className="space-y-2 mb-6">
                          {site.features.slice(0, 4).map((feature) => (
                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Check className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {site.features.length > 4 && (
                            <li className="text-sm text-primary font-medium">
                              +{site.features.length - 4} more features
                            </li>
                          )}
                        </ul>
                        <Link href="#intake-form">
                          <Button className="w-full bg-secondary hover:bg-secondary/80 text-foreground group/btn">
                            Choose This Template
                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Ready-Made Bottom CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <p className="text-muted-foreground mb-4">
                  Want something completely custom?
                </p>
                <Button
                  variant="outline"
                  className="gap-2"
                  onClick={() => setActiveTab("custom")}
                >
                  View Custom Packages
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* ── CUSTOM BUILT TAB ── */}
          {activeTab === "custom" && (
            <motion.div
              key="custom"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {packages.map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={cn(
                      "relative p-8 rounded-3xl border transition-all duration-300",
                      pkg.popular
                        ? "bg-card border-primary shadow-xl shadow-primary/10 scale-105"
                        : "bg-card/50 border-border/50 hover:border-primary/30"
                    )}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}

                    {/* Icon + Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn(
                        "p-3 rounded-xl",
                        pkg.popular ? "bg-primary/20" : "bg-primary/10"
                      )}>
                        <pkg.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
                    </div>

                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground ml-2">starting</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">Range: {pkg.priceRange}</p>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>

                    {/* Best For */}
                    <div className="mb-4 text-sm">
                      <span className="text-accent font-medium">Best for: {pkg.bestFor}</span>
                    </div>

                    {/* Delivery */}
                    <div className="mb-5 py-3 px-4 rounded-xl bg-secondary/50 text-sm">
                      <span className="text-muted-foreground">Delivery: </span>
                      <span className="text-foreground font-medium">{pkg.delivery}</span>
                    </div>

                    {/* Industries */}
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Great for</p>
                      <div className="flex flex-wrap gap-1">
                        {pkg.industries.map(industry => (
                          <span key={industry} className="text-xs px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Platforms */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Platforms</p>
                      <div className="flex flex-wrap gap-1">
                        {pkg.platforms.map(platform => (
                          <span key={platform} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border/50">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                                        <ul className="space-y-3 mb-4">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {pkg.name !== "Premium" && (
                      <Link
                        href="/addons"
                        className="flex items-center gap-2 text-sm text-primary hover:underline mb-6 font-medium"
                      >
                        <span>+ View Available Add-Ons</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}


                    <Link href="#intake-form">
                      <Button
                        className={cn(
                          "w-full py-6 text-lg group",
                          pkg.popular
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                            : "bg-secondary hover:bg-secondary/80 text-foreground"
                        )}
                      >
                        Get Started
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Custom Built Bottom Note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12 space-y-3"
            >
              <p className="text-muted-foreground">
                All packages include a 50% deposit to start. Not sure which is right for you?{" "}
                <Link href="/#intake-form" className="text-primary hover:underline font-medium">
                  Get a custom quote
                </Link>{" "}
                tailored to your specific needs.
              </p>
              <p className="text-muted-foreground">
                Want to enhance your package?{" "}
                <Link href="/addons" className="text-primary hover:underline font-medium">
                  View all package add-ons →
                </Link>
              </p>
            </motion.div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  )
}