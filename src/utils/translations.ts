import { SupportedLanguages } from "@/types";
import {
  Categories,
  CategoriesWithTranslation,
  FAQ,
  FaqWithTranslation,
  Projects,
  ProjectWithTranslation,
} from "@/types/sanity";

export function translateProject(
  project: ProjectWithTranslation,
  locale: SupportedLanguages
): Projects {
  const { title, excerpt, category } = project;

  return {
    ...project,
    title: title[locale] ?? title.en!,
    excerpt: excerpt[locale] ?? excerpt.en!,
    category: category[locale] ?? category.en!,
  };
  // if (!project?.translations?.length) {
  //   return project;
  // }

  // const translatedContent = project.translations.find(
  //   (translation) => translation.language === locale
  // );

  // if (!translatedContent) {
  //   return project;
  // }
  // return {
  //   ...translatedContent,
  //   translations: project.translations,
  // };
}
export function translateProjects(
  projects: ProjectWithTranslation[],
  locale: SupportedLanguages
) {
  return projects.map((project) => translateProject(project, locale));
}

function translateCategory(
  category: CategoriesWithTranslation,
  locale: SupportedLanguages
): Categories {
  const { title, description } = category;
  return {
    ...category,
    title: title[locale] ?? title.en!,
    description: description[locale] ?? description.en!,
  };
}

export function translateCategories(
  categories: CategoriesWithTranslation[],
  locale: SupportedLanguages
) {
  return categories.map((category) => translateCategory(category, locale));
}
export function translateFaqs(
  faqs: FaqWithTranslation[],
  locale: SupportedLanguages
): FAQ[] {
  return faqs.map((faq) => {
    return {
      ...faq,
      question: faq.question[locale] ?? faq.question.en!,
      answer: faq.answer[locale] ?? faq.answer.en!,
    };
  });
}
