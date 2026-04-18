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
    defineField({
      name: "tier",
      title: "Partnership tier",
      type: "string",
      description: "Optional label displayed on the partners grid (e.g. Strategic, Programme, Supplier).",
      options: {
        list: [
          { title: "Strategic", value: "strategic" },
          { title: "Programme", value: "programme" },
          { title: "Community", value: "community" },
          { title: "Supplier", value: "supplier" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers appear first.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "logo",
      subtitle: "tier",
    },
  },
});

export const partnerInquiryType = defineType({
  name: "partnerInquiry",
  title: "Partner Inquiries",
  type: "document",
  fields: [
    defineField({
      name: "organizationName",
      title: "Organization name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactName",
      title: "Contact person",
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
      name: "website",
      title: "Website",
      type: "url",
    }),
    defineField({
      name: "partnershipType",
      title: "Partnership type",
      type: "string",
      options: {
        list: [
          { title: "Strategic Giving", value: "strategic-giving" },
          { title: "Cause Marketing", value: "cause-marketing" },
          { title: "Employee Engagement", value: "employee-engagement" },
          { title: "Gifts In Kind", value: "gifts-in-kind" },
          { title: "Event Partnership", value: "event-partnership" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(10),
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
          { title: "In progress", value: "in-progress" },
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
      title: "organizationName",
      subtitle: "partnershipType",
      media: "status",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Interest: ${subtitle}` : "New inquiry",
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
