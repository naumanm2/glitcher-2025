import Card from "../components/card/card";
import CardCollection from "../components/card-collection";
import Subhero from "../components/subhero";

import Spacer from "../components/spacer";
import { Metadata } from "next";
import { SHOWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import urlFor from "../(utils)/image-builder";

export const metadata: Metadata = {
	title: "Shows",
};

export default async function Shows() {
	const shows = await client.fetch(SHOWS_QUERY);
	return (
		<>
			<Subhero headline="Shows" />
			<Spacer />
			<CardCollection subtitle={`${shows.length} shows`}>
				{shows.map((content, index) => (
					<Card
						key={index}
						image={urlFor(content.mainImage).url()}
						imageBlurData={urlFor(content.mainImage).blur(1000).url()}
						imageAltText={""}
						headline={content.title}
						subtitle={content.subtitle!}
						address={`/shows/${content.slug.current}`}
					/>
				))}
			</CardCollection>
			<Spacer />
		</>
	);
}
