import type { SupportedLanguages } from "@/types";
import {
  BookOpenIcon,
  HeartPulseIcon,
  HandHeartIcon,
  type LucideIcon,
} from "lucide-react";

export type CauseSlug = "education" | "health" | "poverty-relief";

type LocalizedString = Record<SupportedLanguages, string>;
type LocalizedList = Record<SupportedLanguages, string[]>;

export type Cause = {
  slug: CauseSlug;
  emoji: string;
  sdgLabel: LocalizedString;
  title: LocalizedString;
  shortDescription: LocalizedString;
  heroTagline: LocalizedString;
  image: string;
  Icon: LucideIcon;
  accent: {
    badge: string;
    ring: string;
  };
  highlight?: LocalizedString;
  article: {
    intro: LocalizedString;
    paragraphs: LocalizedList;
    supportTitle: LocalizedString;
    supportIntro: LocalizedString;
    supportListIntro: LocalizedString;
    supportList: LocalizedList;
    supportClosing: LocalizedString;
  };
};

export const causes: Cause[] = [
  {
    slug: "education",
    emoji: "📚",
    sdgLabel: {
      en: "Quality Education",
      fr: "Éducation de qualité",
    },
    title: {
      en: "Education",
      fr: "Éducation",
    },
    shortDescription: {
      en: "Through our Edu-Tour seminars and educational outreach programs, we provide essential learning resources, career guidance, and academic support to students and young people, empowering them to reach their full potential.",
      fr: "À travers nos séminaires Edu-Tour et nos programmes de sensibilisation éducative, nous fournissons des ressources d'apprentissage essentielles, une orientation professionnelle et un soutien académique aux jeunes, leur permettant d'atteindre leur plein potentiel.",
    },
    heroTagline: {
      en: "Empowering students and young people through mentorship, guidance and learning resources.",
      fr: "Autonomiser les étudiants et les jeunes grâce au mentorat, à l'orientation et à des ressources pédagogiques.",
    },
    image: "/images/img-18.jpg",
    Icon: BookOpenIcon,
    accent: {
      badge: "bg-sky-100 text-sky-700",
      ring: "ring-sky-200",
    },
    highlight: {
      en: "600+ students directly supported with mentorship, guidance and learning resources.",
      fr: "Plus de 600 étudiants directement soutenus par du mentorat, de l'orientation et des ressources pédagogiques.",
    },
    article: {
      intro: {
        en: "Education is at the heart of sustainable development and long-term poverty reduction. At Noble Alms International, we are committed to ensuring that children and young people in underserved communities have access to quality education, guidance, and opportunities that empower them to build a better future.",
        fr: "L'éducation est au cœur du développement durable et de la réduction de la pauvreté à long terme. Chez Noble Alms International, nous nous engageons à garantir que les enfants et les jeunes des communautés mal desservies aient accès à une éducation de qualité, à un accompagnement et à des opportunités qui leur permettent de bâtir un meilleur avenir.",
      },
      paragraphs: {
        en: [
          "Through our Edu-Tour seminars and educational outreach programs, we engage directly with students in schools and communities to provide academic support, mentorship, and career guidance. These programs are designed to go beyond traditional classroom learning by exposing students to real-life opportunities, helping them understand different career paths, and encouraging them to set clear goals for their future.",
          "We have directly supported over 600 students, providing educational guidance, mentorship, and motivation to help them stay focused on their academic journey and personal development.",
          "In addition to seminars and outreach sessions, we provide essential educational resources such as learning materials, stationery, and academic support to students who lack access to basic school supplies. This helps reduce educational inequality and ensures that financial barriers do not prevent students from learning.",
          "We also work closely with schools, teachers, and community leaders to strengthen learning environments and support educational development at the grassroots level. Our initiatives encourage student participation, improve confidence, and promote leadership skills among young people.",
          "Beyond academics, we focus on mentorship and personal development. Through interactive sessions and motivational engagements, we help students build discipline, ambition, and self-belief — qualities that prepare them not only for school, but for life.",
          "Ultimately, our mission is to ensure that every child and young person, regardless of background or financial situation, has access to quality education and the opportunity to achieve their full potential.",
        ],
        fr: [
          "À travers nos séminaires Edu-Tour et nos programmes de sensibilisation éducative, nous allons directement à la rencontre des élèves dans les écoles et les communautés pour offrir un soutien académique, du mentorat et une orientation professionnelle. Ces programmes vont au-delà de l'apprentissage traditionnel en exposant les élèves à des opportunités concrètes et en les aidant à définir des objectifs clairs pour leur avenir.",
          "Nous avons directement accompagné plus de 600 étudiants, leur apportant conseils, mentorat et motivation pour les aider à rester concentrés sur leur parcours académique et leur développement personnel.",
          "En plus des séminaires et des sessions de sensibilisation, nous fournissons des ressources éducatives essentielles — matériel pédagogique, fournitures scolaires et soutien académique — à des élèves qui n'ont pas accès aux fournitures de base. Cela contribue à réduire les inégalités et à lever les barrières financières.",
          "Nous collaborons également étroitement avec les écoles, les enseignants et les leaders communautaires pour renforcer les environnements d'apprentissage et soutenir le développement éducatif à la base. Nos initiatives encouragent la participation des élèves, renforcent leur confiance et favorisent le leadership chez les jeunes.",
          "Au-delà de l'académique, nous mettons l'accent sur le mentorat et le développement personnel. À travers des sessions interactives et des rencontres motivationnelles, nous aidons les élèves à développer discipline, ambition et confiance en eux — des qualités essentielles pour l'école comme pour la vie.",
          "En fin de compte, notre mission est de garantir que chaque enfant et chaque jeune, quel que soit son milieu ou sa situation financière, ait accès à une éducation de qualité et la possibilité de révéler tout son potentiel.",
        ],
      },
      supportTitle: {
        en: "Support This Cause",
        fr: "Soutenir cette cause",
      },
      supportIntro: {
        en: "Your support makes this work possible.",
        fr: "Votre soutien rend ce travail possible.",
      },
      supportListIntro: {
        en: "Every donation helps us:",
        fr: "Chaque don nous permet de :",
      },
      supportList: {
        en: [
          "Reach more students with educational support and mentorship",
          "Provide essential learning materials and school supplies",
          "Expand our Edu-Tour seminars and outreach programs",
          "Empower young people to achieve their academic goals",
        ],
        fr: [
          "Accompagner plus d'étudiants avec du soutien éducatif et du mentorat",
          "Fournir du matériel pédagogique et des fournitures scolaires essentiels",
          "Élargir nos séminaires Edu-Tour et nos programmes de sensibilisation",
          "Permettre aux jeunes d'atteindre leurs objectifs académiques",
        ],
      },
      supportClosing: {
        en: "Together, we can ensure that education remains accessible to every child, regardless of their circumstances.",
        fr: "Ensemble, nous pouvons faire en sorte que l'éducation reste accessible à chaque enfant, quelles que soient ses circonstances.",
      },
    },
  },
  {
    slug: "health",
    emoji: "🏥",
    sdgLabel: {
      en: "Good Health and Well-being",
      fr: "Bonne santé et bien-être",
    },
    title: {
      en: "Healthcare",
      fr: "Santé",
    },
    shortDescription: {
      en: "Our medical outreach programs, health screenings, and wellness initiatives improve access to healthcare services and promote healthier lives in underserved communities.",
      fr: "Nos programmes de sensibilisation médicale, dépistages et initiatives de bien-être améliorent l'accès aux soins et promeuvent des vies plus saines dans les communautés mal desservies.",
    },
    heroTagline: {
      en: "Bringing essential medical support and awareness directly to communities that need it most.",
      fr: "Apporter un soutien médical essentiel et de la sensibilisation directement aux communautés qui en ont le plus besoin.",
    },
    image: "/images/img-12.jpg",
    Icon: HeartPulseIcon,
    accent: {
      badge: "bg-rose-100 text-rose-700",
      ring: "ring-rose-200",
    },
    highlight: {
      en: "Health screenings, consultations and wellness education delivered where access is limited.",
      fr: "Dépistages de santé, consultations et éducation au bien-être livrés là où l'accès est limité.",
    },
    article: {
      intro: {
        en: "Access to quality healthcare remains a major challenge in many underserved communities. At Noble Alms International, we are committed to improving health outcomes by bringing essential medical support and awareness directly to the people who need it most.",
        fr: "L'accès à des soins de santé de qualité reste un défi majeur dans de nombreuses communautés mal desservies. Chez Noble Alms International, nous nous engageons à améliorer les résultats en matière de santé en apportant un soutien médical essentiel et de la sensibilisation directement aux personnes qui en ont le plus besoin.",
      },
      paragraphs: {
        en: [
          "Through our medical outreach programs, we organize health screenings, wellness education sessions, and community health initiatives aimed at promoting prevention, early detection, and healthier lifestyles. These programs help individuals understand their health status and make informed decisions about their well-being.",
          "We collaborate with healthcare professionals, volunteers, and partners to deliver basic health services in communities where access to medical care is limited. These include general health checks, consultations, and health education focused on common preventable conditions.",
          "Our initiatives also emphasize hygiene awareness, nutrition education, and preventive care practices. By educating communities on healthy living, we aim to reduce avoidable illnesses and improve long-term health outcomes.",
          "We also focus on reaching vulnerable groups such as children, the elderly, and low-income families who are often the most affected by limited healthcare access. Through targeted outreach, we work to ensure that no one is left behind when it comes to basic health support.",
          "Ultimately, our goal is to create healthier, more informed communities where individuals have the knowledge and access they need to live healthier and more productive lives.",
        ],
        fr: [
          "À travers nos programmes de sensibilisation médicale, nous organisons des dépistages de santé, des sessions d'éducation au bien-être et des initiatives communautaires visant à promouvoir la prévention, la détection précoce et des modes de vie plus sains. Ces programmes aident chacun à comprendre son état de santé et à prendre des décisions éclairées.",
          "Nous collaborons avec des professionnels de la santé, des bénévoles et des partenaires pour offrir des services de santé de base dans les communautés où l'accès aux soins médicaux est limité : bilans de santé généraux, consultations et éducation à la santé axées sur les affections évitables courantes.",
          "Nos initiatives mettent également l'accent sur la sensibilisation à l'hygiène, l'éducation nutritionnelle et les pratiques de soins préventifs. En éduquant les communautés sur un mode de vie sain, nous visons à réduire les maladies évitables et à améliorer les résultats de santé à long terme.",
          "Nous concentrons également nos efforts sur les groupes vulnérables — enfants, personnes âgées et familles à faible revenu — qui sont souvent les plus touchés par le manque d'accès aux soins. Grâce à une sensibilisation ciblée, nous veillons à ce que personne ne soit laissé pour compte.",
          "En fin de compte, notre objectif est de créer des communautés plus saines et mieux informées, où chacun dispose des connaissances et de l'accès nécessaires pour mener une vie plus saine et plus productive.",
        ],
      },
      supportTitle: {
        en: "Support This Cause",
        fr: "Soutenir cette cause",
      },
      supportIntro: {
        en: "Your support helps us expand our healthcare impact and reach more communities in need.",
        fr: "Votre soutien nous aide à étendre notre impact et à atteindre davantage de communautés dans le besoin.",
      },
      supportListIntro: {
        en: "Every donation allows us to:",
        fr: "Chaque don nous permet de :",
      },
      supportList: {
        en: [
          "Conduct more medical outreach and health screening programs",
          "Provide basic health services in underserved communities",
          "Promote health education and disease prevention awareness",
          "Support vulnerable individuals with access to essential care",
        ],
        fr: [
          "Mener davantage de programmes de sensibilisation médicale et de dépistage",
          "Offrir des services de santé de base dans les communautés mal desservies",
          "Promouvoir l'éducation à la santé et la sensibilisation à la prévention",
          "Soutenir les personnes vulnérables en leur garantissant l'accès aux soins essentiels",
        ],
      },
      supportClosing: {
        en: "Together, we can improve health outcomes and ensure that more people have access to the care and information they need to live healthier lives.",
        fr: "Ensemble, nous pouvons améliorer les résultats de santé et garantir à plus de personnes l'accès aux soins et à l'information dont elles ont besoin pour vivre en meilleure santé.",
      },
    },
  },
  {
    slug: "poverty-relief",
    emoji: "💙",
    sdgLabel: {
      en: "No Poverty",
      fr: "Pas de pauvreté",
    },
    title: {
      en: "Poverty Alleviation",
      fr: "Lutte contre la pauvreté",
    },
    shortDescription: {
      en: "Through our humanitarian support programs, we provide food, clothing, and essentials to those in need, helping to alleviate poverty and improve living conditions for vulnerable members of society.",
      fr: "À travers nos programmes humanitaires, nous fournissons de la nourriture, des vêtements et des produits essentiels aux personnes dans le besoin, contribuant à atténuer la pauvreté et à améliorer les conditions de vie des membres les plus vulnérables de la société.",
    },
    heroTagline: {
      en: "Restoring dignity and hope to families facing difficult living conditions.",
      fr: "Redonner dignité et espoir aux familles confrontées à des conditions de vie difficiles.",
    },
    image: "/images/poverty.jpg",
    Icon: HandHeartIcon,
    accent: {
      badge: "bg-indigo-100 text-indigo-700",
      ring: "ring-indigo-200",
    },
    highlight: {
      en: "Food, clothing and essentials distributed to widows, children, the elderly and low-income families.",
      fr: "Nourriture, vêtements et essentiels distribués aux veuves, enfants, personnes âgées et familles à faible revenu.",
    },
    article: {
      intro: {
        en: "Poverty remains one of the most pressing challenges affecting individuals and families in many communities. At Noble Alms International, we are committed to providing humanitarian support that helps ease immediate hardship while contributing to long-term community well-being.",
        fr: "La pauvreté demeure l'un des défis les plus pressants pour les individus et les familles dans de nombreuses communautés. Chez Noble Alms International, nous nous engageons à fournir un soutien humanitaire qui soulage les difficultés immédiates tout en contribuant au bien-être à long terme des communautés.",
      },
      paragraphs: {
        en: [
          "Through our poverty relief programs, we provide essential resources such as food supplies, clothing, and basic necessities to vulnerable individuals and families facing difficult living conditions. These efforts are aimed at addressing urgent needs and improving daily living standards.",
          "We focus particularly on supporting widows, children, the elderly, and low-income families who are most affected by economic hardship. By reaching these groups, we aim to restore dignity and provide hope to those who are struggling.",
          "In addition to direct aid, we also support community-based initiatives that encourage resilience and sustainable improvement. We believe that addressing poverty requires both immediate relief and long-term support systems that help communities become stronger over time.",
          "Our work is guided by compassion and a commitment to ensuring that no one is left behind. Every initiative is designed to provide practical support that makes a real difference in people's lives.",
          "Ultimately, our goal is to help create communities where individuals and families can meet their basic needs, live with dignity, and have the opportunity to work toward a better future.",
        ],
        fr: [
          "À travers nos programmes de lutte contre la pauvreté, nous fournissons des ressources essentielles — nourriture, vêtements et produits de première nécessité — aux personnes et familles vulnérables confrontées à des conditions de vie difficiles. Ces efforts visent à répondre à des besoins urgents et à améliorer les conditions de vie au quotidien.",
          "Nous mettons particulièrement l'accent sur le soutien aux veuves, aux enfants, aux personnes âgées et aux familles à faible revenu, qui sont les plus touchés par les difficultés économiques. En atteignant ces groupes, nous cherchons à restaurer la dignité et à apporter de l'espoir à ceux qui luttent.",
          "En plus de l'aide directe, nous soutenons des initiatives communautaires qui favorisent la résilience et une amélioration durable. Nous croyons que la lutte contre la pauvreté nécessite à la fois une aide immédiate et des systèmes de soutien à long terme qui renforcent les communautés.",
          "Notre travail est guidé par la compassion et par l'engagement de ne laisser personne de côté. Chaque initiative est conçue pour apporter un soutien concret qui fait une réelle différence dans la vie des gens.",
          "En fin de compte, notre objectif est d'aider à créer des communautés où les individus et les familles peuvent répondre à leurs besoins essentiels, vivre dans la dignité et avoir la possibilité de bâtir un meilleur avenir.",
        ],
      },
      supportTitle: {
        en: "Support This Cause",
        fr: "Soutenir cette cause",
      },
      supportIntro: {
        en: "Your support plays a vital role in helping us reach those most in need.",
        fr: "Votre soutien joue un rôle essentiel pour nous permettre d'atteindre ceux qui en ont le plus besoin.",
      },
      supportListIntro: {
        en: "Every donation helps us:",
        fr: "Chaque don nous permet de :",
      },
      supportList: {
        en: [
          "Provide food and essential supplies to vulnerable families",
          "Distribute clothing and basic necessities to those in hardship",
          "Support widows, children, and low-income households",
          "Strengthen community-based relief efforts",
        ],
        fr: [
          "Fournir de la nourriture et des produits essentiels aux familles vulnérables",
          "Distribuer des vêtements et des produits de première nécessité à ceux qui en ont besoin",
          "Soutenir les veuves, les enfants et les ménages à faible revenu",
          "Renforcer les efforts de secours ancrés dans la communauté",
        ],
      },
      supportClosing: {
        en: "Together, we can reduce hardship, restore dignity, and bring hope to individuals and families who need it most.",
        fr: "Ensemble, nous pouvons réduire les difficultés, restaurer la dignité et apporter de l'espoir aux personnes et aux familles qui en ont le plus besoin.",
      },
    },
  },
];

export function getCauseBySlug(slug: string): Cause | undefined {
  return causes.find((c) => c.slug === slug);
}
