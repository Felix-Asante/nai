import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { projectType } from "./projectsType";
import { teamType } from "./teamType";
import { faqType } from "./faqType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, projectType, teamType, faqType],
};
