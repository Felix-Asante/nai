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
import { TeamMember } from "@/types/sanity";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { decodeAssetId, urlFor } from "@/lib/sanity/sanity.image";

type Props = {
  teamMembers: TeamMember[];
};

export default function TeamSection({ teamMembers = [] }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const translate = useTranslations();

  if (teamMembers.length === 0) {
    return null;
  }

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
            {translate("AboutPage.meetOurTeam")}
          </motion.h2>
          <div className="hidden md:block">
            <div className="flex items-center gap-4">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                btnClassName={
                  prevBtnDisabled ? "hidden cursor-not-allowed" : ""
                }
              />
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                btnClassName={
                  nextBtnDisabled ? "hidden cursor-not-allowed" : ""
                }
              />
            </div>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => {
            const { hotspot, crop } = member.image;
            const hotspotX = hotspot?.x || 0.5;
            const hotspotY = hotspot?.y || 0.3;

            const cropTop = crop?.top || 0.01;
            const cropBottom = crop?.bottom || 0.41;
            const cropLeft = crop?.left || 0;
            const cropRight = crop?.right || 0;

            // Calculate width and height based on crop values
            const width = 277.85 - cropLeft - cropRight;
            const height = 416 - cropTop - cropBottom;

            // Calculate the position using the hotspot
            const positionX = hotspotX * width;
            const positionY = hotspotY * height;
            return (
              <motion.div
                className="border-2 border-primary p-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                key={index}
              >
                {/* Image */}
                <motion.div
                  className="overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={urlFor(member.image.url).url()}
                    alt={member.image?.alt || member.name}
                    className="!w-full !min-w-full h-[290px] lg:h-[240px] object-cover"
                    width={277}
                    height={277}
                    placeholder={member?.image?.lqip ? "blur" : "empty"}
                    blurDataURL={member.image?.lqip || ""}
                    unoptimized
                    style={
                      {
                        // objectPosition: `${positionX}px ${positionY}px`,
                      }
                    }
                  />
                </motion.div>

                {/* Name & Role */}
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-neutral-300">{member.position}</p>

                {/* Social Icons */}
                <div className="flex gap-2 mt-2">
                  {Object.entries(member.socials).map(([platform, link], i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`/icons/${platform}.svg`}
                        alt={platform}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* <div className="md:hidden flex justify-center mt-8">
          <div className="flex items-center gap-8">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              btnClassName={prevBtnDisabled ? "hidden cursor-not-allowed" : ""}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              btnClassName={nextBtnDisabled ? "hidden cursor-not-allowed" : ""}
            />
          </div>
        </div> */}
      </div>
    </Container>
  );
}
