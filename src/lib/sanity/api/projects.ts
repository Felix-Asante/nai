import { CACHE_TAGS } from "@/constants/enum";
import { sanityFetch } from "../sanity.client";
import { Projects } from "@/types/sanity";
import { groq } from "next-sanity";

type GetProjectParams = {
  page?: number;
  limit?: number;
  category?: string;
};
type GetProjectResponse = {
  related: Projects[];
} & Projects;

export async function getProjects(params: GetProjectParams) {
  const { page = 0, limit = 10, category } = params;

  const countQuery = groq`count(*[_type == "project"])`;

  const totalItems = await sanityFetch<number>({
    query: countQuery,
    qParams: {},
    tags: [CACHE_TAGS.PROJECTS],
  });

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / limit);

  const query = groq`*[_type == "project"] | order(_createdAt desc) [${page}...${limit}] {
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
        "excerpt": excerpt,
        content,
        publishedAt
      }`;

  const projects = await sanityFetch<Projects[]>({
    query,
    qParams: { page, limit },
    tags: [CACHE_TAGS.PROJECTS],
  });

  return {
    items: projects,
    meta: {
      totalItems,
      currentPage: page,
      totalPages,
    },
  };
}

export async function getSingleProject(slug: string) {
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

  const project = await sanityFetch<GetProjectResponse>({
    query,
    qParams: { slug },
    tags: [CACHE_TAGS.PROJECT],
  });
  return project;
}
