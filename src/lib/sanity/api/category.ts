import { CACHE_TAGS } from "@/constants/enum";
import { CategoriesWithTranslation } from "@/types/sanity";
import { groq } from "next-sanity";
import { sanityFetch } from "../sanity.client";
import { translateCategories } from "@/utils/translations";
import { SupportedLanguages } from "@/types";

export async function getAllCategories(locale: SupportedLanguages) {
  const query = groq`*[_type == "category"]{
        _id,
        _createdAt,
        "slug": slug.current,
        title,
        description
      }`;

  const categories = await sanityFetch<CategoriesWithTranslation[]>({
    query,
    qParams: {},
    tags: [CACHE_TAGS.CATEGORIES],
  });

  return translateCategories(categories, locale);
}
