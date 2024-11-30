import Footer from "@/components/Footer";
import HomeIntroSection from "@/sections/home/HomeIntroSection";
import HowUCanHelp from "@/sections/home/HowUCanHelp";
import MainHeroSection from "@/sections/home/MainHeroSection";
import MissionSection from "@/sections/home/MissionSection";
import OurImpact from "@/sections/home/OurImpact";
import ProjectsSection from "@/sections/home/ProjectSection";

const LandingPage = () => {
  return (
    <div>
      <MainHeroSection />
      <HomeIntroSection />
      <MissionSection />
      <HowUCanHelp />
      <OurImpact />
      <ProjectsSection />
    </div>
  );
};

export default LandingPage;
