import { defineField, defineType } from "sanity";

export default defineType({
  name: "generalinfo",
  title: "General Information",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "phonenumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "streetaddress",
      title: "Street Address",
      type: "string",
    }),
    defineField({
      name: "sponsors",
      title: "Sponsors",
      description:
        "Logos of Glitchers sponsors. Please add transparent png images with a width of 226px.",
      type: "array",
      of: [
        {
          name: "images",
          type: "array",
          title: "Images",
          of: [
            {
              name: "image",
              type: "image",
              title: "Image",
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
            },
          ],
        },
      ],
    }),
    defineField({
      name: "introShort",
      title: "Short Intro",
      description:
        "Short intro text of Glitcher, used in front page 'About Glitcher' block",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introLong",
      title: "Long Intro",
      description: "Long intro text of Glitcher, used in about us page ",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
