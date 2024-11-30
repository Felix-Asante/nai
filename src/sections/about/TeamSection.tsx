"use client";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/layouts/Container";
import useEmblaCarousel from "embla-carousel-react";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";

const teamMembers = [
  {
    name: "Aimee Preece",
    role: "CEO",
    image: "/images/img-6.jpg",
    socials: {
      facebook: "https://img.icons8.com/color/48/facebook-new.png",
      instagram: "https://img.icons8.com/color/48/instagram-new--v1.png",
      whatsapp: "https://img.icons8.com/color/48/whatsapp--v1.png",
      x: "https://img.icons8.com/color/48/twitterx--v1.png",
    },
  },
  {
    name: "Daniel Udall",
    role: "Volunteer",
    image: "/images/img-7.jpg",
    socials: {
      facebook: "https://img.icons8.com/color/48/facebook-new.png",
      instagram: "https://img.icons8.com/color/48/instagram-new--v1.png",
      whatsapp: "https://img.icons8.com/color/48/whatsapp--v1.png",
      x: "https://img.icons8.com/color/48/twitterx--v1.png",
    },
  },
  {
    name: "Christina Boje",
    role: "Manager",
    image: "/images/img-8.jpg",
    socials: {
      facebook: "https://img.icons8.com/color/48/facebook-new.png",
      instagram: "https://img.icons8.com/color/48/instagram-new--v1.png",
      whatsapp: "https://img.icons8.com/color/48/whatsapp--v1.png",
      x: "https://img.icons8.com/color/48/twitterx--v1.png",
    },
  },
  {
    name: "Alec Worthy",
    role: "Volunteer",
    image: "/images/img-9.jpg",
    socials: {
      facebook: "https://img.icons8.com/color/48/facebook-new.png",
      instagram: "https://img.icons8.com/color/48/instagram-new--v1.png",
      whatsapp: "https://img.icons8.com/color/48/whatsapp--v1.png",
      x: "https://img.icons8.com/color/48/twitterx--v1.png",
    },
  },
];

export default function TeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Container className="my-16">
      <div>
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-10">
          <motion.h2
            className="text-4xl font-bold text-primary"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Team
          </motion.h2>
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                btnClassName={
                  prevBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
                }
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                btnClassName={
                  nextBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
                }
              />
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {teamMembers.map((member, index) => (
                <div className="embla__slide" key={index}>
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Image */}
                    <motion.div
                      className="overflow-hidden rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </motion.div>

                    {/* Name & Role */}
                    <h3 className="mt-4 text-lg font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-neutral-300">{member.role}</p>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mt-3 text-neutral-500">
                      {Object.entries(member.socials).map(
                        ([platform, link], i) => (
                          <a
                            key={i}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={`/icons/${platform}.svg`} // Replace with actual icon paths
                              alt={platform}
                              className="w-5 h-5"
                            />
                          </a>
                        )
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center mt-8">
          <div className="flex items-center gap-8">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              btnClassName={
                prevBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
              }
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              btnClassName={
                nextBtnDisabled ? "opacity-50 cursor-not-allowed" : ""
              }
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
