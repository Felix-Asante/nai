import MainNavbar from "@/components/navbars/MainNavbar";
import AboutHero from "@/sections/about/AboutHero";
import ModeOfOperation from "@/sections/about/ModeOfOperation";
import ObjectiveSection from "@/sections/about/ObjectiveSection";
import TeamSection from "@/sections/about/TeamSection";
import HowUCanHelp from "@/sections/home/HowUCanHelp";
import VolunteersSection from "@/sections/VolunteersSection";
import { getAllTeamMembers } from "@/lib/sanity/api/team";

export default async function AboutPage() {
  const teamMembers = await getAllTeamMembers();

  return (
    <main>
      <MainNavbar className="text-neutral-300 bg-white" />
      <AboutHero />
      <ObjectiveSection />
      <ModeOfOperation />
      <HowUCanHelp />
      <TeamSection teamMembers={teamMembers} />
      <VolunteersSection />
    </main>
  );
}
