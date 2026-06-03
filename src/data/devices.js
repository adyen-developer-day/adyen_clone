// Mock data for the IPP (In-Person Payments) device portfolio dashboard.
// Localhost workshop demo only — numbers are illustrative, not real Adyen data.

export const dashboardMeta = {
  title: "IPP device portfolio",
  subtitle:
    "Live overview of the in-person payments terminal fleet across regions, models, and firmware.",
  lastUpdated: "Updated 2 min ago",
};

// Top-line KPIs shown as stat cards.
export const kpis = [
  {
    id: "total",
    label: "Devices deployed",
    value: "18,420",
    delta: "+412",
    deltaLabel: "vs last month",
    trend: "up",
  },
  {
    id: "online",
    label: "Currently online",
    value: "96.4%",
    delta: "+0.7pt",
    deltaLabel: "vs last week",
    trend: "up",
  },
  {
    id: "volume",
    label: "Transactions today",
    value: "4.21M",
    delta: "+8.3%",
    deltaLabel: "vs yesterday",
    trend: "up",
  },
  {
    id: "alerts",
    label: "Open alerts",
    value: "37",
    delta: "-12",
    deltaLabel: "vs yesterday",
    trend: "down",
  },
];

// One row per terminal model in the portfolio.
// status counts always sum to `total`.
export const deviceModels = [
  {
    model: "S1F2",
    family: "Countertop",
    total: 5120,
    status: { online: 4980, offline: 96, maintenance: 44 },
    firmware: "1.42.0",
    volume: "1.32M",
  },
  {
    model: "AMS1",
    family: "Android smart",
    total: 3870,
    status: { online: 3742, offline: 88, maintenance: 40 },
    firmware: "2.18.3",
    volume: "1.04M",
  },
  {
    model: "V400m",
    family: "Portable",
    total: 3240,
    status: { online: 3110, offline: 104, maintenance: 26 },
    firmware: "1.39.5",
    volume: "812K",
  },
  {
    model: "e285",
    family: "Portable",
    total: 2110,
    status: { online: 1998, offline: 84, maintenance: 28 },
    firmware: "1.31.2",
    volume: "498K",
  },
  {
    model: "NYC1",
    family: "Handheld",
    total: 1680,
    status: { online: 1602, offline: 58, maintenance: 20 },
    firmware: "2.05.1",
    volume: "372K",
  },
  {
    model: "S1U2",
    family: "Unattended",
    total: 1450,
    status: { online: 1361, offline: 71, maintenance: 18 },
    firmware: "1.27.0",
    volume: "146K",
  },
  {
    model: "UX410",
    family: "Unattended",
    total: 950,
    status: { online: 902, offline: 39, maintenance: 9 },
    firmware: "1.22.4",
    volume: "61K",
  },
];

// Fleet status totals used for the donut chart.
export const statusBreakdown = [
  { label: "Online", key: "online", value: 17695, color: "var(--green)" },
  { label: "Offline", key: "offline", value: 540, color: "#ff5a5f" },
  { label: "Maintenance", key: "maintenance", value: 185, color: "#ffb020" },
];

// Geographic distribution of the fleet.
export const regions = [
  { region: "Europe", devices: 8120, share: 44 },
  { region: "North America", devices: 5210, share: 28 },
  { region: "Asia-Pacific", devices: 3180, share: 17 },
  { region: "Latin America", devices: 1240, share: 7 },
  { region: "Middle East & Africa", devices: 670, share: 4 },
];

// Firmware rollout progress across the fleet.
export const firmwareRollout = [
  { version: "Latest (current)", share: 71, tone: "good" },
  { version: "One behind", share: 22, tone: "warn" },
  { version: "Outdated (action needed)", share: 7, tone: "bad" },
];

// Recent fleet alerts / activity feed.
export const alerts = [
  {
    id: "a1",
    severity: "critical",
    title: "12 V400m terminals offline in DE-Berlin hub",
    time: "8 min ago",
  },
  {
    id: "a2",
    severity: "warning",
    title: "Firmware 1.27.0 rollout stalled on 140 S1U2 units",
    time: "41 min ago",
  },
  {
    id: "a3",
    severity: "info",
    title: "AMS1 batch of 220 provisioned for Retail-US",
    time: "1 hr ago",
  },
  {
    id: "a4",
    severity: "warning",
    title: "Battery health low on 18 e285 portables",
    time: "3 hr ago",
  },
  {
    id: "a5",
    severity: "info",
    title: "Scheduled maintenance window completed in APAC",
    time: "5 hr ago",
  },
];
