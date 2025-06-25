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
      if (["president", "président"].includes(member.position.toLowerCase())) {
        orderedTeamMembers[0] = member;
      } else if (["vice", "vice"].includes(member.position.toLowerCase())) {
        orderedTeamMembers[1] = member;
      } else if (
        ["secretary", "secretaire"].includes(member.position.toLowerCase())
      ) {
        orderedTeamMembers[2] = member;
      } else if (
        ["financial", "financier"].includes(member.position.toLowerCase())
      ) {
        orderedTeamMembers[3] = member;
      } else {
        orderedTeamMembers.push(member);
      }
    });

  return orderedTeamMembers;
}
