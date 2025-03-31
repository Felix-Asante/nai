"use client";
import Container from "@/components/layouts/Container";
import { Projects } from "@/types/sanity";
import { motion } from "framer-motion";
import ProjectsList from "../ProjectsList";
import { useTranslations } from "next-intl";
import ProjectsCard from "@/components/cards/ProjectsCard";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";

type ProjectSectionProps = {
  projects: Projects[];
};

export default function ProjectsSection({ projects }: ProjectSectionProps) {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const translate = useTranslations("homePage.projects");
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const prevButtonClassName = "absolute top-[20%] -left-5";
  const nextButtonClassName = "absolute top-[20%] -right-5";

  if (projects?.length === 0) return null;

  return (
    <Container className="pt-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="container mx-auto px-4"
      >
        {/* Section Heading */}
        <div className="flex flex-col xl:flex-row justify-between items-center text-center md:text-left mb-12 gap-x-6">
          <h2 className="text-4xl font-bold leading-[1.18] text-primary w-full xl:w-[55%]">
            {translate("upcoming")}
          </h2>
          <p className="mt-4 text-gray-600 xl:w-[45%]">
            {translate("description")}
          </p>
        </div>

        <div className="embla relative">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {projects.map((project, index) => (
                <div className="embla__slide upcoming_projects" key={index}>
                  <ProjectsCard project={project} isUpcoming />
                </div>
              ))}
            </div>
          </div>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            btnClassName={
              prevBtnDisabled
                ? `${prevButtonClassName} hidden cursor-not-allowed`
                : prevButtonClassName
            }
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            btnClassName={
              nextBtnDisabled
                ? `${nextButtonClassName} hidden cursor-not-allowed`
                : nextButtonClassName
            }
          />
        </div>
      </motion.div>
    </Container>
  );
}
