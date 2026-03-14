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
  Lock
} from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every website is fully responsive and looks stunning on all devices, from phones to desktops.",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built-in SEO best practices to help your site rank higher and get discovered by more customers.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with performance scores of 90+ to keep visitors engaged and reduce bounce rates.",
  },
  {
    icon: Palette,
    title: "Custom Branding",
    description: "Your website reflects your unique brand identity with custom colors, fonts, and imagery.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL certificates, regular backups, and enterprise-grade security to protect your business.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Get help when you need it with our responsive customer support and post-launch assistance.",
  },
  {
    icon: Gauge,
    title: "Analytics Ready",
    description: "Google Analytics integration to track visitors, conversions, and understand your audience.",
  },
  {
    icon: Globe,
    title: "Social Integration",
    description: "Connect your social media profiles and enable easy sharing to expand your reach.",
  },
  {
    icon: Lock,
    title: "You Own Everything",
    description: "Full ownership of your website, content, and code. No lock-in contracts or hidden fees.",
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
            Everything You Need to{" "}
            <span className="text-primary">Succeed Online</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just build websites. We create digital experiences that drive results for your business.
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
