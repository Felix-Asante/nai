import AboutHero from "@/sections/about/AboutHero";
import ModeOfOperation from "@/sections/about/ModeOfOperation";
import ObjectiveSection from "@/sections/about/ObjectiveSection";
import TeamSection from "@/sections/about/TeamSection";
import HowUCanHelp from "@/sections/home/HowUCanHelp";
import VolunteersSection from "@/sections/VolunteersSection";
import { getAllTeamMembers } from "@/lib/sanity/api/team";
import { SupportedLanguages } from "@/types";

type Props = {
  params: Promise<{
    locale: SupportedLanguages;
  }>;
};

export default async function AboutPage(props: Props) {
  const { locale } = await props.params;
  const teamMembers = await getAllTeamMembers(locale);

  return (
    <main>
      <AboutHero />
      <ObjectiveSection />
      <ModeOfOperation />
      <TeamSection teamMembers={teamMembers} />
      <VolunteersSection />
      <HowUCanHelp />
    </main>
  );
}
