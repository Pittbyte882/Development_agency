import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const addonCategories = [
  {
    title: "Design & Pages",
    addons: [
      { name: "Additional page", price: "$150–$250 per page" },
      { name: "Landing page design", price: "$250–$500" },
      { name: "Logo design", price: "$250–$500" },
      { name: "Brand identity package", price: "$500–$1,000" },
      { name: "Custom illustrations", price: "$175–$400" },
      { name: "Banner & social graphics", price: "$100–$250" },
    ],
  },
  {
    title: "Development & Integrations",
    addons: [
      { name: "E-commerce setup (Shopify/WooCommerce)", price: "$500–$1,200" },
      { name: "Booking system integration", price: "$250–$600" },
      { name: "Custom API integration", price: "$350–$800" },
      { name: "Payment gateway setup", price: "$175–$350" },
      { name: "Membership/login system", price: "$500–$1,000" },
      { name: "Custom plugin/app development", price: "$125–$175/hr" },
      { name: "Database setup", price: "$250–$600" },
      { name: "Third-party tool integration", price: "$175–$500" },
    ],
  },
  {
    title: "Content & Copywriting",
    addons: [
      { name: "Website copywriting (per page)", price: "$125–$250" },
      { name: "Blog post writing", price: "$125–$200 per post" },
      { name: "SEO content writing", price: "$175–$250 per page" },
      { name: "Product descriptions (per 10)", price: "$100–$175" },
      { name: "Email sequence writing (5 emails)", price: "$250–$500" },
    ],
  },
  {
    title: "SEO & Marketing",
    addons: [
      { name: "Advanced SEO audit & setup", price: "$350–$650" },
      { name: "Google Business profile setup", price: "$125–$250" },
      { name: "Google Ads campaign setup", price: "$350–$650" },
      { name: "Meta/Facebook Ads setup", price: "$350–$650" },
      { name: "Monthly ad management", price: "$250–$500/mo" },
      { name: "Email marketing setup (Klaviyo/Mailchimp)", price: "$250–$500" },
      { name: "Monthly SEO management", price: "$350–$800/mo" },
    ],
  },
  {
    title: "Technical & Hosting",
    addons: [
      { name: "Domain setup & configuration", price: "$100 flat" },
      { name: "Hosting setup & migration", price: "$125–$250" },
      { name: "SSL certificate setup", price: "$100 flat" },
      { name: "Website speed optimization", price: "$175–$350" },
      { name: "Security hardening", price: "$175–$350" },
      { name: "Emergency support (after hours)", price: "$150–$200/hr" },
      { name: "Website backup & recovery", price: "$125–$250" },
    ],
  },
  {
    title: "Maintenance Add-Ons",
    addons: [
      { name: "Extra content updates (beyond plan limit)", price: "$125–$175/hr" },
      { name: "New page added to existing site", price: "$250–$500" },
      { name: "E-commerce product bulk upload", price: "$100–$150/hr" },
      { name: "Emergency malware removal", price: "$250 flat" },
      { name: "Platform migration", price: "$500–$1,200" },
      { name: "Rush delivery (50% faster turnaround)", price: "+30% of project cost" },
      { name: "Multiple site discount", price: "Contact for quote" },
    ],
  },
]

export default function AddOnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Package Add-Ons
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Enhance Your{" "}
            <span className="text-primary">Package</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Need something extra? Add any of these services to your existing
            package at checkout or any time after launch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Add to any package
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              Mix and match
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              No minimums on bundles
            </span>
          </div>
        </div>
      </section>

      {/* Minimum Project Fee Banner */}
      <section className="pb-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground mb-1">
                $250 Minimum Project Fee
              </p>
              <p className="text-sm text-muted-foreground">
                All add-on projects have a $250 minimum regardless of scope. This covers discovery, communication, setup, testing, and delivery. Add-ons totaling over $250 are billed at their listed price. Hourly rate is $125–$175/hr depending on complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons Grid */}
      <section className="py-8 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {addonCategories.map((category) => (
              <div
                key={category.title}
                className="p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
              >
                <h2 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border/50">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.addons.map((addon) => (
                    <div
                      key={addon.name}
                      className="flex items-center justify-between gap-4 group"
                    >
                      <div className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {addon.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-primary whitespace-nowrap">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Hourly Rate Card */}
          <div className="mt-8 p-8 rounded-3xl bg-card border border-border/50">
            <h2 className="text-xl font-bold text-foreground mb-4">
              Hourly Rate Services
            </h2>
            <p className="text-muted-foreground mb-4">
              Some services are billed hourly based on complexity and time required.
              All hourly work is scoped and estimated before starting — no surprise bills.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-secondary/50 text-center">
                <p className="text-2xl font-black text-primary mb-1">$125/hr</p>
                <p className="text-sm text-muted-foreground">Standard work</p>
                <p className="text-xs text-muted-foreground mt-1">Updates, content, basic dev</p>
              </div>
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 text-center">
                <p className="text-2xl font-black text-primary mb-1">$150/hr</p>
                <p className="text-sm text-muted-foreground">Complex work</p>
                <p className="text-xs text-muted-foreground mt-1">Integrations, custom features</p>
              </div>
              <div className="p-4 rounded-2xl bg-secondary/50 text-center">
                <p className="text-2xl font-black text-primary mb-1">$175/hr</p>
                <p className="text-sm text-muted-foreground">Advanced work</p>
                <p className="text-xs text-muted-foreground mt-1">Custom dev, APIs, emergency</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 p-10 rounded-3xl bg-card border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Fill out our intake form and let us know which add-ons you're
              interested in. We'll include them in your custom quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/#intake-form">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Get a Custom Quote
                </Button>
              </Link>
              <Link href="/#prebuilt-sites">
                <Button variant="outline" className="gap-2">
                  Browse Packages
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}