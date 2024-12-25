import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "question",
      type: "i18n.string",
    }),

    defineField({
      name: "answer",
      type: "i18n.text",
    }),
  ],
  preview: {
    select: {
      question: "question.en",
    },
  },
});
