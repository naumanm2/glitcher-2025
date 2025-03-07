import urlFor from "@/utils/image-builder";
import CTAdisplay from "@/app/components/cta-display";
import LogoRow from "@/app/components/logo-row";
import RichTextParagraph from "@/app/components/richtext-paragraph";
import Spacer from "@/app/components/spacer";
import Subhero from "@/app/components/subhero";
import { client } from "@/sanity/lib/client";
import { SHOW_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "",
};

const SLUGS_QUERY = `*[_type == "show"]{ "id": slug.current }`;

export default async function showPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;
	const content = await client.fetch(SHOW_QUERY, { slug: id });

	if (!content) {
		return "There was an error fetching content.";
	}
	return (
		<>
			<Subhero
				headline={content.title}
				subtitle={content.subtitle || []}
				tickets={content.tickets!}
				year={content.year || undefined}
				image={urlFor(content.mainImage).url()}
				imageAltText={content.mainImage.alt}
				imageBlurData={urlFor(content.mainImage).blur(1000).url()}
				ctaText="Buy tickets"
			/>
			<Spacer />
			<RichTextParagraph headline="About the show" content={content.content!} />
			<Spacer />
			<CTAdisplay
				headline={content.title!}
				tickets={content.tickets!}
				text="Buy tickets"
			/>
			<Spacer />
			<LogoRow />
			<Spacer />
		</>
	);
}
export async function generateStaticParams() {
	// Fetch only the slugs to minimize query size
	const slugs = await client.fetch(SLUGS_QUERY);
	return slugs.map((show: { id: string }) => ({ id: show.id }));
}
