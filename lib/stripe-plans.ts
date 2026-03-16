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
    basic:      { monthly: "price_1TBQ7t1YY4jFqJtjBSoDZWSK",        yearly: "price_1TBQ8p1YY4jFqJtjiSCtYpD9" },
    growth:     { monthly: "price_1TBQAn1YY4jFqJtjsCED8WLT",       yearly: "price_1TBQCD1YY4jFqJtjAXDQxb2G" },
    pro:        { monthly: "price_1TBQEr1YY4jFqJtjJbHoJhte",          yearly: "price_1TBQG71YY4jFqJtjnY0Hbdjx" },
  },
  shopify: {
    name: "Shopify",
    basic:      { monthly: "price_1TBQI91YY4jFqJtjBZdEPvSD",   yearly: "price_1TBQIr1YY4jFqJtj8GFefMaQ" },
    growth:     { monthly: "price_1TBQL81YY4jFqJtj1FeteVwY",  yearly: "price_1TBQLu1YY4jFqJtjyY9oI70A" },
    pro:        { monthly: "price_1TBQNv1YY4jFqJtjX9g0JAiR",     yearly: "price_1TBQPX1YY4jFqJtjIRFWhLkb" },
  },
}

export type PlatformKey = keyof typeof stripePlans
export type PlanKey = "basic" | "growth" | "pro"
export type BillingKey = "monthly" | "yearly"