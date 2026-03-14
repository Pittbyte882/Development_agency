"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Eye, ShoppingCart, Briefcase, Camera, Utensils, Dumbbell } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

const prebuiltSites = [
  {
    id: "restaurant",
    name: "Restaurant Pro",
    icon: Utensils,
    price: "$599",
    originalPrice: "$800",
    description: "Perfect for restaurants, cafes, and food businesses",
    color: "from-orange-500/20 to-red-500/20",
    features: [
      "Menu display with photos",
      "Online reservation form",
      "Location & hours section",
      "Photo gallery",
      "Contact form",
      "Mobile responsive",
    ],
    demoUrl: "#",
  },
  {
    id: "portfolio",
    name: "Creative Portfolio",
    icon: Camera,
    price: "$549",
    originalPrice: "$700",
    description: "Showcase your work with style",
    color: "from-purple-500/20 to-pink-500/20",
    features: [
      "Gallery with lightbox",
      "About me section",
      "Services/offerings page",
      "Testimonials",
      "Contact form",
      "Social media links",
    ],
    demoUrl: "#",
  },
  {
    id: "business",
    name: "Business Starter",
    icon: Briefcase,
    price: "$649",
    originalPrice: "$850",
    description: "Professional presence for small businesses",
    color: "from-blue-500/20 to-cyan-500/20",
    features: [
      "Services showcase",
      "Team member profiles",
      "Client testimonials",
      "FAQ section",
      "Contact form with map",
      "Google Analytics ready",
    ],
    demoUrl: "#",
  },
  {
    id: "fitness",
    name: "Fitness Coach",
    icon: Dumbbell,
    price: "$599",
    originalPrice: "$750",
    description: "Ideal for personal trainers and gyms",
    color: "from-green-500/20 to-emerald-500/20",
    features: [
      "Class schedule display",
      "Trainer profiles",
      "Pricing/membership plans",
      "Before/after gallery",
      "Contact form",
      "Booking integration ready",
    ],
    demoUrl: "#",
  },
  {
    id: "ecommerce",
    name: "Shop Starter",
    icon: ShoppingCart,
    price: "$899",
    originalPrice: "$1,200",
    description: "Ready-to-sell e-commerce template",
    color: "from-pink-500/20 to-rose-500/20",
    features: [
      "Product catalog",
      "Shopping cart",
      "Checkout integration",
      "Customer reviews",
      "Category filtering",
      "Inventory management",
    ],
    demoUrl: "#",
  },
]

export function PrebuiltSites() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {prebuiltSites.map((site, i) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                
                {/* Demo Button Overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="w-4 h-4" />
                    Preview
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{site.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">{site.originalPrice}</span>
                    <span className="text-xl font-bold text-primary">{site.price}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{site.description}</p>

                <ul className="space-y-2 mb-6">
                  {site.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {site.features.length > 4 && (
                    <li className="text-sm text-primary">
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
        </div>

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
