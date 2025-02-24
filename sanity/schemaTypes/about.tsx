import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().custom((slug) => {
        if (typeof slug === "undefined") return true
        const regex = /(^[a-z0-9-]+$)/ 
        if (slug.current && regex.test(slug.current)) {
          return true
        } else {
          return "Invalid slug: Only numbers, lowercase letters, and dashes are permitted." 
        }
      }),
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "members",
      title: "Members",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "member" }],
        },
      ],
    }),
  ],
});
