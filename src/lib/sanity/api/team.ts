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

  const positionOrder: Record<string, number> = {
    "Executive Member / President": 0,
    "Membre exécutif / Président": 0,
    "Executive Member / Vice President": 1,
    "Membre exécutif / Vice-Président": 1,
    "Executive Member / Financial Secretary": 2,
    "Membre exécutif / Secrétaire Financier": 2,
  };

  // Sort by role so we never use sparse array indices (assigning [1] or [2]
  // before [0] would leave `undefined` slots and break TeamSection.map).
  return teamMembers
    .map((member) => ({
      ...member,
      position: member.position[locale] || member.position?.en!,
    }))
    .sort((a, b) => {
      const orderA = positionOrder[a.position] ?? 100;
      const orderB = positionOrder[b.position] ?? 100;
      if (orderA !== orderB) return orderA - orderB;
      return a.name.localeCompare(b.name);
    });
}
