import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      type: "string",
    }),

    defineField({
      name: "answer",
      type: "text",
    }),
  ],
});
