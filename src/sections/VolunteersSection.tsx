"use client";
import Button from "@/components/Button";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import VolunteerDialog from "@/components/VolunteerDialog";
import { cn } from "@/utils";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { HeartHandshakeIcon } from "lucide-react";

const volunteers = [
  { name: "Alex Johnson", image: "/images/img-11.jpg" },
  { name: "Mia Taylor", image: "/images/img-12.jpg" },
  { name: "Ethan Brown", image: "/images/img-13.jpg" },
  { name: "Sophia Wilson", image: "/images/img-14.jpg" },
  { name: "Liam Martinez", image: "/images/img-15.jpg" },
  { name: "Emma Davis", image: "/images/img-16.jpg" },
  { name: "Noah Garcia", image: "/images/img-17.jpg" },
  { name: "Olivia Anderson", image: "/images/img-25.jpg" },
];

export default function VolunteersSection() {
  const translate = useTranslations("volunteers");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="section-y bg-neutral-200/40">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The people"
          title={translate("title")}
          description={translate("description")}
        />

        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {volunteers.map((volunteer, index) => (
            <Reveal
              key={volunteer.name}
              delay={(index % 4) * 0.08}
              className={cn(
                "relative group overflow-hidden rounded-2xl shadow-soft",
                index % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"
              )}
            >
              <img
                src={volunteer.image}
                alt={volunteer.name}
                className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary-900/75 via-primary-900/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"
                aria-hidden
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm md:text-base font-semibold">
                  {volunteer.name}
                </p>
                <p className="text-white/75 text-xs">Volunteer</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            onClick={() => setIsOpen(true)}
            className="rounded-full px-6 h-12 bg-primary-700 hover:bg-primary-800"
            startContent={<HeartHandshakeIcon className="w-4 h-4" />}
          >
            {translate("becomeVolunteer")}
          </Button>
        </div>

        <VolunteerDialog open={isOpen} onOpenChange={setIsOpen} />
      </Container>
    </section>
  );
}
