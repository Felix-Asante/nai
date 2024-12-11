import Container from "@/components/layouts/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/constants/content";
import ContactHero from "@/sections/contact/ContactHero";
import ContactSection from "@/sections/contact/ContactSection";

export default function ContactUs() {
  return (
    <div>
      <ContactHero />
      <Container className="my-8">
        <section className="py-10">
          <ContactSection />
        </section>
        <section className="mt-8 mb-20">
          <h3 className="subtitle mb-12">Frequently Asked Questions (FAQs)</h3>
          <Accordion type="single" collapsible>
            <div className="grid md:grid-cols-2 md:gap-5 items-start">
              {FAQ.map((faq, index) => (
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
        </section>
      </Container>
    </div>
  );
}
