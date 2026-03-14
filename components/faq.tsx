"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Our turnaround time depends on the package you choose. Starter sites take 1-2 weeks, Professional sites take 2-3 weeks, and Premium sites take 4-6 weeks. We'll give you an exact timeline during our consultation call based on your specific requirements.",
  },
  {
    question: "What's included in the price?",
    answer: "All packages include custom design, mobile responsiveness, basic SEO setup, and initial support. There are no hidden fees – the price covers everything from design mockups to launch. Additional features like e-commerce, booking systems, or custom integrations are priced separately or included in higher-tier packages.",
  },
  {
    question: "Do I own my website after it's built?",
    answer: "Absolutely! You have 100% ownership of your website, including all design files, code, and content. There are no lock-in contracts or ongoing fees required to keep your site. You're free to host it anywhere and make changes as you see fit.",
  },
  {
    question: "What if I need changes after launch?",
    answer: "Each package includes a certain number of revision rounds during development. After launch, Starter packages include 30 days of email support, Professional includes 60 days of priority support, and Premium includes 30 days of dedicated post-launch support plus a training session. We also offer ongoing maintenance plans.",
  },
  {
    question: "Do you provide hosting and domain setup?",
    answer: "We help you set up hosting and domain registration, but these are separate costs billed directly to you through providers like Vercel, GoDaddy, or Namecheap. This ensures you have full control and ownership of your hosting and domain accounts.",
  },
  {
    question: "Can you help with branding and logos?",
    answer: "Yes! While our core packages focus on web design, we can create logos and develop brand guidelines as an add-on service. Let us know during your consultation if you need branding help, and we'll include it in your custom quote.",
  },
  {
    question: "What information do you need from me to get started?",
    answer: "We'll need your business information, content (text and images), any branding guidelines, examples of websites you like, and your goals for the site. Don't worry – we'll guide you through everything during our discovery process and can help with content strategy if needed.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options. Typically, we require 50% upfront to begin the project and 50% upon completion. For Premium packages, we can discuss milestone-based payments. Let us know if you need a custom arrangement.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We&apos;ve got answers. If you don&apos;t see your question here, feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card/50 border border-border/50 rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
