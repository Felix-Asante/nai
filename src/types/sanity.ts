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
  };
  socials: {
    facebook?: string;
    instgram?: string;
    x?: string;
    whatsapp?: string;
    _id: string;
  };
};
