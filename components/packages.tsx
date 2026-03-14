"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const packages = [
  {
    name: "Starter",
    icon: Zap,
    price: "$500",
    priceRange: "$500–$800",
    bestFor: "Solo businesses or freelancers",
    delivery: "1–2 weeks",
    popular: false,
    features: [
      "3–5 custom pages",
      "Mobile responsive design",
      "Contact form setup",
      "Basic SEO optimization",
      "Social media links",
      "1 round of revisions",
      "Domain setup assistance",
      "30-day email support",
    ],
  },
  {
    name: "Professional",
    icon: Star,
    price: "$1,200",
    priceRange: "$1,200–$2,000",
    bestFor: "Small businesses",
    delivery: "2–3 weeks",
    popular: true,
    features: [
      "Up to 8 custom pages",
      "Premium custom design",
      "Blog setup & integration",
      "Google Analytics integration",
      "Advanced SEO setup",
      "Social media integration",
      "2 rounds of revisions",
      "Speed optimization",
      "60-day priority support",
    ],
  },
  {
    name: "Premium",
    icon: Crown,
    price: "$3,000",
    priceRange: "$3,000–$5,000+",
    bestFor: "Established businesses or e-commerce",
    delivery: "4–6 weeks",
    popular: false,
    features: [
      "Up to 15 pages or full online store",
      "Fully custom, conversion-focused design",
      "E-commerce / payment integration",
      "Advanced SEO & schema markup",
      "Speed & performance optimization",
      "Custom animations & interactions",
      "Unlimited revisions",
      "30-day post-launch support",
      "Training session included",
      "Priority ongoing support",
    ],
  },
]

export function Packages() {
  return (
    <section id="packages" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your Perfect{" "}
            <span className="text-primary">Package</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, straightforward pricing with no hidden fees. 
            Pick the package that fits your needs and budget.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

              <div className="flex items-center gap-3 mb-4">
                <div className={cn(
                  "p-3 rounded-xl",
                  pkg.popular ? "bg-primary/20" : "bg-primary/10"
                )}>
                  <pkg.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground ml-2">starting</span>
              </div>
              
              <p className="text-sm text-muted-foreground mb-2">
                Range: {pkg.priceRange}
              </p>
              
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="text-accent font-medium">Best for: {pkg.bestFor}</span>
              </div>
              
              <div className="mb-6 py-3 px-4 rounded-xl bg-secondary/50 text-sm">
                <span className="text-muted-foreground">Delivery: </span>
                <span className="text-foreground font-medium">{pkg.delivery}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-12"
        >
          Not sure which package is right for you?{" "}
          <Link href="#intake-form" className="text-primary hover:underline font-medium">
            Get a custom quote
          </Link>{" "}
          tailored to your specific needs.
        </motion.p>
      </div>
    </section>
  )
}
