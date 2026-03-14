"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Founder, Bloom Boutique",
    content: "ReadySetGoSites transformed my vision into reality. My online store now looks incredible and sales have increased by 150% since launch!",
    rating: 5,
    package: "Premium",
  },
  {
    name: "James Rodriguez",
    role: "CEO, TechStart Inc",
    content: "The team delivered our landing page in just 10 days. The attention to detail and conversion optimization exceeded our expectations.",
    rating: 5,
    package: "Professional",
  },
  {
    name: "Emily Chen",
    role: "Freelance Photographer",
    content: "As a creative, I needed a portfolio that would wow clients. They nailed it! The site is beautiful, fast, and gets me bookings daily.",
    rating: 5,
    package: "Starter",
  },
  {
    name: "Michael Thompson",
    role: "Owner, Thompson Legal",
    content: "Professional, responsive, and incredibly talented. Our new website has brought in more clients than any advertising we've done.",
    rating: 5,
    package: "Professional",
  },
  {
    name: "Lisa Park",
    role: "Founder, Wellness Studio",
    content: "From concept to launch, the entire experience was seamless. They understood my brand perfectly and created something truly special.",
    rating: 5,
    package: "Premium",
  },
  {
    name: "David Kim",
    role: "Restaurant Owner",
    content: "Our new website with online ordering has been a game-changer. Orders are up 200% and customers love how easy it is to use.",
    rating: 5,
    package: "Premium",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Client Love
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Clients{" "}
            <span className="text-primary">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our happy clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-muted-foreground">
                  {testimonial.package}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
