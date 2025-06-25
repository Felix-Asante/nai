import { CACHE_TAGS } from "@/constants/enum";
import { TeamsWithTranslation } from "@/types/sanity";
import { groq } from "next-sanity";
import { sanityFetch } from "../sanity.client";
import { SupportedLanguages } from "@/types";

export async function getAllTeamMembers(locale: SupportedLanguages) {
  const query = groq`*[_type == "team"] {
        _id,
        name,
          position,
        "image": {
          "url": image.asset,
          "lqip": image.asset->metadata.lqip,
          "alt": image.asset->alt,
          "hotspot":image.hotspot,
          "crop":image.crop
        },
       socials,    
      }`;

  const teamMembers = await sanityFetch<TeamsWithTranslation[]>({
    query,
    tags: [CACHE_TAGS.TEAM],
  });

  // quick fix
  const orderedTeamMembers: any[] = [];
  teamMembers
    .map((member) => {
      return {
        ...member,
        position: member.position[locale] || member.position?.en!,
      };
    })
    .forEach((member) => {
      if (
        [
          "Executive Member / President",
          "Membre exécutif / Président",
        ].includes(member.position)
      ) {
        orderedTeamMembers[0] = member;
      } else if (
        [
          "Executive Member / Vice President",
          "Membre exécutif / Vice-Président",
        ].includes(member.position)
      ) {
        orderedTeamMembers[1] = member;
      } else if (
        [
          "Executive Member / Financial Secretary",
          "Membre exécutif / Secrétaire Financier",
        ].includes(member.position)
      ) {
        orderedTeamMembers[2] = member;
      } else {
        orderedTeamMembers.push(member);
      }
    });

  return orderedTeamMembers;
}
