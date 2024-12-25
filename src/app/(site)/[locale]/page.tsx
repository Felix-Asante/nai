import HomeIntroSection from "@/sections/home/HomeIntroSection";
import HowUCanHelp from "@/sections/home/HowUCanHelp";
import MainHeroSection from "@/sections/home/MainHeroSection";
import MissionSection from "@/sections/home/MissionSection";
import OurImpact from "@/sections/home/OurImpact";
import ProjectsSection from "@/sections/home/ProjectSection";
import { getProjects } from "@/lib/sanity/api/projects";
import { SupportedLanguages } from "@/types";

type Props = {
  params: Promise<{ locale: SupportedLanguages }>;
};

export default async function LandingPage(props: Props) {
  const { locale } = await props.params;
  const data = await getProjects({ page: 0, limit: 3 }, locale);
  return (
    <div>
      <MainHeroSection />
      <HomeIntroSection />
      <MissionSection />
      <HowUCanHelp />
      <OurImpact />
      <ProjectsSection projects={data.items} />
    </div>
  );
}
