import { NextResponse } from "next/server"
import Stripe from "stripe"
import { stripePlans, PlatformKey, PlanKey, BillingKey } from "@/lib/stripe-plans"

const stripeKey = process.env.STRIPE_SECRET_KEY

if (!stripeKey) {
  console.warn("STRIPE_SECRET_KEY is not set")
}

const stripe = stripeKey ? new Stripe(stripeKey, {
  apiVersion: "2024-06-20",
}) : null

export async function POST(request: Request) {
  if (!stripe) {
    return NextResponse.json(
      { error: "Stripe is not configured yet" },
      { status: 503 }
    )
  }

  try {
    const { platform, plan, billing, customerEmail, customerName } = await request.json()

    const platformData = stripePlans[platform as PlatformKey]
    const planData = platformData[plan as PlanKey]
    const priceId = planData[billing as BillingKey]

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: customerEmail,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: {
        customerName,
        platform: platformData.name,
        plan,
        billing,
      },
      subscription_data: {
        metadata: {
          customerName,
          platform: platformData.name,
          plan,
          billing,
        },
      },
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/maintenance/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/maintenance`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}