// import TextWithLead from "./components/text-with-lead";
import Spacer from "./components/spacer";
import CardCollection from "./components/card-collection";
import Card from "./components/card/card";
import Hero from "./components/hero";
import TextParagraph from "./components/text-paragraph";
import CTAdisplay from "./components/cta-display";
import LogoRow from "./components/logo-row";
import { client } from "@/sanity/lib/client";
import { GENERAL_QUERY, SHOWS_QUERY } from "@/sanity/lib/queries";
import urlFor from "./(utils)/image-builder";

export default async function Home() {
	const shows = await client.fetch(SHOWS_QUERY);
	const general = await client.fetch(GENERAL_QUERY);

	return (
		<div>
			<Hero
				heading={general?.title || "Theatre Collective"}
				subtitle={general?.subtitle || undefined}
				image={general?.mainImage}
				logo={general?.mainLogo}
			/>
			<Spacer />
			{/* <TextWithLead
				lead="–Lasse Garoff, Yle 18.11.2023"
				paragraph="På teaterscenen gottar sig Glitcher i allt det mörka och snaskiga vi älskar: ”Popkultur är lite syndigt”"
			/> 
			<Spacer /> */}
			<CardCollection headline="Current shows">
				{shows.map((content, index) => (
					<Card
						key={index}
						image={urlFor(content.mainImage).url()}
						imageBlurData={urlFor(content.mainImage).blur(1000).url()}
						imageAltText={content.alt || "Show main image"}
						headline={content.title}
						subtitle={content.subtitle!}
						address={`/shows/${content.slug.current}`}
					/>
				))}
			</CardCollection>
			<Spacer />
			<TextParagraph
				headline="About Glitcher"
				paragraph={
					general?.introShort ||
					"Glitcher is a Finnish performance collective which has been active since 2019. Today it consists of artists Emelie Zilliacus, Joel Forsbacka, Josefine Fri, Oscar Fagerudd, Martin Paul and Misan Nykvist."
				}
				ctaAddress="/about-us"
			/>
			<Spacer />
			<CTAdisplay
				headline="Interested?"
				text="Email us"
				address={`mailto:${general?.email || "info@glitcher.info"}`}
			/>
			<Spacer />
			<LogoRow />
			<Spacer />
		</div>
	);
}
