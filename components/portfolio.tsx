"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = ["All", "E-Commerce", "Portfolio", "Business", "Landing Page"]

const projects = [
  {
    title: "Luxe Boutique",
    category: "E-Commerce",
    description: "High-end fashion e-commerce store with seamless checkout",
    color: "from-pink-500/20 to-orange-500/20",
    tags: ["Shopify", "Custom Design", "Payment Integration"],
  },
  {
    title: "Tech Startup Landing",
    category: "Landing Page",
    description: "Conversion-focused landing page for SaaS product launch",
    color: "from-blue-500/20 to-cyan-500/20",
    tags: ["Lead Generation", "Animations", "A/B Tested"],
  },
  {
    title: "Creative Studio",
    category: "Portfolio",
    description: "Stunning portfolio showcasing photography and design work",
    color: "from-purple-500/20 to-pink-500/20",
    tags: ["Gallery", "Custom Animations", "Mobile First"],
  },
  {
    title: "Legal Partners LLP",
    category: "Business",
    description: "Professional law firm website with client portal",
    color: "from-emerald-500/20 to-teal-500/20",
    tags: ["Professional", "Contact Forms", "SEO Optimized"],
  },
  {
    title: "Artisan Coffee Co",
    category: "E-Commerce",
    description: "Subscription-based coffee delivery with online ordering",
    color: "from-amber-500/20 to-orange-500/20",
    tags: ["Subscriptions", "E-commerce", "Blog"],
  },
  {
    title: "Fitness Coach Pro",
    category: "Landing Page",
    description: "Personal trainer booking site with scheduling integration",
    color: "from-red-500/20 to-pink-500/20",
    tags: ["Booking System", "Lead Capture", "Video Integration"],
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Websites That{" "}
            <span className="text-primary">Deliver Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              layout
              className="group relative rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Project Preview */}
              <div className={cn(
                "aspect-[4/3] bg-gradient-to-br p-6 flex items-end",
                project.color
              )}>
                <div className="w-full h-full bg-card/80 rounded-xl border border-border/50 backdrop-blur-sm p-4 flex flex-col">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 bg-muted rounded w-3/4" />
                    <div className="h-3 bg-muted rounded w-1/2" />
                    <div className="h-3 bg-muted rounded w-2/3" />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <div className="h-6 bg-primary/30 rounded w-16" />
                    <div className="h-6 bg-muted rounded w-20" />
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-card">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-primary font-medium">{project.category}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
          <Link href="#intake-form">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
