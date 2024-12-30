type TranslationField = {
  en?: string;
  fr?: string;
};

export type ProjectWithTranslation = {
  _id: string;
  _createdAt: string;
  title: TranslationField;
  slug: string;
  excerpt: TranslationField;
  image: {
    url: string;
    lqip: string;
    alt: string;
  };
  category: TranslationField;
  content: any[];
  publishedAt: string;
};

export type CategoriesWithTranslation = {
  _id: string;
  _createdAt: string;
  title: TranslationField;
  slug: string;
  description: TranslationField;
};
export type FaqWithTranslation = {
  _id: string;
  _createdAt: string;
  question: TranslationField;
  answer: TranslationField;
};

export type TeamsWithTranslation = Omit<TeamMember, "position"> & {
  position: TranslationField;
};

type Hotspot = {
  x: number;
  y: number;
  height: number;
  width: number;
};

type Crop = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

type Project = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  excerpt: string;
  image: {
    url: string;
    lqip: string;
    alt: string;
    hotspot: Hotspot;
    crop: Crop;
  };
  category: string;
  content: any[];
  publishedAt: string;
};

export type Projects = Project & {
  // translations: Project[];
};

export type Categories = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  description: string;
};

export type TeamMember = {
  _id: string;
  _createdAt: string;
  name: string;
  position: string;
  image: {
    url: string;
    lqip: string;
    alt: string;
    hotspot: Hotspot;
    crop: Crop;
  };
  socials: {
    facebook?: string;
    instgram?: string;
    x?: string;
    whatsapp?: string;
    _id: string;
  };
};

export type FAQ = {
  _id: string;
  _createdAt: string;
  question: string;
  answer: string;
};
