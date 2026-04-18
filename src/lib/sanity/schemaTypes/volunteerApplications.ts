import { defineField, defineType } from "sanity";

export const volunteerApplicationType = defineType({
  name: "volunteerApplication",
  title: "Volunteer Applications",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),
    defineField({
      name: "interests",
      title: "Areas of interest",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Education Support", value: "education" },
          { title: "Health & Medical Outreach", value: "health" },
          { title: "Community Development", value: "community" },
          { title: "Other", value: "other" },
        ],
      },
    }),
    defineField({
      name: "interestsOther",
      title: "Other (specify)",
      type: "string",
      description: "Details provided when 'Other' is selected.",
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
      options: {
        list: [
          { title: "Weekdays", value: "weekdays" },
          { title: "Weekends", value: "weekends" },
          { title: "Both", value: "both" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "hoursPerWeek",
      title: "Hours per week available",
      type: "string",
    }),
    defineField({
      name: "motivation",
      title: "Motivation",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Onboarded", value: "onboarded" },
          { title: "Closed", value: "closed" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted at",
      type: "datetime",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      email: "email",
      availability: "availability",
    },
    prepare({ title, email, availability }) {
      return {
        title: title || email || "New application",
        subtitle: availability
          ? `Available: ${availability}`
          : "Volunteer application",
      };
    },
  },
  orderings: [
    {
      name: "submittedAtDesc",
      title: "Most recent",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
});
