"use client";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/utils";
import type { PartnerRecord } from "@/lib/sanity/api/partners";

type Props = {
  partners: PartnerRecord[];
};

export default function PartnersGrid({ partners }: Props) {
  if (!partners?.length) return null;

  return (
    <section className="section-y bg-neutral-200/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Our partners"
          title="In good company"
          description="A growing community of organisations helping us deliver impact where it is needed most."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {partners.map((partner, i) => {
            const logoUrl = partner.logo?.url;
            const alt = partner.logo?.alt || partner.name;
            const card = (
              <div
                className={cn(
                  "group relative bg-white rounded-2xl border border-neutral-200/70",
                  "h-24 md:h-28 flex items-center justify-center p-4 md:p-5",
                  "transition-all duration-300 hover:shadow-soft hover:-translate-y-0.5"
                )}
              >
                {logoUrl ? (
                  <img
                    src={logoUrl}
                    alt={alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                ) : (
                  <span className="text-sm font-semibold text-neutral-500">
                    {partner.name}
                  </span>
                )}
              </div>
            );

            return (
              <Reveal key={partner._id} delay={(i % 5) * 0.05}>
                {partner.website ? (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${partner.name}`}
                    className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
