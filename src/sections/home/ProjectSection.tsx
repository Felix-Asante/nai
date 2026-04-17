"use client";
import Container from "@/components/layouts/Container";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Projects } from "@/types/sanity";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/EmblaCarouselArrowButtons";
import ProjectsCard from "@/components/cards/ProjectsCard";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils";
import { ArrowRightIcon } from "lucide-react";

type ProjectSectionProps = {
  projects: Projects[];
};

export default function ProjectsSection({ projects }: ProjectSectionProps) {
  const translate = useTranslations("homePage.projects");
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  if (!projects?.length) return null;

  return (
    <section className="section-y bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 md:mb-14">
          <div className="lg:max-w-2xl">
            <SectionHeading
              eyebrow="What's next"
              title={translate("upcoming")}
              description={translate("description")}
            />
          </div>
          <div className="hidden md:flex items-center gap-4">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              btnClassName={prevBtnDisabled ? "opacity-40 cursor-not-allowed" : ""}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              btnClassName={nextBtnDisabled ? "opacity-40 cursor-not-allowed" : ""}
            />
          </div>
        </div>

        <Reveal>
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {projects.map((project, index) => (
                  <div className="embla__slide upcoming_projects" key={index}>
                    <ProjectsCard project={project} isUpcoming />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full px-6 h-12 border-primary-200 text-primary-700 hover:bg-primary-50"
            )}
          >
            View all projects
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
