import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WaitlistProvider } from "@/providers/waitlist-provider";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <WaitlistProvider>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </WaitlistProvider>
  );
}
