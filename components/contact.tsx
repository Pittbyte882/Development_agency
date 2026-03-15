import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Email */}
          <div className="p-6 rounded-2xl bg-card border border-border/50 text-center group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
            <p className="text-xs text-muted-foreground mb-3">We reply within 24 hours</p>
            <a
              href="mailto:sales@readysetgosites.com"
              className="text-sm text-primary hover:underline break-all"
            >
              sales@readysetgosites.com
            </a>
          </div>

          {/* Quotes */}
          <div className="p-6 rounded-2xl bg-card border border-border/50 text-center group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Get a Quote</h3>
            <p className="text-xs text-muted-foreground mb-3">Project inquiries & pricing</p>
            <a
              href="mailto:quotes@readysetgosites.com"
              className="text-sm text-primary hover:underline break-all"
            >
              quotes@readysetgosites.com
            </a>
          </div>

          {/* Orders */}
          <div className="p-6 rounded-2xl bg-card border border-border/50 text-center group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Existing Clients</h3>
            <p className="text-xs text-muted-foreground mb-3">Orders & project updates</p>
            <a
              href="mailto:orders@readysetgosites.com"
              className="text-sm text-primary hover:underline break-all"
            >
              orders@readysetgosites.com
            </a>
          </div>

          {/* Hours */}
          <div className="p-6 rounded-2xl bg-card border border-border/50 text-center group hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
            <p className="text-xs text-muted-foreground mb-3">When we're available</p>
            <p className="text-sm text-muted-foreground">Mon–Fri</p>
            <p className="text-sm text-primary font-medium">9am–6pm EST</p>
          </div>
        </div>
      </div>
    </section>
  )
}