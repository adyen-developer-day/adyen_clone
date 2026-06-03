// Central content for the homepage replica.
// Mirrors the structure and copy of the live Adyen homepage (localhost demo only).

export const announcement = {
  tag: "Out now",
  text: "Discover the new face of fraud in our 2026 report",
  href: "#resources",
};

export const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Businesses we serve", href: "#industries" },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#products" },
];

export const hero = {
  eyebrow: "One platform. Every payment.",
  title: "Fintech you can bank on",
  subtitle:
    "One platform for payments, data, and financial products. Built to scale with the world's leading businesses.",
  cta: "Talk to our team",
  secondaryCta: "Explore the platform",
  // Drives the animated checkout visual in the hero.
  payments: [
    { method: "Card", amount: "€128.00" },
    { method: "Apple Pay", amount: "€64.50" },
    { method: "iDEAL", amount: "€212.00" },
    { method: "PayPal", amount: "€99.99" },
    { method: "Klarna", amount: "€340.00" },
  ],
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
      { label: "Press & media", href: "#about" },
      { label: "Careers", href: "#about" },
      { label: "Investor Relations", href: "#about" },
      { label: "Partner with us", href: "#industries" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Payments", href: "#products" },
      { label: "Risk management", href: "#products" },
      { label: "Authentication", href: "#products" },
      { label: "Issuing", href: "#products" },
      { label: "Pricing", href: "#products" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#resources" },
      { label: "Academy", href: "#resources" },
      { label: "Knowledge Hub", href: "#resources" },
      { label: "Newsletter", href: "#resources" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Infrastructure", href: "#products" },
      { label: "Licenses", href: "#about" },
      { label: "Legal", href: "#about" },
      { label: "Terms & Conditions", href: "#about" },
      { label: "Service Status", href: "#about" },
    ],
  },
];

export const footerLegal = [
  { label: "Privacy", href: "#about" },
  { label: "Cookies", href: "#about" },
  { label: "Disclaimer", href: "#about" },
];
