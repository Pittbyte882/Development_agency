"use client"

import { motion } from "framer-motion"
import { MessageSquare, Palette, Code, Rocket, ArrowDown } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery Call",
    description: "We start with a free consultation to understand your business, goals, and vision for your website. No commitment required.",
    duration: "30 min call",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design & Planning",
    description: "We create custom mockups and wireframes tailored to your brand. You'll see exactly how your site will look before we build.",
    duration: "3-5 days",
  },
  {
    icon: Code,
    number: "03",
    title: "Development",
    description: "Our team brings your design to life with clean, fast, and responsive code. You'll get regular updates throughout the process.",
    duration: "1-4 weeks",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Support",
    description: "We test everything thoroughly, then launch your site to the world. We provide ongoing support to ensure your success.",
    duration: "Ongoing",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            From Idea to{" "}
            <span className="text-primary">Launch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process makes getting your website simple and stress-free.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex gap-6 md:gap-8">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="flex-1 w-0.5 bg-gradient-to-b from-primary/50 to-border my-4 min-h-[80px]" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-primary font-mono text-sm">{step.number}</span>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <div className="inline-flex items-center gap-2 text-primary">
            <ArrowDown className="w-5 h-5 animate-bounce" />
            <span className="font-medium">Ready to get started? Fill out our quick form below</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
