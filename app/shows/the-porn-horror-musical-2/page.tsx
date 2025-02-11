import CTAdisplay from "@/app/components/cta-display";
import LogoRow from "@/app/components/logo-row";
import Spacer from "@/app/components/spacer";
import Subhero from "@/app/components/subhero";
import TextParagraph from "@/app/components/text-paragraph";

import content from "./content.mdx";

import ThePornHorrorMusicalTwo from "../../../public/general/tphm.jpg";
import ThePornHorrorMusicalTwoBlur from "../../../public/general/tphm-blur.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "The Porn Horror Musical 2"
}

interface linkOptions {
	text: string;
	arrow: boolean;
	address: string;
}

export default function ShowThePornHorrorMusicalTwo() {
	const tickets: linkOptions = {
		text: "Tehdas Teatteri, Åbo",
		arrow: true,
		address: "https://ssl.eventilla.com/pornhorrormusical",
	};
	const links: Array<linkOptions> = [tickets];

	return (
		<div>
			<Subhero
				headline="The Porn Horror Musical 2"
				subtitle="22.5-24.5.2025 Tehdas Teatteri, Åbo"
				ctaText="Buy tickets"
				links={links}
				image={ThePornHorrorMusicalTwo}
				imageBlurData={ThePornHorrorMusicalTwoBlur}
			/>
			<Spacer />
			<TextParagraph headline="About the show" Content={content} />
			<Spacer />
			<CTAdisplay headline="The Porn Horror Musical 2" links={links} text="Buy tickets" />
			<Spacer />
			<TextParagraph
				headline="About Glitcher"
				paragraph="Glitcher is a Finnish performance collective which has been active since 2019. Today it consists of artists Emelie Zilliacus, Joel Forsbacka, Josefine Fri, Oscar Fagerudd and Martin Paul. "
				ctaAddress="/about-us"
			/>
			<Spacer />
			<LogoRow />
			<Spacer />
		</div>
	);
}
