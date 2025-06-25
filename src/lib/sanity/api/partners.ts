import { groq } from "next-sanity";
import { sanityFetch } from "../sanity.client";
import { CACHE_TAGS } from "@/constants/enum";

export async function getPartners() {
  const query = groq`*[_type == "partners"]{
            _id,
            _createdAt,
            name,
            "logo": {
              "url": logo.asset->url,
              "lqip": logo.asset->metadata.lqip,
              "alt": logo.asset->alt,
            },
            website,
          }`;

  const partners: any = await sanityFetch({
    query,
    tags: [CACHE_TAGS.PARTNERS],
  });
  return partners;
}
