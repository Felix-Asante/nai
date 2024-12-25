import { defineField, defineType, defineArrayMember } from "sanity";
import { internationalizedArray } from "sanity-plugin-internationalized-array";

export const localizedBlockContent = defineType({
  title: "Localized Block Content",
  name: "localizedBlockContent",
  type: "object",
  fields: [
    {
      title: "English",
      name: "en",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        }),
      ],
    },
    {
      title: "French",
      name: "fr",
      type: "array",
      validation: (Rule) => Rule.optional(),
      of: [
        defineArrayMember({
          type: "block",
          // Same configuration as English
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        }),
      ],
    },
  ],
});

export const projectType = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "i18n.string",
      validation: (Rule) => Rule.required(),
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "i18n.text",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
      // rows: 4,
      // validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "category",
      type: "reference",
      to: { type: "category" },
      validation: (Rule) => Rule.required(),
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
        documentInternationalization: {
          exclude: true,
        },
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      validation: (Rule) => Rule.required().assetRequired(),
    }),

    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    // defineField({
    //   name: "content",
    //   title: "Content",
    //   type: "localizedBlockContent",
    //   // validation: (Rule) => Rule.required(),
    // }),
    defineField({
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),

    defineField({
      name: "publishedAt",
      type: "datetime",
      options: {
        documentInternationalization: {
          exclude: true,
        },
      },
    }),
  ],
  preview: {
    select: {
      title: "title.en",
      media: "mainImage",
    },
  },
});
