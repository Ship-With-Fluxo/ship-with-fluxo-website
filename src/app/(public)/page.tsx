import { Audience } from "@/components/sections/audience";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Problem } from "@/components/sections/problem";
import { WhyFluxo } from "@/components/sections/why-fluxo";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <WhyFluxo />
      <Audience />
      <Cta />
      <Faq />
    </>
  );
}
