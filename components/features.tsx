"use client"

import { motion } from "framer-motion"
import {
  Smartphone,
  Search,
  Zap,
  Shield,
  Palette,
  HeadphonesIcon,
  Gauge,
  Globe,
  Lock,
  ShoppingCart,
  Calendar,
  Code,
  BarChart3,
  Users,
} from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Blazing Fast Delivery",
    description: "Templates delivered in 1–2 weeks. Custom builds in 2–8 weeks. We move fast without cutting corners.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every website is fully responsive and looks stunning on all devices from phones to desktops.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built-in SEO best practices and Google Analytics setup so your customers find you from day one.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Your colors, your fonts, your vibe. Every site is fully customized to match your brand identity.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Ready",
    description: "Sell products online with Shopify or WooCommerce integration built right in to your store.",
  },
  {
    icon: Calendar,
    title: "Booking & Scheduling",
    description: "Perfect for gyms, trainers, chefs, and service businesses. Let clients book online 24/7.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL certificates, regular backups, and security monitoring. Your site is always safe and online.",
  },
  {
    icon: Code,
    title: "Multi-Platform Builds",
    description: "We build on Next.js, Webflow, WordPress, or Shopify — whatever fits your business best.",
  },
  {
    icon: Users,
    title: "Industry Specific",
    description: "Templates and features built for restaurants, gyms, agencies, creators, SaaS, and more.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Tracking",
    description: "Google Analytics and conversion tracking so you know exactly how your site performs.",
  },
  {
    icon: Gauge,
    title: "Lightning Fast Performance",
    description: "Optimized for speed with performance scores of 90+ to keep visitors engaged and reduce bounce rates.",
  },
  {
    icon: Lock,
    title: "You Own Everything",
    description: "Full ownership of your website, content, and code. No lock-in contracts or hidden fees ever.",
  },
  {
    icon: Globe,
    title: "Social Integration",
    description: "Connect your social media profiles and enable easy sharing to expand your reach online.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Monthly maintenance plans to keep your site updated, secure, and performing at its best.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Built for{" "}
            <span className="text-primary">Every Industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you run a restaurant, a SaaS company, a gym, or a creative
            agency — we have the features and templates to launch your perfect site.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}