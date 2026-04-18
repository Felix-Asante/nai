import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import DonateDetailedSections from "@/sections/donate/DonateDetailedSections";
import { DonationForm } from "@/sections/DonationForm";
import { cn } from "@/utils";
import { ArrowRightIcon, HeartHandshakeIcon } from "lucide-react";
import { Link } from "@/i18n/routing";

export const metadata = {
  title: "Donate — Noble Alms International",
  description:
    "Support Noble Alms International with a one-time gift, become a monthly donor, or sponsor a specific project.",
};

export default function DonationPage() {
  return (
    <main>
      <header className="relative overflow-hidden bg-primary-800 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/img-30.jpg')" }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary-600/70"
          aria-hidden
        />
        <Container className="relative z-10 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <span className="eyebrow text-secondary-200 before:bg-secondary-200/70 justify-center">
              Together we can
            </span>
            <h1 className="mt-5 display">
              Your generosity transforms lives
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/85 leading-relaxed">
              Every donation, no matter the size, creates a meaningful and
              lasting impact in the communities we serve.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="#donate"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600 shadow-lg shadow-secondary/30"
                )}
              >
                <HeartHandshakeIcon className="w-4 h-4" />
                Donate now
              </Link>
              <Link
                href="/projects"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-6 h-12 border-white/40 bg-white/10 text-white hover:bg-white hover:text-primary-700"
                )}
              >
                See our projects
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <nav
              aria-label="Ways to give"
              className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3 text-sm"
            >
              {[
                { href: "#monetary", label: "Monetary gifts" },
                { href: "#monthly", label: "Monthly donor" },
                { href: "#sponsor", label: "Sponsor a project" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/20 text-white/90 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </header>

      <DonateDetailedSections />

      <section id="donate" className="section-y bg-neutral-200/40 scroll-mt-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Give today"
            title="Make your donation"
            description="Choose an amount and payment method that works for you."
          />
          <Reveal className="mt-10">
            <DonationForm />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
