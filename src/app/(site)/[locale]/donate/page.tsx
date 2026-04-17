import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { DonationForm } from "@/sections/DonationForm";
import HowUCanHelp from "@/sections/home/HowUCanHelp";
import { cn } from "@/utils";
import {
  ArrowRightIcon,
  HeartHandshakeIcon,
  ShieldCheckIcon,
  TargetIcon,
  UsersIcon,
} from "lucide-react";
import { Link } from "@/i18n/routing";

const reasons = [
  {
    title: "Direct impact",
    description:
      "Your contributions directly support our programs and initiatives on the ground.",
    Icon: TargetIcon,
    accent: "bg-primary-50 text-primary-700",
  },
  {
    title: "Transparency",
    description:
      "We ensure 80% of your donation goes directly to our charitable programs.",
    Icon: ShieldCheckIcon,
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Community",
    description:
      "Become part of a global movement of compassion and generosity.",
    Icon: UsersIcon,
    accent: "bg-secondary-50 text-secondary-600",
  },
];

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
          </div>
        </Container>
      </header>

      <section className="section-y bg-white">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Why donate"
            title="Your giving, multiplied"
            description="We steward every contribution with care — so that your generosity reaches those who need it most."
          />

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.08}>
                <div className="card-surface card-hover h-full p-6 md:p-7">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      reason.accent
                    )}
                  >
                    <reason.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary-700">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <HowUCanHelp />

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
