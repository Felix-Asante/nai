import { CACHE_TAGS } from "@/constants/enum";
import { SupportedLanguages } from "@/types";
import { ProjectWithTranslation } from "@/types/sanity";
import { getAlternateLanguage } from "@/utils";
import { translateProject, translateProjects } from "@/utils/translations";
import { groq } from "next-sanity";
import { sanityFetch } from "../sanity.client";

type GetProjectParams = {
  page?: number;
  limit?: number;
  category?: string;
};
type GetProjectResponse = {
  related: ProjectWithTranslation[];
} & ProjectWithTranslation;

const projectFields = `_id,
    _createdAt,
    "slug": slug.current,
    title,
    language,
    "image": {
      "url": mainImage.asset->url,
      "lqip": mainImage.asset->metadata.lqip,
      "alt": mainImage.asset->alt,
    },
    "category": category->title,
    "excerpt": excerpt,
    publishedAt`;

export async function getProjects(
  params: GetProjectParams,
  locale: SupportedLanguages
) {
  const { page = 0, limit = 10, category } = params;

  const countQuery = groq`count(*[_type == "project"])`;

  const totalItems = await sanityFetch<number>({
    query: countQuery,
    qParams: {},
    tags: [CACHE_TAGS.PROJECTS],
  });

  let categoryRef = null;
  if (category) {
    const categoryQuery = groq`*[_type == "category" && title.[$locale] == $category][0]._id`;
    categoryRef = await sanityFetch<string>({
      query: categoryQuery,
      qParams: { category, locale },
      tags: [CACHE_TAGS.CATEGORIES],
    });
  }

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / limit);

  const query = groq`*[_type == "project" ${categoryRef ? `&& category._ref == $categoryRef` : ""} ] | order(_createdAt desc) [${page * limit}...${(page + 1) * limit}] {
    ${projectFields},
    
  }`;

  const projects = await sanityFetch<ProjectWithTranslation[]>({
    query,
    qParams: {
      page,
      limit,
      categoryRef,
      language: locale,
      otherLanguage: getAlternateLanguage(locale),
    },
    tags: [CACHE_TAGS.PROJECTS],
  });

  return {
    items: translateProjects(projects, locale),
    meta: {
      totalItems,
      currentPage: page,
      totalPages,
    },
  };
}

export async function getSingleProject(
  slug: string,
  locale: SupportedLanguages
) {
  const query = groq`*[_type == "project" && slug.current == $slug][0] {
        _id,
        _createdAt,
        "slug": slug.current,
        title,
        "image": {
          "url": mainImage.asset->url,
          "lqip": mainImage.asset->metadata.lqip,
          "alt": mainImage.asset->alt,
        },
        "category": category->title,
         excerpt,
        content,
        publishedAt,
        "related": *[_type == "project" && category._ref == ^.category._ref && slug.current != $slug] [0..3]{
         _id,
          "slug": slug.current,
          title,
          "category": category->title,
          "image": {
            "url": mainImage.asset->url,
            "alt": mainImage.asset->alt,
          },
           excerpt
        }
      }`;

  const { related, ...project } = await sanityFetch<GetProjectResponse>({
    query,
    qParams: { slug },
    tags: [CACHE_TAGS.PROJECT],
  });
  return {
    ...translateProject(project, locale),
    related: translateProjects(related, locale),
  };
}
