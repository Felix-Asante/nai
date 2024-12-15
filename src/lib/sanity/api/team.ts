import { CACHE_TAGS } from "@/constants/enum";
import { groq } from "next-sanity";
import { sanityFetch } from "../sanity.client";
import { TeamMember } from "@/types/sanity";

export async function getAllTeamMembers() {
  const query = groq`*[_type == "team"] {
        _id,
        name,
          position,
        "image": {
          "url": image.asset->url,
          "lqip": image.asset->metadata.lqip,
          "alt": image.asset->alt,
        },
       socials,    
      }`;

  const teamMembers = await sanityFetch<TeamMember[]>({
    query,
    tags: [CACHE_TAGS.TEAM],
  });
  return teamMembers;
}
