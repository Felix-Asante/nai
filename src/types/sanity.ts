export type Projects = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  excerpt: string;
  image: {
    url: string;
    lqip: string;
    alt: string;
  };
  category: string;
  content: any[];
  publishedAt: string;
};
