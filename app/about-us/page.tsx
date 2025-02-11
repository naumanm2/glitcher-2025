import Card from "../components/card";
import ImageCollection from "../components/image-collection";
import Spacer from "../components/spacer";
import Subhero from "../components/subhero";
import TextParagraph from "../components/text-paragraph";
import CTAdisplay from "../components/cta-display";
import LogoRow from "../components/logo-row";

import josefine from "../../public/performers/josefine.jpg";
import josefineBlur from "../../public/performers/josefine-blur.jpg";
import fagge from "../../public/performers/fagge.jpg";
import faggeBlur from "../../public/performers/fagge-blur.jpg";
import joel from "../../public/../public/performers/joel.jpg";
import joelBlur from "../../public/performers/joel-blur.jpg";
import emelie from "../../public/performers/emelie.jpg";
import emelieBlur from "../../public/performers/emelie-blur.jpg";
import martin from "../../public/performers/martin.jpg";
import martinBlur from "../../public/performers/martin-blur.jpg";
import misan from "../../public/performers/misan.jpg";
import misanBlur from "../../public/performers/misan-blur.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About us"
}


export default function About() {
	return (
		<>
			<Subhero headline="About us" />
			<Spacer />
			<TextParagraph
				headline="Glitcher"
				ingress="Glitcher is a Finnish performance collective which has been active since 2019. Today it consists of artists Emelie Zilliacus, Joel Forsbacka, Josefine Fri, Oscar Fagerudd and Martin Paul. "
				paragraph="Glitcher is inspired by exploiting genres, diving deep into pop cultural narratives and examining contemporary societal constructs through comedy and the grotesque. Though Glitcher often portrays the darkest corners of human behavior they always strive to have working processes filled with joy and to stay playful with the material. By diluting and exploiting western pop culture they hope to unveil the latent problematics that lie hidden underneath, making them more concrete and less distant. Glitcher is a genre machine, a violent dance on the last ruin of humanity, an homage to longing for the forbidden and a great fucking party! Join them in celebrating the macabre, the gory, the bizarre and the beautiful."
			/>
			<Spacer />
			<ImageCollection>
				<Card
					image={josefine}
					imageBlurData={josefineBlur}
					imageAltText="Portrait image of Josefine Fri, performer at Glitcher"
					headline="Josefine Fri"
					paragraph="Performer"
				/>
				<Card
					image={martin}
					imageBlurData={martinBlur}
					imageAltText="Portrait image of Martin Paul, performer at Glitcher"
					headline="Martin Paul"
					paragraph="Performer"
				/>
				<Card
					image={joel}
					imageBlurData={joelBlur}
					imageAltText="Portrait image of Joel Forsbacka, performer at Glitcher"
					headline="Joel Forsbacka"
					paragraph="Performer"
				/>
				<Card
					image={emelie}
					imageBlurData={emelieBlur}
					imageAltText="Portrait image of Emelie Zilliacus, performer at Glitcher"
					headline="Emelie Zilliacus"
					paragraph="Performer"
				/>
				<Card
					image={fagge}
					imageBlurData={faggeBlur}
					imageAltText="Portrait image of Oscar Faggerudd, technician at Glitcher"
					headline="Oscar Faggerudd"
					paragraph="Technician"
				/>
				<Card
					image={misan}
					imageBlurData={misanBlur}
					imageAltText="Portrait image of Misan Nykvist, Director at Glitcher"
					headline="Misan Nykvist"
					paragraph="Producer"
					phone="+358 45 136 4006"
				/>
			</ImageCollection>
			<Spacer />
			<CTAdisplay
				headline="Interested?"
				text="Email us"
				address="mailto:info@glitcher.info"
			/>
			<Spacer />
			<LogoRow />
			<Spacer />
		</>
	);
}
