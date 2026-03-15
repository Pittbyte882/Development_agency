export const stripePlans = {
  nextjs: {
    name: "Next.js",
    basic:      { monthly: "price_1TB2FH1YY4jFqJtjdiUG3F5V",yearly: "price_1TB2K21YY4jFqJtjRARsDL5F" },
    growth:     { monthly: "price_1TB5HH1YY4jFqJtjbqT0xkRv",   yearly: "price_1TB5IA1YY4jFqJtjiRXlyTDt" },
    pro:        { monthly: "price_1TB5RN1YY4jFqJtjcgEmBr5L",      yearly: "price_1TB5hw1YY4jFqJtjHCWfKdPG" },
  },
  webflow: {
    name: "Webflow",
    basic:      { monthly: "price_1TB5lQ1YY4jFqJtjlapAwflE",   yearly: "price_1TB5mu1YY4jFqJtjNsJn4PgB" },
    growth:     { monthly: "price_1TB5r91YY4jFqJtjUqCkfTCP",  yearly: "price_1TB5s71YY4jFqJtjvMy6Rgpe" },
    pro:        { monthly: "price_1TB5vd1YY4jFqJtjVZ90cQLA",     yearly: "price_1TB5wg1YY4jFqJtj0wpSpM29" },
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