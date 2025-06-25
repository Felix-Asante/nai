import { defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "object",
  fields: [
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility",
            },
          ],
        },
        {
          type: "file",
          title: "Video",
          options: {
            accept: "video/*",
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
              description: "Important for SEO and accessibility",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      title: "gallery[0].name",
    },
    prepare: (selectedFields) => {
      const { title } = selectedFields;
      return {
        title: "Gallery",
      };
    },
  },
});
