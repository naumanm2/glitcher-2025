import { defineField, defineType } from "sanity";

export default defineType({
	name: "member",
	title: "Members",
	type: "document",
	fields: [
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
					validation: (Rule) => Rule.required(),
				},
			],
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "role",
			title: "Role",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "phoneNumber",
			title: "Phone Number",
			type: "string",
			description: "Please add the country code prefix to phone number. Optional.",
		}),
		defineField({
			name: "email",
			title: "Email Address",
			type: "string",
			description: "Optional",
		}),
	],
});
