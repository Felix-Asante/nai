import { CACHE_TAGS } from "@/constants/enum";
import { SupportedLanguages } from "@/types";
import { FaqWithTranslation } from "@/types/sanity";
import { groq } from "next-sanity";
import { sanityFetch } from "../sanity.client";
import { translateFaqs } from "@/utils/translations";

export async function getFAQs(locale: SupportedLanguages) {
  const query = groq`*[_type == "faq"]{
                _id,
                _createdAt,
                question,
                answer,
            }`;
  const faqs = await sanityFetch<FaqWithTranslation[]>({
    query,
    tags: [CACHE_TAGS.FAQ],
  });
  return translateFaqs(faqs, locale);
}
