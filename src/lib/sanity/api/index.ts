import { groq } from "next-sanity";
import { sanityFetch } from "../sanity.client";
import { CACHE_TAGS } from "@/constants/enum";
import { FAQ } from "@/types/sanity";

export async function getFAQs() {
  const query = groq`*[_type == "faq"]{
                _id,
                _createdAt,
                question,
                answer,
            }`;
  const faqs = await sanityFetch<FAQ[]>({
    query,
    tags: [CACHE_TAGS.FAQ],
  });
  return faqs;
}
