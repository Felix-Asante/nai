import { groq } from "next-sanity";
import { sanityFetch } from "../sanity.client";
import { CACHE_TAGS } from "@/constants/enum";

export type PartnerRecord = {
  _id: string;
  _createdAt: string;
  name: string;
  logo: {
    url: string;
    lqip?: string;
    alt?: string;
  } | null;
  website?: string;
  tier?: string;
  order?: number;
};

export async function getPartners(): Promise<PartnerRecord[]> {
  const query = groq`*[_type == "partners"] | order(coalesce(order, 999) asc, name asc){
            _id,
            _createdAt,
            name,
            "logo": {
              "url": logo.asset->url,
              "lqip": logo.asset->metadata.lqip,
              "alt": coalesce(logo.alt, name),
            },
            website,
            tier,
            order,
          }`;

  const partners = await sanityFetch<PartnerRecord[]>({
    query,
    tags: [CACHE_TAGS.PARTNERS],
  });
  return partners || [];
}
