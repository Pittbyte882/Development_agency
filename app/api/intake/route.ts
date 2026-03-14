import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const {
      businessType, businessName, industry,
      name, email, phone,
      goals, currentWebsite, competitors,
      features, pages,
      budget, timeline,
      description, referralSource, additionalNotes,
    } = data

    const getRecommendedPackage = () => {
      const score =
        (businessType === "ecommerce" ? 3 : 0) +
        (features.length > 8 ? 2 : features.length > 4 ? 1 : 0) +
        (goals.includes("Sell products online") ? 2 : 0)
      if (score >= 4) return "Premium ($3,000-$5,000+)"
      if (score >= 2) return "Professional ($1,200-$2,000)"
      return "Starter ($500-$800)"
    }

    // Save to Supabase
  const { error: dbError } = await supabase
    .from("inquiries")
    .insert({
      name,
      email,
      phone,
      business_name: businessName,
      business_type: businessType,
      industry,
      goals,
      current_website: currentWebsite,
      competitors,
      features,
      pages,
      budget,
      timeline,
      description,
      referral_source: referralSource,
      additional_notes: additionalNotes,
      recommended_package: getRecommendedPackage(),
      status: "new",
    })

  if (dbError) {
    console.error("Supabase error:", dbError)
  }

    // Email 1 — Owner notification
    const ownerEmail = `
NEW WEBSITE INQUIRY — ReadySetGoSites
======================================

CONTACT INFO
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

BUSINESS INFO
Business Name: ${businessName}
Business Type: ${businessType}
Industry: ${industry || "Not provided"}

GOALS
${goals.join(", ")}

CURRENT WEBSITE: ${currentWebsite || "None"}
COMPETITORS: ${competitors || "None"}

FEATURES REQUESTED
${features.join(", ")}
Pages needed: ${pages || "Not specified"}

BUDGET: ${budget}
TIMELINE: ${timeline}

PROJECT DESCRIPTION
${description}

REFERRAL SOURCE: ${referralSource || "Not provided"}

ADDITIONAL NOTES
${additionalNotes || "None"}

RECOMMENDED PACKAGE: ${getRecommendedPackage()}
    `

    // Email 2 — Client confirmation
    const clientEmail = `
Hi ${name},

Thank you for reaching out to ReadySetGoSites! 🚀

We've received your website inquiry for ${businessName} and are excited to learn more about your project.

HERE'S A SUMMARY OF YOUR REQUEST
----------------------------------
Business: ${businessName}
Goals: ${goals.join(", ")}
Features: ${features.join(", ")}
Budget: ${budget}
Timeline: ${timeline}

RECOMMENDED PACKAGE
Based on your answers, we recommend our ${getRecommendedPackage()} for your project.

WHAT HAPPENS NEXT
----------------------------------
✓ We'll review your project requirements
✓ You'll receive a detailed proposal within 24 hours
✓ We'll reach out to schedule a free consultation call

If you have any questions feel free to reply to this email.

Talk soon,
The ReadySetGoSites Team
www.readysetgosites.com
    `

    // Send both emails at the same time
    const [ownerRes, clientRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "ReadySetGoSites <quotes@readysetgosites.com>",
          to: "quotes@readysetgosites.com",
          subject: `New Inquiry from ${name} — ${businessName}`,
          text: ownerEmail,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "ReadySetGoSites <quotes@readysetgosites.com>",
          reply_to: "sales@readysetgosites.com",
          to: email,
          subject: `We received your request, ${name}! Here's what's next 🚀`,
          text: clientEmail,
        }),
      }),
    ])

    if (!ownerRes.ok || !clientRes.ok) {
      throw new Error("Failed to send one or more emails")
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error("Intake form error:", error)
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    )
  }
}