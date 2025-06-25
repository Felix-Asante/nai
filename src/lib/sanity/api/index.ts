import { CACHE_TAGS } from "@/constants/enum";
import { SupportedLanguages } from "@/types";
import { FaqWithTranslation, Gallery } from "@/types/sanity";
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

export async function getGallery() {
  const query = groq`*[_type == "gallery"]{
                "gallery": gallery[] {
                  _type,
                  "url": asset->url,
                  alt
              }
            }`;
  const gallery: any = await sanityFetch({
    query,
    tags: ["gallery"],
  });
  return gallery[0].gallery as Gallery[];
}
