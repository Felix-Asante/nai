import { defineField, defineType } from "sanity";

export const teamType = defineType({
  name: "team",
  title: "Team",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "i18n.string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "object",
      fields: [
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "url",
          description:
            "Facebook profile link (eg:https://facebook.com/{profile_id})",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
          description:
            "Instagram profile link (eg:https://instagram.com/{profile_id})",
        }),
        defineField({
          name: "whatsapp",
          title: "WhatsApp",
          type: "url",
          description:
            "Link to start a conversation on WhatsApp (eg:https://wa.me/{countryCode}{phoneNumber})",
        }),
        defineField({
          name: "x",
          title: "X",
          type: "url",
          description: "X profile link (eg:https://x.com/{profile_id})",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
