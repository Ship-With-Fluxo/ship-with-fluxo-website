import {
  Bell,
  Check,
  ClipboardCheck,
  Clock,
  Crosshair,
  MapPin,
  PackageCheck,
  Route,
  Smartphone,
  Truck,
  Users,
  ArrowDownRight,
  type LucideIcon,
} from "lucide-react";

export type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const HERO = {
  eyebrow: "Now onboarding pilot dispatch operators in Nigeria",
  titleLead: "Run your dispatch operations with",
  titleAccent: "clarity and control.",
  description:
    "More efficiently, with live rider tracking, faster job assignment, and automatic delivery counting.",
  note: "Built around the realities of dispatch in Nigeria",
} as const;

export const DASHBOARD_STATS = [
  { label: "Active jobs", value: "18", sub: "+4 since 9am", subTone: "success" },
  { label: "On the road", value: "12", sub: "riders online", subTone: "muted" },
  { label: "Delivered today", value: "46", sub: "jobs complete", subTone: "muted" },
] as const;

export const ACTIVE_DELIVERIES = [
  { initials: "AO", name: "A. Okafor", route: "Ikeja → Maryland", status: "On route", meta: "12 min", late: false },
  { initials: "TM", name: "T. Musa", route: "Yaba → Surulere", status: "On route", meta: "24 min", late: false },
  { initials: "CN", name: "C. Nwosu", route: "Ikeja → Ojota", status: "Running late", meta: "Late by 6 min", late: true },
] as const;

export const PROBLEMS = {
  eyebrow: "The daily dispatch grind",
  title: "Your day shouldn't run on phone calls and paperwork.",
  aside: "Sound familiar? You're not the only one.",
  items: [
    {
      icon: MapPin,
      title: "You can't see where your riders are",
      description:
        "Some riders go off route to squeeze in their own deliveries, and you only find out once the job is late.",
    },
    {
      icon: Users,
      title: "Assigning jobs takes too long",
      description:
        "You're sorting out what's being shipped, who takes it, and where it goes, across calls, chats, and paper. One slip and a job lands with the wrong rider.",
    },
    {
      icon: ClipboardCheck,
      title: "You're counting deliveries by hand",
      description:
        "At the end of the day you're adding up who delivered what. It eats your time, and one wrong count can turn into a dispute.",
    },
  ] satisfies IconItem[],
};

export const STEPS = {
  eyebrow: "A clearer way to move",
  title: "From job to delivery, in four simple steps.",
  items: [
    {
      icon: Smartphone,
      title: "Create the job",
      description:
        "Enter pickup, drop off, and item category in seconds, built to be fast on your phone.",
    },
    {
      icon: Users,
      title: "Assign a rider",
      description: "Pick from your rider list, or tap them directly on the map.",
    },
    {
      icon: Route,
      title: "Track it live",
      description:
        "Watch the job move in real time, with a simple heads up if a rider drifts off route or runs late.",
    },
    {
      icon: PackageCheck,
      title: "Confirm and count",
      description:
        "A photo, timestamp, and location confirm delivery automatically, and your count updates itself.",
    },
  ] satisfies IconItem[],
};

export const FEATURES = {
  eyebrow: "The dispatch toolkit",
  title: "Everything you need to run dispatch with confidence.",
  aside: "Built around the four things that actually slow dispatch operators down.",
  items: [
    {
      icon: Crosshair,
      title: "Live Rider Tracking",
      description: "See every active rider on a map, updating regularly throughout the day.",
    },
    {
      icon: Bell,
      title: "Route and Time Deviation Flags",
      description: "A simple, non punitive heads up when a rider drifts off route or is running late.",
    },
    {
      icon: ArrowDownRight,
      title: "Fast Job Creation",
      description: "Add pickup, drop off, and item category details in seconds, even when you're on the move.",
    },
    {
      icon: Users,
      title: "Clear Rider Assignment",
      description: "Choose from your rider list or assign a job to a rider directly from the map.",
    },
    {
      icon: Check,
      title: "Proof of Delivery",
      description: "Keep a photo, timestamp, and location with each completed delivery.",
    },
    {
      icon: ClipboardCheck,
      title: "Automatic Delivery Counting",
      description: "Completed jobs add to your daily count without manual tallying at the end of the day.",
    },
  ] satisfies IconItem[],
};

export const WHY_FLUXO = {
  eyebrow: "Made for the work",
  title: "More visibility. Fewer moving parts.",
  subtitle: "Dispatch moves quickly. Your tools should help you keep up.",
  description:
    "Fluxo brings job creation, rider assignment, live tracking, and delivery counts into one clear workflow—so you can spend less time chasing updates and more time keeping deliveries moving.",
  points: [
    { icon: MapPin, label: "Know where active jobs stand" },
    { icon: Clock, label: "Spot delays while there's still time to respond" },
    { icon: ClipboardCheck, label: "Finish the day with delivery counts in view" },
  ],
};

export const AUDIENCE = {
  eyebrow: "Who it's for",
  title: "Built for the people keeping deliveries on the move.",
  aside: "If your day depends on jobs getting to the right rider and the right place, Fluxo is for you.",
  items: [
    {
      icon: Truck,
      title: "Dispatch operators",
      description: "Keep jobs, riders, and delivery counts moving from one clear view.",
    },
    {
      icon: Users,
      title: "Courier and delivery teams",
      description: "Coordinate a team of riders without relying on scattered calls and chats.",
    },
    {
      icon: PackageCheck,
      title: "Growing local businesses",
      description: "Bring more structure to deliveries as your daily workload grows.",
    },
  ] satisfies IconItem[],
};

export const CTA = {
  eyebrow: "Pilot onboarding in Nigeria",
  title: "Bring a little more clarity to your next dispatch day.",
  description:
    "Fluxo is onboarding pilot dispatch operators in Nigeria. Join the waitlist to follow the pilot rollout.",
  badge: "Pilot places are opening",
  label: "Your email address",
  placeholder: "you@example.com",
  note: "We'll only use your email for Fluxo pilot updates.",
};

export const FAQ = {
  eyebrow: "Good to know",
  title: "Questions, answered.",
  description: "Need to know something else? We'll share more as the pilot takes shape.",
  items: [
    {
      question: "What is Fluxo?",
      answer:
        "Fluxo is a dispatch and rider tracking app designed to help Nigerian operators create jobs, assign riders, follow deliveries, and keep accurate counts.",
    },
    {
      question: "Who is the pilot for?",
      answer:
        "The pilot is for dispatch operators in Nigeria who coordinate delivery riders and want a clearer way to manage day to day jobs.",
    },
    {
      question: "Can I assign a job from the map?",
      answer:
        "Yes. You can select a rider from your list or tap a rider on the map when assigning a job.",
    },
    {
      question: "How is a delivery confirmed?",
      answer:
        "A photo, timestamp, and location confirm a delivery, and the completed job is included in your count.",
    },
    {
      question: "When can I join the pilot?",
      answer:
        "Fluxo is now onboarding pilot dispatch operators in Nigeria. Join the waitlist and the team will share availability as onboarding progresses.",
    },
  ],
};

export const FLEET_SIZES = ["1 to 5 riders", "6 to 20 riders", "21 to 50 riders", "More than 50 riders"] as const;
