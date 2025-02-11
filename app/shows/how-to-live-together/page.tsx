import CTAdisplay from "@/app/components/cta-display";
import LogoRow from "@/app/components/logo-row";
import Spacer from "@/app/components/spacer";
import Subhero from "@/app/components/subhero";
import TextParagraph from "@/app/components/text-paragraph";

import content from "./content.mdx";

import HowToLiveTogether from "../../../public/general/how-to-live-together.jpg";
import HowToLiveTogetherBlur from "../../../public/general/how-to-live-together-blur.jpg";


interface linkOptions {
	text: string;
	arrow: boolean;
	address: string;
}

export default function ShowHowToLiveToGether() {
	const tiketti: linkOptions = {
		text: "Viirus, Helsinki",
		arrow: true,
		address: "https://fienta.com/fi/s/viirus-guest-how-to-live-together",
	};
	const kontrar: linkOptions = {
		text: "Konträr, Stockholm",
		arrow: true,
		address: "https://kontrar.se",
	};
	const links: Array<linkOptions> = [tiketti, kontrar];

	return (
		<div>
			<Subhero
				headline="How to Live Together"
				subtitle="15.3.2025 - 29.3.2025 Viirus, Helsinki"
				subtitle2="xx-xx Konträr, Stockholm"
				ctaText="Buy tickets"
				links={links}
				image={HowToLiveTogether}
				imageBlurData={HowToLiveTogetherBlur}
			/>
			<Spacer />
			<TextParagraph headline="About the show" Content={content} />
			<Spacer />
			<CTAdisplay headline="How To Live Together" links={links} text="Buy tickets" />
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
