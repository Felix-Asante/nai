"use client";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { cn } from "@/utils";
import { motion, useInView } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

function useCountUp(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startTime = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      setCount(Math.floor(target * ease(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setCount(target);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return count;
}

function StatItem({
  stat,
  index,
  active,
}: {
  stat: Stat;
  index: number;
  active: boolean;
}) {
  const value = useCountUp(stat.value, 1600, active);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(
        "p-6 md:p-8",
        index !== 0 && "md:border-l md:border-white/15",
      )}
    >
      <div className="text-4xl md:text-5xl font-bold tracking-tight">
        {value.toLocaleString()}
        {stat.suffix ?? "+"}
      </div>
      <div className="mt-2 text-sm md:text-base text-white/75">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function OurImpact() {
  const translate = useTranslations();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const stats: Stat[] = [
    { value: 139364, label: translate("homePage.stats.description") },
    { value: 60, label: "Community projects" },
    { value: 3, label: "Countries served" },
    { value: 2400, label: "Active supporters" },
  ];

  return (
    <section className="section-y">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-primary-700 text-white">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('/images/img-3.jpg')" }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-primary-800/95 via-primary-700/90 to-primary-500/70"
            aria-hidden
          />

          <div className="relative px-6 md:px-12 lg:px-16 py-14 md:py-20">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-7">
                <Reveal>
                  <span className="eyebrow text-secondary-200 before:bg-secondary-200/70">
                    Our impact
                  </span>
                  <h2 className="mt-4 headline text-white max-w-2xl">
                    {translate("homePage.stats.title")}
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.15} className="lg:col-span-5 lg:text-right">
                <Link
                  href="/partners"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-full px-6 h-12 bg-secondary hover:bg-secondary-600",
                  )}
                >
                  {translate("joinMovement")}
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Reveal>
            </div>

            <div
              ref={ref}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden"
            >
              {stats.map((stat, i) => (
                <StatItem
                  key={stat.label}
                  stat={stat}
                  index={i}
                  active={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
