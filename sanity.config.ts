"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

import { UserIcon } from '@sanity/icons'
import GlitcherEye from "@/app/(utils)/icon";
export default defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	// Add and edit the content schema in the './sanity/schemaTypes' folder
	schema,
	plugins: [
		structureTool({
			structure: (S, context) => {
				return S.list()
					.title("Content")
					.items([
						// Minimum required configuration
						...S.documentTypeListItems().filter((item) => item.getId() !== "show" && item.getId() !== "member"),
						orderableDocumentListDeskItem({
							type: "member",
							S,
							context,
              icon: UserIcon,
							title: "Members",
							id: "members",
						}),
						orderableDocumentListDeskItem({
							type: "show",
							S,
							context,
							icon: GlitcherEye,
							title: "Shows",
							id: "shows",
						}),
					]);
			},
		}),
	],
});
