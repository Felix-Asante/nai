import { getUpcomingProjects } from "@/lib/sanity/api/projects";
import HomeIntroSection from "@/sections/home/HomeIntroSection";
import HowUCanHelp from "@/sections/home/HowUCanHelp";
import MainHeroSection from "@/sections/home/MainHeroSection";
import OurImpact from "@/sections/home/OurImpact";
import ProjectsSection from "@/sections/home/ProjectSection";
import SupportOurCauses from "@/sections/home/SupportOurCauses";
import { SupportedLanguages } from "@/types";

type Props = {
  params: Promise<{ locale: SupportedLanguages }>;
};

export default async function LandingPage(props: Props) {
  const { locale } = await props.params;
  const data = await getUpcomingProjects(locale);
  return (
    <div>
      <MainHeroSection />
      <HomeIntroSection />
      <SupportOurCauses />
      <ProjectsSection projects={data} />
      <HowUCanHelp />
      <OurImpact />
    </div>
  );
}
