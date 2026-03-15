"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Eye, ShoppingCart, Briefcase, Camera, Utensils, Dumbbell, Coffee, ChefHat, UtensilsCrossed, PersonStanding, Leaf, Rocket, Shield, Code, Sparkles, Palette, TrendingUp, Users, Scale, Lightbulb, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Templates" },
  { id: "food", label: "Food & Culinary" },
  { id: "health", label: "Health & Fitness" },
  { id: "tech", label: "Tech & SaaS" },
  { id: "creative", label: "Creative & Creators" },
  { id: "agency", label: "Agency & Professional" },
  { id: "startup", label: "Startups & Business" },
]

const prebuiltSites = [
  // Food & Culinary
  {
    id: "restaurant", category: "food",
    name: "The Grand Table",
    industry: "Restaurant",
    icon: Utensils,
    price: "$599", originalPrice: "$800",
    description: "Perfect for restaurants, cafes, and food businesses",
    color: "from-orange-500/20 to-red-500/20",
    features: ["Menu display with photos", "Online reservation form", "Location & hours section", "Photo gallery", "Contact form", "Mobile responsive"],
    demoUrl: "https://restaurant.readysetgosites.com",
  },
  {
    id: "cafe", category: "food",
    name: "Brew & Bloom",
    industry: "Café",
    icon: Coffee,
    price: "$549", originalPrice: "$750",
    description: "Cozy café site with seasonal menu and online ordering",
    color: "from-amber-500/20 to-yellow-500/20",
    features: ["Seasonal menu display", "Online ordering setup", "Events calendar", "Photo gallery", "Contact form", "Mobile responsive"],
    demoUrl: "https://cafe.readysetgosites.com",
  },
  {
    id: "chef", category: "food",
    name: "Chef's Table",
    industry: "Personal Chef",
    icon: ChefHat,
    price: "$599", originalPrice: "$800",
    description: "Sophisticated personal chef portfolio with booking",
    color: "from-green-500/20 to-emerald-500/20",
    features: ["Chef portfolio & bio", "Menu showcase", "Booking form", "Client testimonials", "Contact form", "Mobile responsive"],
    demoUrl: "https://chef.readysetgosites.com",
  },
  {
    id: "catering", category: "food",
    name: "Feast & Co",
    industry: "Catering",
    icon: UtensilsCrossed,
    price: "$599", originalPrice: "$800",
    description: "Professional catering company with packages and inquiry form",
    color: "from-rose-500/20 to-pink-500/20",
    features: ["Service packages", "Photo gallery", "Inquiry form", "Pricing display", "Contact form", "Mobile responsive"],
    demoUrl: "https://catering.readysetgosites.com",
  },
  // Health & Fitness
  {
    id: "gym", category: "health",
    name: "Iron & Grit",
    industry: "Gym & Fitness",
    icon: Dumbbell,
    price: "$599", originalPrice: "$750",
    description: "High-energy gym site with membership plans and class schedule",
    color: "from-green-500/20 to-emerald-500/20",
    features: ["Class schedule display", "Membership plans", "Trainer profiles", "Before/after gallery", "Contact form", "Booking integration ready"],
    demoUrl: "https://gym.readysetgosites.com",
  },
  {
    id: "trainer", category: "health",
    name: "Peak Performance",
    industry: "Personal Trainer",
    icon: PersonStanding,
    price: "$599", originalPrice: "$750",
    description: "Personal trainer site with transformation gallery and bookings",
    color: "from-blue-500/20 to-indigo-500/20",
    features: ["Trainer bio & credentials", "Program packages", "Transformation gallery", "Booking form", "Contact form", "Mobile responsive"],
    demoUrl: "https://trainer.readysetgosites.com",
  },
  {
    id: "yoga", category: "health",
    name: "Flow State",
    industry: "Yoga & Wellness",
    icon: Leaf,
    price: "$549", originalPrice: "$750",
    description: "Calming yoga studio with class bookings and instructor profiles",
    color: "from-teal-500/20 to-cyan-500/20",
    features: ["Class schedule", "Instructor profiles", "Booking system", "Wellness blog", "Contact form", "Mobile responsive"],
    demoUrl: "https://yoga.readysetgosites.com",
  },
  // Tech & SaaS
  {
    id: "saas", category: "tech",
    name: "LaunchPad",
    industry: "SaaS",
    icon: Rocket,
    price: "$699", originalPrice: "$900",
    description: "Modern SaaS landing page with pricing, features, and demo CTA",
    color: "from-violet-500/20 to-purple-500/20",
    features: ["Feature showcase", "Pricing tiers", "Demo CTA", "Testimonials", "FAQ section", "Analytics ready"],
    demoUrl: "https://saas.readysetgosites.com",
  },
  {
    id: "security", category: "tech",
    name: "SecureStack",
    industry: "Cybersecurity",
    icon: Shield,
    price: "$699", originalPrice: "$900",
    description: "Trust-building cybersecurity firm with services and case studies",
    color: "from-green-500/20 to-emerald-500/20",
    features: ["Services showcase", "Case studies", "Trust badges", "Team profiles", "Contact form", "Mobile responsive"],
    demoUrl: "https://security.readysetgosites.com",
  },
  {
    id: "software", category: "tech",
    name: "AppForge",
    industry: "Software / App Dev",
    icon: Code,
    price: "$699", originalPrice: "$900",
    description: "Software company site with product showcase and team profiles",
    color: "from-blue-500/20 to-sky-500/20",
    features: ["Product showcase", "Team profiles", "Portfolio section", "Pricing plans", "Contact form", "Mobile responsive"],
    demoUrl: "https://software.readysetgosites.com",
  },
  // Creative & Creators
  {
    id: "photography", category: "creative",
    name: "Lens & Light",
    industry: "Photographer",
    icon: Camera,
    price: "$549", originalPrice: "$700",
    description: "Stunning photography portfolio with galleries and booking",
    color: "from-amber-500/20 to-orange-500/20",
    features: ["Gallery with lightbox", "About me section", "Services/offerings page", "Testimonials", "Contact form", "Social media links"],
    demoUrl: "https://photo.readysetgosites.com",
  },
  {
    id: "creator", category: "creative",
    name: "The Creator Hub",
    industry: "Influencer / Creator",
    icon: Sparkles,
    price: "$549", originalPrice: "$700",
    description: "Creator site with media kit, brand deals, and social links",
    color: "from-fuchsia-500/20 to-pink-500/20",
    features: ["Media kit page", "Brand partnerships", "Social links hub", "Content showcase", "Contact form", "Mobile responsive"],
    demoUrl: "https://creator.readysetgosites.com",
  },
  {
    id: "portfolio", category: "creative",
    name: "Folio Pro",
    industry: "Portfolio",
    icon: Palette,
    price: "$549", originalPrice: "$700",
    description: "Clean developer or designer portfolio with project showcase",
    color: "from-purple-500/20 to-pink-500/20",
    features: ["Project showcase", "Skills section", "About me page", "Testimonials", "Contact form", "Social media links"],
    demoUrl: "https://portfolio.readysetgosites.com",
  },
  // Agency & Professional
  {
    id: "marketing", category: "agency",
    name: "Amplify Agency",
    industry: "Marketing Agency",
    icon: TrendingUp,
    price: "$649", originalPrice: "$850",
    description: "Bold marketing agency site with case studies and results",
    color: "from-orange-500/20 to-amber-500/20",
    features: ["Case studies", "Services showcase", "Team profiles", "Client results", "Contact form", "Mobile responsive"],
    demoUrl: "https://agency.readysetgosites.com",
  },
  {
    id: "recruitment", category: "agency",
    name: "TalentBridge",
    industry: "Recruitment Agency",
    icon: Users,
    price: "$649", originalPrice: "$850",
    description: "Recruitment agency with job listings and candidate portal",
    color: "from-blue-500/20 to-indigo-500/20",
    features: ["Job listings", "Candidate portal", "Services page", "Team profiles", "Contact form", "Mobile responsive"],
    demoUrl: "https://recruit.readysetgosites.com",
  },
  {
    id: "law", category: "agency",
    name: "Counsel Pro",
    industry: "Law Firm",
    icon: Scale,
    price: "$649", originalPrice: "$850",
    description: "Professional law firm site with practice areas and attorney profiles",
    color: "from-stone-500/20 to-neutral-500/20",
    features: ["Practice areas", "Attorney profiles", "Case results", "FAQ section", "Contact form", "Mobile responsive"],
    demoUrl: "https://law.readysetgosites.com",
  },
  // Startups & Business
  {
    id: "startup", category: "startup",
    name: "Venture Launch",
    industry: "Startup",
    icon: Lightbulb,
    price: "$649", originalPrice: "$850",
    description: "Investor-ready startup site with pitch deck and team section",
    color: "from-violet-500/20 to-indigo-500/20",
    features: ["Product pitch section", "Team profiles", "Investor info", "Roadmap display", "Contact form", "Mobile responsive"],
    demoUrl: "https://startup.readysetgosites.com",
  },
  {
    id: "ecommerce", category: "startup",
    name: "ShopFront",
    industry: "E-Commerce",
    icon: ShoppingBag,
    price: "$899", originalPrice: "$1,200",
    description: "Ready-to-sell e-commerce brand site with product showcase",
    color: "from-pink-500/20 to-rose-500/20",
    features: ["Product catalog", "Shopping cart", "Checkout integration", "Customer reviews", "Category filtering", "Inventory management"],
    demoUrl: "https://ecom.readysetgosites.com",
  },
]

export function PrebuiltSites() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered = activeCategory === "all"
    ? prebuiltSites
    : prebuiltSites.filter(t => t.category === activeCategory)

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Quick Launch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ready-to-Go{" "}
            <span className="text-primary">Website Templates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Need to launch fast? Choose from our pre-built templates and be online in days.
            Each can be customized to match your brand.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
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
                {/* Preview Header — exact same structure as original */}
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

                  {/* Demo Button Overlay */}
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

                {/* Content — exact same structure as original */}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want something completely custom?
          </p>
          <Link href="#packages">
            <Button variant="outline" className="gap-2">
              View Custom Packages
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}