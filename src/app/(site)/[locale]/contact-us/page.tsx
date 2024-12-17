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
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

export default async function ContactUs() {
  const faqs = await getFAQs();
  const t = await getTranslations();

  return (
    <div>
      <ContactHero />
      <Container className="my-8">
        <section className="py-10">
          <ContactSection />
        </section>
        <section className="mt-8 mb-20">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 gap-5">
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
                <h3 className="subtitle mb-12">{t("faq")}</h3>
                <Accordion type="single" collapsible>
                  <div className="grid md:grid-cols-2 md:gap-5 items-start">
                    {faqs.map((faq, index) => (
                      <AccordionItem
                        value={`item-${index}`}
                        key={index}
                        className=" md:border md:rounded-lg md:p-3 md:bg-gray-50"
                      >
                        <AccordionTrigger className="text-lg md:text-xl font-bold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </div>
                </Accordion>
              </>
            ) : null}
          </Suspense>
        </section>
      </Container>
    </div>
  );
}
