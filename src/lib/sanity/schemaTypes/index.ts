import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { projectType } from "./projectsType";
import { teamType } from "./teamType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, projectType, teamType],
};
