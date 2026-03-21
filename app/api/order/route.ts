import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const {
      template,
      yourName, email, phone,
      businessName, domainStatus, domainName,
      colorTheme, logoStatus,
      instagram, facebook, twitter,
      linkedin, youtube, tiktok,
      addOns, specialRequests, referral,
    } = data

    // ── Email to you (the agency) ──
    const agencyEmail = `
NEW TEMPLATE ORDER — ReadySetGoSites
=====================================

TEMPLATE ORDERED
Name:         ${template.name}
Industry:     ${template.industry}
Price:        ${template.price}
Theme Chosen: ${colorTheme}

CLIENT CONTACT
Name:   ${yourName}
Email:  ${email}
Phone:  ${phone}

BUSINESS INFO
Business Name:  ${businessName}
Domain Status:  ${domainStatus}
Domain Name:    ${domainName || "N/A"}

LOGO
Status: ${logoStatus}
${logoStatus === "need-one" ? "⚠️ ADD LOGO DESIGN TO INVOICE" : ""}
${logoStatus === "have-one" ? "Client will email logo file" : ""}

${template.requiresPayment ? `
PAYMENT SETUP
Platform:        ${data.paymentPlatform || "Not specified"}
Account Status:  ${data.paymentAccountStatus || "Not specified"}
Account Email:   ${data.paymentEmail || "Not provided"}
` : ""}

SOCIAL MEDIA
Instagram: ${instagram || "None"}
Facebook:  ${facebook || "None"}
Twitter:   ${twitter || "None"}
LinkedIn:  ${linkedin || "None"}
YouTube:   ${youtube || "None"}
TikTok:    ${tiktok || "None"}

ADD-ONS REQUESTED
${addOns || "None"}

SPECIAL REQUESTS
${specialRequests || "None"}

HOW THEY FOUND US
${referral || "Not specified"}

=====================================
ACTION REQUIRED: Send 50% deposit invoice via Found within 24 hours.
${logoStatus === "need-one" ? "Include logo design ($250+) in invoice." : ""}
${addOns ? `Include add-ons in invoice: ${addOns}` : ""}
    `

    // ── Confirmation email to client ──
    const clientEmail = `
Hi ${yourName},

Thank you for ordering your ${template.name} website from ReadySetGoSites!

We've received your order and are excited to get started on your new website.

YOUR ORDER SUMMARY
------------------
Template:  ${template.name} (${template.industry})
Price:     ${template.price}
Theme:     ${colorTheme}

WHAT HAPPENS NEXT
------------------
1. We'll review your order and send a 50% deposit invoice to this
   email address within 24 hours via Found.

2. Once your deposit is paid we'll kick off your project immediately.

3. ${logoStatus === "need-one"
    ? "We'll reach out about your logo design — it will be included in your invoice."
    : logoStatus === "have-one"
    ? "Please reply to this email with your logo file (PNG or SVG preferred). Include any brand colors or fonts too!"
    : "We'll use your business name as text for now. You can add a logo later!"
  }

4. Your site will be live within 1–2 weeks of deposit payment.

${addOns ? `ADD-ONS\n-------\nYou mentioned: ${addOns}\nThese will be included in your invoice.\n` : ""}

QUESTIONS?
----------
Phone: (555) 123-4567
Email: quotes@readysetgosites.com

We look forward to building your website!

The ReadySetGoSites Team
readysetgosites.com
    `

    const [agencyRes, clientRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `ReadySetGoSites Orders <${process.env.FROM_EMAIL}>`,
          to: process.env.CONTACT_EMAIL,
          subject: `🆕 New Order — ${template.name} · ${businessName} · ${template.price}`,
          text: agencyEmail,
        }),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `ReadySetGoSites <${process.env.FROM_EMAIL}>`,
          reply_to: process.env.CONTACT_EMAIL,
          to: email,
          subject: `Your ${template.name} Website Order — ReadySetGoSites`,
          text: clientEmail,
        }),
      }),
    ])

    if (!agencyRes.ok || !clientRes.ok) {
      throw new Error("Email sending failed")
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Order error:", error)
    return NextResponse.json(
      { error: "Failed to submit order" },
      { status: 500 }
    )
  }
}