import { defineField, defineType } from "sanity";

export const partnersType = defineType({
  name: "partners",
  title: "Partners",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
      description: "Website or link to partner's profile",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
    },
  },
});
