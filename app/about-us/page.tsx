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

import content from "./content.mdx";
import { client } from "@/sanity/lib/client";
import { MEMBERS_QUERY } from "@/sanity/lib/queries";
import { Member } from "@/sanity/types";
import urlFor from "../(utils)/image-builder";

export const metadata: Metadata = {
	title: "About us",
};

export default async function About() {
	const members = await client.fetch(MEMBERS_QUERY);
	console.log(members);

	return (
		<>
			<Subhero headline="About us" />
			<Spacer />
			<TextParagraph headline="Glitcher" Content={content} ingress="" paragraph="" />
			<Spacer />
			<ImageCollection>
				{members &&
					members.map((member, index) => (
						<Card
							key={index}
							image={member.image!}
							imageBlurData={urlFor(member.image!).blur(1000).url()}
							imageAltText={member.alt}
							headline={member.name}
							paragraph={member.role}
							phone={member.phoneNumber ? member.phoneNumber : undefined}
						/>
					))}
				{/* <Card
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
					headline="Oscar Fagerudd"
					paragraph="Sound designer, Technical producer"
					phone="+358 45 357 6966"
				/>
				<Card
					image={misan}
					imageBlurData={misanBlur}
					imageAltText="Portrait image of Misan Nykvist, Director at Glitcher"
					headline="Misan Nykvist"
					paragraph="Producer"
					phone="+358 45 136 4006"
				/> */}
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
