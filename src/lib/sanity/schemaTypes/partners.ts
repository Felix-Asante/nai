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
      name: "firstName",
      title: "First name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last name",
      type: "string",
    }),
    defineField({
      name: "workEmail",
      title: "Work email",
      type: "string",
    }),
    defineField({
      name: "organizationName",
      title: "Organization name",
      type: "string",
      description: "Optional",
    }),
    defineField({
      name: "contactName",
      title: "Contact person (legacy)",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "email",
      title: "Email (legacy)",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "phone",
      title: "Phone (legacy)",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "website",
      title: "Website (legacy)",
      type: "url",
      hidden: true,
    }),
    defineField({
      name: "partnershipType",
      title: "Partnership type (legacy)",
      type: "string",
      hidden: true,
    }),
    defineField({
      name: "message",
      title: "Message",
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
      firstName: "firstName",
      lastName: "lastName",
      workEmail: "workEmail",
      organization: "organizationName",
    },
    prepare({ firstName, lastName, workEmail, organization }) {
      const name = [firstName, lastName].filter(Boolean).join(" ");
      return {
        title: name || workEmail || "New inquiry",
        subtitle: organization || workEmail || "Corporate partnership inquiry",
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
