// Central content for the homepage replica.
// Workshop note: this is original, Adyen-styled copy for a localhost demo.

export const navLinks = [
  { label: "Payments", href: "#payments" },
  { label: "Platforms", href: "#platforms" },
  { label: "Banking", href: "#banking" },
  { label: "Capital", href: "#capital" },
  { label: "Insights", href: "#insights" },
];

export const features = [
  {
    id: "online",
    title: "Online payments",
    body: "Accept payments across channels with a single integration and one connection to the world's payment methods.",
    icon: "globe",
  },
  {
    id: "instore",
    title: "In-person payments",
    body: "Unify your online and in-store data with terminals that fit any business, from a single shop to a global chain.",
    icon: "store",
  },
  {
    id: "risk",
    title: "Risk management",
    body: "Block fraud, not customers. Machine learning trained on global transaction data keeps revenue flowing.",
    icon: "shield",
  },
  {
    id: "data",
    title: "Data & insights",
    body: "Turn payments data into decisions with real-time reporting across every region you operate in.",
    icon: "chart",
  },
];

export const stats = [
  { value: "1B+", label: "Transactions processed every month" },
  { value: "100+", label: "Payment methods and currencies" },
  { value: "28", label: "Offices around the world" },
  { value: "99.99%", label: "Platform uptime" },
];

export const solutions = [
  {
    id: "retail",
    title: "Retail",
    body: "Connect the shopper journey from the website to the checkout counter.",
    image: "retail",
  },
  {
    id: "platforms",
    title: "Platforms & marketplaces",
    body: "Embed payments, payouts, and financial products into your platform.",
    image: "platforms",
  },
  {
    id: "digital",
    title: "Digital",
    body: "Scale subscriptions and digital goods with optimized authorization rates.",
    image: "digital",
  },
];

export const footerColumns = [
  {
    heading: "Products",
    links: ["Online payments", "In-person payments", "Platforms", "Issuing", "Capital"],
  },
  {
    heading: "Solutions",
    links: ["Retail", "Digital", "Marketplaces", "Subscriptions", "Enterprise"],
  },
  {
    heading: "Company",
    links: ["About", "Careers", "Newsroom", "Investors", "Contact"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API reference", "Knowledge hub", "Support", "Status"],
  },
];
