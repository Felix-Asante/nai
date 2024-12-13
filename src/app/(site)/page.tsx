import HomeIntroSection from "@/sections/home/HomeIntroSection";
import HowUCanHelp from "@/sections/home/HowUCanHelp";
import MainHeroSection from "@/sections/home/MainHeroSection";
import MissionSection from "@/sections/home/MissionSection";
import OurImpact from "@/sections/home/OurImpact";
import ProjectsSection from "@/sections/home/ProjectSection";
import { getProjects } from "@/lib/sanity/api/projects";

export default async function LandingPage() {
  const data = await getProjects({ page: 0, limit: 3 });
  return (
    <div>
      <MainHeroSection />
      <HomeIntroSection />
      <MissionSection />
      <HowUCanHelp />
      <OurImpact />
      <ProjectsSection projects={data} />
    </div>
  );
}
