"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "@/utils/env";
import { schema } from "@/lib/sanity/schemaTypes";
import { structure } from "@/lib/sanity/sanity.structure";
import { documentInternationalization } from "@sanity/document-internationalization";
import { I18nFields } from "sanity-plugin-i18n-fields";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    I18nFields({
      locales: [
        {
          code: "en",
          label: "🇬🇧 English",
          default: true,
          title: "English",
        },
        {
          code: "fr",
          label: "🇫🇷 French",
          title: "French",
        },
      ],
    }),
    documentInternationalization({
      // Required configuration
      supportedLanguages: [
        { id: "fr", title: "French" },
        { id: "en", title: "English" },
      ],
      schemaTypes: ["project"],
    }),
  ],
});
