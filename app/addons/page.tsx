import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const addonCategories = [
  {
    title: "Design & Pages",
    addons: [
      { name: "Additional page", price: "$75–$150 per page" },
      { name: "Landing page design", price: "$150–$300" },
      { name: "Logo design", price: "$150–$300" },
      { name: "Brand identity package", price: "$300–$600" },
      { name: "Custom illustrations", price: "$100–$250" },
      { name: "Banner & social graphics", price: "$50–$150" },
    ],
  },
  {
    title: "Development & Integrations",
    addons: [
      { name: "E-commerce setup (Shopify/WooCommerce)", price: "$300–$800" },
      { name: "Booking system integration", price: "$150–$400" },
      { name: "Custom API integration", price: "$200–$500" },
      { name: "Payment gateway setup", price: "$100–$200" },
      { name: "Membership/login system", price: "$300–$600" },
      { name: "Custom plugin/app development", price: "$100/hr" },
      { name: "Database setup", price: "$150–$400" },
      { name: "Third-party tool integration", price: "$100–$300" },
    ],
  },
  {
    title: "Content & Copywriting",
    addons: [
      { name: "Website copywriting (per page)", price: "$75–$150" },
      { name: "Blog post writing", price: "$75–$125 per post" },
      { name: "SEO content writing", price: "$100–$150 per page" },
      { name: "Product descriptions (per 10)", price: "$50–$100" },
      { name: "Email sequence writing (5 emails)", price: "$150–$300" },
    ],
  },
  {
    title: "SEO & Marketing",
    addons: [
      { name: "Advanced SEO audit & setup", price: "$200–$400" },
      { name: "Google Business profile setup", price: "$75–$150" },
      { name: "Google Ads campaign setup", price: "$200–$400" },
      { name: "Meta/Facebook Ads setup", price: "$200–$400" },
      { name: "Monthly ad management", price: "$150–$300/mo" },
      { name: "Email marketing setup (Klaviyo/Mailchimp)", price: "$150–$300" },
      { name: "Monthly SEO management", price: "$200–$500/mo" },
    ],
  },
  {
    title: "Technical & Hosting",
    addons: [
      { name: "Domain setup & configuration", price: "$50 flat" },
      { name: "Hosting setup & migration", price: "$75–$150" },
      { name: "SSL certificate setup", price: "$50 flat" },
      { name: "Website speed optimization", price: "$100–$200" },
      { name: "Security hardening", price: "$100–$200" },
      { name: "Emergency support (after hours)", price: "$75–$100/hr" },
      { name: "Website backup & recovery", price: "$75–$150" },
    ],
  },
  {
    title: "Maintenance Add-Ons",
    addons: [
      { name: "Extra content updates (beyond plan limit)", price: "$50/hr" },
      { name: "New page added to existing site", price: "$150–$300" },
      { name: "E-commerce product bulk upload", price: "$50–$75/hr" },
      { name: "Emergency malware removal", price: "$150 flat" },
      { name: "Platform migration", price: "$300–$800" },
      { name: "Rush delivery (50% faster turnaround)", price: "+25% of project cost" },
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
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Package Add-Ons
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
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
              No minimums
            </span>
          </div>
        </div>
      </section>

      {/* Add-Ons Grid */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {addonCategories.map((category) => (
              <div
                key={category.title}
                className="p-8 rounded-3xl bg-card border border-border/50"
              >
                <h2 className="text-xl font-bold text-foreground mb-6 pb-4 border-b border-border/50">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.addons.map((addon) => (
                    <div
                      key={addon.name}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
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

          {/* CTA */}
          <div className="text-center mt-16 p-10 rounded-3xl bg-card border border-primary/20">
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