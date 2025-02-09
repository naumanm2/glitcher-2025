import Glitcher_ninni_west from "./assets/images/Glitcher_ninni_west-.jpg";
import Glitcher from "../public/glitcher.svg";

import TextWithLead from "./components/text-with-lead";
import Spacer from "./components/spacer";
import CardCollection from "./components/card-collection";
import Card from "./components/card";
import Hero from "./components/hero";
import TextParagraph from "./components/text-paragraph";
import CTAdisplay from "./components/cta-display";
import LogoRow from "./components/logo-row";
import Subhero from "./components/subhero";

export default function Home() {
	return (
		<div>
			<Hero heading="Creative Collective" subtitle="lorem ipsum dolor sit amet" />
			<Spacer />
			<Subhero
				headline="The Porn Horror Musical 2"
				subtitle="The night is getting dark, will they make it out of the fuck-cabin alive?"
        image={Glitcher_ninni_west}
        imageAltText="Lorem ipsum"
			/>
			<Spacer />
			<TextWithLead
				lead="Lorem ipsum dolor sit amet adipiscing consictitur elit.,"
				paragraph="Lorem ipsum dolor sit amet adipiscing consictitur elit."
			/>
			<Spacer />
			<CardCollection headline="Shows" address="/">
				<Card
					image={Glitcher_ninni_west.src}
					imageAltText=""
					headline="Lorem"
					address="/"
				/>
				<Card
					image={Glitcher_ninni_west.src}
					imageAltText=""
					headline="Lorem"
					paragraph="10.10.2024 – 10.01.2027"
					address="/"
				/>
			</CardCollection>
			<Spacer />
			<TextParagraph
				headline="About Glitcher"
				paragraph="Glitcher is a Finnish performance collective which has been active since 2019. Today it consists of artists Emelie Zilliacus, Joel Forsbacka, Josefine Fri, Oscar Fagerudd and Martin Paul. "
				ctaAddress="/"
			/>
			<Spacer />
			<CTAdisplay headline="Interested?" text="Contact us" address="/" />
			<Spacer />
			<LogoRow />
			<Spacer />
		</div>
	);
}
