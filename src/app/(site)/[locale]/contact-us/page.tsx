import Container from "@/components/layouts/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Skeleton } from "@/components/ui/skeleton";
import { getFAQs } from "@/lib/sanity/api";
import ContactHero from "@/sections/contact/ContactHero";
import ContactSection from "@/sections/contact/ContactSection";
import SectionHeading from "@/components/SectionHeading";
import { SupportedLanguages } from "@/types";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

type Props = {
  params: Promise<{
    locale: SupportedLanguages;
  }>;
};

export default async function ContactUs(props: Props) {
  const { locale } = await props.params;
  const faqs = await getFAQs(locale);
  const t = await getTranslations("ContactUsPage");
  const tRoot = await getTranslations();

  return (
    <main>
      <ContactHero />

      <section className="section-y bg-white">
        <Container>
          <ContactSection />
        </Container>
      </section>

      <section className="section-y bg-neutral-200/40">
        <Container>
          <Suspense
            fallback={
              <div className="grid md:grid-cols-2 gap-5">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton
                    className="h-[125px] w-full rounded-xl"
                    key={index}
                  />
                ))}
              </div>
            }
          >
            {faqs?.length > 0 ? (
              <>
                <SectionHeading
                  align="center"
                  eyebrow={t("faqEyebrow")}
                  title={tRoot("faq")}
                />
                <div className="mt-12 max-w-4xl mx-auto">
                  <Accordion type="single" collapsible>
                    <div className="grid md:grid-cols-2 gap-4 items-start">
                      {faqs.map((faq, index) => (
                        <AccordionItem
                          value={`item-${index}`}
                          key={index}
                          className="card-surface px-5"
                        >
                          <AccordionTrigger className="text-base md:text-lg font-semibold text-primary-700 hover:no-underline text-left">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-neutral-500 text-sm md:text-base leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </div>
                  </Accordion>
                </div>
              </>
            ) : null}
          </Suspense>
        </Container>
      </section>
    </main>
  );
}
