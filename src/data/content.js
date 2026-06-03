// Central content for the homepage replica.
// Mirrors the structure and copy of the live Adyen homepage (localhost demo only).

export const announcement = {
  tag: "NEW",
  text: "Operation Payday — Loot Crates now live with exclusive discount codes",
  href: "#lootboxes",
};

export const navLinks = [
  { label: "PLAY", href: "#hero" },
  { label: "INVENTORY", href: "#inventory" },
  { label: "LOOT CRATES", href: "#lootboxes" },
  { label: "STORE", href: "#store" },
  { label: "STATS", href: "#stats" },
];

export const hero = {
  title: "OPERATION PAYDAY",
  subtitle: "Unlock exclusive discount codes. Open loot crates. Get rewarded.",
  cta: "OPEN LOOT CRATE",
  ctaSecondary: "VIEW INVENTORY",
};

export const valueProps = {
  lead: "Run your business with confidence.",
  trail:
    "Adyen delivers the control, reliability, and expertise global enterprises depend on.",
  items: [
    {
      title: "Compliance you can trust",
      body: "Backed by US, UK, and EU banking licenses.",
    },
    {
      title: "Enterprise-grade reliability",
      body: "99.999% historical platform uptime.",
    },
    {
      title: "One platform",
      body: "Payments, data insights, and financial products in one place.",
    },
    {
      title: "Built-in optimizations",
      body: "Improve conversion, reduce fraud, and lower payment costs.",
    },
    {
      title: "Easy to integrate",
      body: "One API that supports multiple use cases and channels.",
    },
  ],
};

export const moneyMovement = {
  lead: "Control every aspect of your money.",
  trail:
    "Offer financial products to your customers. All from the same, centralized stack.",
  cards: [
    {
      eyebrow: "Intelligent Money Movement",
      title: "Move money across your entire business",
      body: "Drive revenue with optimized payments and automated payouts. Accept, settle, and move funds on one platform.",
      cta: "Explore payments",
      theme: "dark",
    },
    {
      eyebrow: "Adyen for Platforms",
      title: "Launch payments and financial products under your brand",
      body: "Unlock new revenue streams. Embed payments, accounts, card issuing, and capital with a single integration.",
      cta: "Explore platforms",
      theme: "green",
    },
  ],
};

export const industries = {
  lead: "Different industries. One standard.",
  trail: "Businesses across sectors trust Adyen to keep money moving.",
  items: [
    {
      title: "Retail",
      body: "Offer faster checkouts, stronger security, and better customer experiences across channels.",
      image: "retail",
    },
    {
      title: "Travel and hospitality",
      body: "Turn every trip into a seamless, secure, and personal payment experience.",
      image: "travel",
    },
    {
      title: "Digital media and content",
      body: "Boost subscriptions and reduce churn with optimized recurring payments.",
      image: "digital",
    },
    {
      title: "SaaS platforms and marketplaces",
      body: "Embed payments and financial products into the products your users love.",
      image: "saas",
    },
    {
      title: "Food and beverage",
      body: "Connect online ordering and in-store payments on a single platform.",
      image: "food",
    },
    {
      title: "Financial services",
      body: "Scale globally with the reliability and compliance regulated businesses need.",
      image: "financial",
    },
  ],
};

export const stats = {
  lead: "Global scale. Local expertise.",
  trail: "Powered by trillions of euros in transaction data.",
  items: [
    { value: "€1.4T", label: "Processed annually" },
    { value: "99.999%", label: "Uptime" },
    { value: "150+", label: "Currencies" },
    { value: "200+", label: "Local payment methods" },
    { value: "29", label: "Global offices" },
  ],
};

export const caseStudies = {
  lead: "When certainty matters, Adyen's the platform of choice",
  stories: [
    {
      brand: "Adobe",
      body: "Adobe maximized subscription revenue with global payments.",
    },
    {
      brand: "Prada Group",
      body: "Prada Group brings luxury style with a human touch through payments innovation.",
    },
    {
      brand: "Vagaro",
      body: "Vagaro unlocked instant payouts for 80,000+ beauty and wellness businesses.",
    },
    {
      brand: "Nord Security",
      body: "Nord Security optimized payments and increased conversion by 10%.",
    },
    {
      brand: "L'Occitane",
      body: "L'Occitane consolidated 40 systems into one. Reconciliation dropped 20%.",
    },
    {
      brand: "Meta",
      body: "Meta delivers secure payments at global scale.",
    },
    {
      brand: "Rectangle Health",
      body: "Rectangle Health automates insurance reimbursements with embedded payments.",
    },
  ],
};

export const finalCta = {
  title: "If you're building for scale, there's no alternative",
  cta: "Contact us",
};

export const footerColumns = [
  {
    heading: "About",
    links: [
      "Press & media",
      "Careers",
      "Investor Relations",
      "Partner with us",
      "Contact",
    ],
  },
  {
    heading: "Products",
    links: ["Payments", "Risk management", "Authentication", "Issuing", "Pricing"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "Academy", "Knowledge Hub", "Newsletter"],
  },
  {
    heading: "Platform",
    links: [
      "Infrastructure",
      "Licenses",
      "Legal",
      "Terms & Conditions",
      "Service Status",
    ],
  },
];

export const footerLegal = ["Privacy", "Cookies", "Disclaimer"];

export const lootCrates = {
  title: "LOOT CRATES",
  subtitle: "Try your luck. Every crate contains a discount code for Adyen products.",
  crates: [
    { name: "Standard Crate", rarity: "common", price: "FREE", color: "#6c7782" },
    { name: "Premium Crate", rarity: "rare", price: "$2.49", color: "#4b69ff" },
    { name: "Elite Crate", rarity: "legendary", price: "$4.99", color: "#de9b35" },
  ],
  rewards: [
    { code: "ADYEN-SAVE-5", discount: "5% off", rarity: "common", description: "Payment Processing", color: "#6c7782" },
    { code: "ADYEN-SAVE-10", discount: "10% off", rarity: "common", description: "Platform Fees", color: "#6c7782" },
    { code: "ADYEN-SAVE-15", discount: "15% off", rarity: "uncommon", description: "Terminal Hardware", color: "#4b69ff" },
    { code: "ADYEN-SAVE-20", discount: "20% off", rarity: "rare", description: "Enterprise Plan", color: "#8847ff" },
    { code: "ADYEN-SAVE-25", discount: "25% off", rarity: "rare", description: "Payment Processing", color: "#8847ff" },
    { code: "ADYEN-SAVE-30", discount: "30% off", rarity: "epic", description: "All Products", color: "#d32ce6" },
    { code: "ADYEN-SAVE-40", discount: "40% off", rarity: "epic", description: "Enterprise Plan", color: "#d32ce6" },
    { code: "ADYEN-SAVE-50", discount: "50% off", rarity: "legendary", description: "Everything for 1 Year", color: "#de9b35" },
    { code: "ADYEN-FREE-MONTH", discount: "1 Month Free", rarity: "legendary", description: "Any Product", color: "#de9b35" },
  ],
};
