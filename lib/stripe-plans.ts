export const stripePlans = {
  nextjs: {
    name: "Next.js",
    basic:      { monthly: "price_1TB2FH1YY4jFqJtjdiUG3F5V",yearly: "price_1TB2K21YY4jFqJtjRARsDL5F" },
    growth:     { monthly: "price_nextjs_growth_monthly",   yearly: "price_nextjs_growth_yearly" },
    pro:        { monthly: "price_nextjs_pro_monthly",      yearly: "price_nextjs_pro_yearly" },
  },
  webflow: {
    name: "Webflow",
    basic:      { monthly: "price_webflow_basic_monthly",   yearly: "price_webflow_basic_yearly" },
    growth:     { monthly: "price_webflow_growth_monthly",  yearly: "price_webflow_growth_yearly" },
    pro:        { monthly: "price_webflow_pro_monthly",     yearly: "price_webflow_pro_yearly" },
  },
  wordpress: {
    name: "WordPress",
    basic:      { monthly: "price_wp_basic_monthly",        yearly: "price_wp_basic_yearly" },
    growth:     { monthly: "price_wp_growth_monthly",       yearly: "price_wp_growth_yearly" },
    pro:        { monthly: "price_wp_pro_monthly",          yearly: "price_wp_pro_yearly" },
  },
  shopify: {
    name: "Shopify",
    basic:      { monthly: "price_shopify_basic_monthly",   yearly: "price_shopify_basic_yearly" },
    growth:     { monthly: "price_shopify_growth_monthly",  yearly: "price_shopify_growth_yearly" },
    pro:        { monthly: "price_shopify_pro_monthly",     yearly: "price_shopify_pro_yearly" },
  },
}

export type PlatformKey = keyof typeof stripePlans
export type PlanKey = "basic" | "growth" | "pro"
export type BillingKey = "monthly" | "yearly"