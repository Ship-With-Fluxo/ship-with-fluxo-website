export const SITE = {
  name: "Fluxo",
  title: "Fluxo | Run your dispatch operations with clarity and control",
  description:
    "Fluxo is a dispatch and rider tracking app for Nigerian operators: create jobs, assign riders, follow deliveries live and keep accurate delivery counts.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline: "Dispatch with clarity and control.",
} as const;

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Why Fluxo", href: "#why-fluxo" },
  { label: "FAQ", href: "#faq" },
] as const;
