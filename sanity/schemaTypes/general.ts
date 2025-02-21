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
			description: "Headline used next to Glitcher front page main image.",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "subtitle",
			title: "Subtitle",
			type: "string",
			description: "Subtitle used next to Glitcher front page main image. Optional.",
		}),
		defineField({
			name: "phonenumber",
			title: "Phone Number",
			type: "string",
			description: "Phone number to contact Glitcher",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "email",
			title: "Email Address",
			type: "string",
			description: "Email address to contact Glitcher",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "streetaddress",
			title: "Street Address",
			type: "string",
			description: "Optional",
		}),
		defineField({
			name: "mainLogo",
			title: "Main Logo",
			description:
				"Giltcher logo used in front page hero and footer. Use .svg image format.",
			type: "image",
			validation: (Rule) => Rule.required(),
			options: {
				accept: "image/*",
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
					validation: (Rule) => Rule.required(),
				},
			],
		}),
		defineField({
			name: "icon",
			title: "Glitcher Icon",
			description: "Glitcher icon used in navigation. Use .svg image format.",
			type: "image",
			validation: (Rule) => Rule.required(),
			options: {
				accept: "image/*",
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
					validation: (Rule) => Rule.required(),
				},
			],
		}),
		defineField({
			name: "sponsors",
			title: "Sponsors",
			description:
				"Logos of Glitchers sponsors. Please add transparent png images with a width of 226px.",
			type: "array",
			of: [
				{
					name: "image",
					type: "image",
					title: "Image",
					options: {
						hotspot: true,
						accept: "image/png",
					},
					fields: [
						{
							name: "alt",
							type: "string",
							title: "Alternative text",
							validation: (Rule) => Rule.required(),
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
