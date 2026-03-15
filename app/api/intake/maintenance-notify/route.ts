import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-06-20",
})

export async function POST(request: Request) {
  try {
    const { sessionId } = await request.json()

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    const customerName = session.metadata?.customerName || "Customer"
    const platform = session.metadata?.platform || "Unknown"
    const plan = session.metadata?.plan || "Unknown"
    const billing = session.metadata?.billing || "monthly"
    const customerEmail = session.customer_email || "Unknown"
    const amount = session.amount_total ? `$${(session.amount_total / 100).toFixed(2)}` : "Unknown"

    const ownerEmail = `
NEW MAINTENANCE PLAN SUBSCRIPTION
====================================

CUSTOMER INFO
Name: ${customerName}
Email: ${customerEmail}

PLAN DETAILS
Platform: ${platform}
Plan: ${plan}
Billing: ${billing}
Amount: ${amount}

Payment was collected automatically via Stripe.
Log into Stripe dashboard to view full details.
    `

    const clientEmail = `
Hi ${customerName},

Thank you for subscribing to ReadySetGoSites Maintenance! 🚀

YOUR PLAN DETAILS
------------------
Platform: ${platform}
Plan: ${plan}
Billing: ${billing}
Amount: ${amount}

WHAT HAPPENS NEXT
------------------
✓ We'll review your website details within 24 hours
✓ You'll receive a welcome email with next steps
✓ Your maintenance coverage starts immediately

If you have any questions reply to this email
or reach us at sales@readysetgosites.com

Talk soon,
The ReadySetGoSites Team
www.readysetgosites.com
    `

    await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "ReadySetGoSites <orders@readysetgosites.com>",
          to: "orders@readysetgosites.com",
          subject: `New Maintenance Subscription — ${customerName} (${platform} ${plan})`,
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
          from: "ReadySetGoSites <orders@readysetgosites.com>",
          reply_to: "sales@readysetgosites.com",
          to: customerEmail,
          subject: `Welcome to ReadySetGoSites Maintenance — ${plan} Plan 🚀`,
          text: clientEmail,
        }),
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Notify error:", error)
    return NextResponse.json({ error: "Failed to send notifications" }, { status: 500 })
  }
}