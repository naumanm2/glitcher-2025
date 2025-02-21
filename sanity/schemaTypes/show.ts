import { defineField, defineType } from "sanity";

export default defineType({
  name: "show",
  title: "Shows",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(10).max(80),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      title: "Is the show currently running?",
      name: "live",
      type: "boolean",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tickets",
      title: "Tickets",
      type: "array",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            {
              title: "Title",
              type: "string",
              name: "address",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Web address",
              type: "url",
              name: "url",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    }),
  ],
});
