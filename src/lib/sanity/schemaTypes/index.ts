import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { projectType, localizedBlockContent } from "./projectsType";
import { teamType } from "./teamType";
import { faqType } from "./faqType";
import { galleryType } from "./galleryType";
import { partnersType } from "./partners";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localizedBlockContent,
    blockContentType,
    categoryType,
    projectType,
    teamType,
    faqType,
    galleryType,
    partnersType,
  ],
};
