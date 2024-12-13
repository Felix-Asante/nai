import MainNavbar from "@/components/navbars/MainNavbar";
import AboutHero from "@/sections/about/AboutHero";
import ModeOfOperation from "@/sections/about/ModeOfOperation";
import ObjectiveSection from "@/sections/about/ObjectiveSection";
import TeamSection from "@/sections/about/TeamSection";
import HowUCanHelp from "@/sections/home/HowUCanHelp";
import VolunteersSection from "@/sections/VolunteersSection";

export default function AboutPage() {
  return (
    <main>
      <MainNavbar className="text-neutral-300 bg-white" />
      <AboutHero />
      <ObjectiveSection />
      <ModeOfOperation />
      <HowUCanHelp />
      <TeamSection />
      <VolunteersSection />
    </main>
  );
}
