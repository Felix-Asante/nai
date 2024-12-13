import { groq } from "next-sanity";
import { sanityFetch } from "../sanity.client";
import { CACHE_TAGS } from "@/constants/enum";
import { Categories } from "@/types/sanity";

export async function getAllCategories() {
  const query = groq`*[_type == "category"]{
        _id,
        _createdAt,
        "slug": slug.current,
        title,
        description
      }`;

  return await sanityFetch<Categories[]>({
    query,
    qParams: {},
    tags: [CACHE_TAGS.CATEGORIES],
  });
}
