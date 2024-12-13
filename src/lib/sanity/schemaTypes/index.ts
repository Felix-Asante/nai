import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { projectType } from "./projectsType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, projectType],
};
