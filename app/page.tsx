import Image from "next/image";

import Glitcher_ninni_west from "./assets/images/Glitcher_ninni_west-.jpg";
import Glitcher from "../public/glitcher.svg";

import TextWithLead from "./components/text-with-lead";
import Spacer from "./components/spacer";
import CardCollection from "./components/card-collection";
import Card from "./components/card";

export default function Home() {
	return (
		<div>
			<div className="rounded-2xl bg-glitcherpink w-full p-6 pt-[160px] md:pt-[240px]">
				<div className="-mx-14 text-glitcherred w-fit font-display">
					<Image src={Glitcher} alt=""></Image>
				</div>

				<div className="flex flex-col md:flex-row justify-between w-full gap-12 mt-12">
					<div className="self-end flex-1 flex flex-col gap-4">
						<p>Lorem ipsum dolor sit amet adipiscing consictitur elit.</p>
						<h2>Creative collective</h2>
					</div>
					<div className="flex-1">
						<Image
							src={Glitcher_ninni_west}
							alt="Image of the collective members"
							className="rounded-2xl"
							objectFit="cover"
						/>
					</div>
				</div>
			</div>
			<Spacer h={90} />
			<TextWithLead
				lead="Lorem ipsum dolor sit amet adipiscing consictitur elit.,"
				paragraph="Lorem ipsum dolor sit amet adipiscing consictitur elit."
			/>
			<Spacer h={90} />
			<CardCollection overflow={false}>
				<Card image={Glitcher_ninni_west.src} imageAltText="" headline="Lorem" address="/"/>
				<Card image={Glitcher_ninni_west.src} imageAltText="" headline="Lorem" address="/"/>
				<Card image={Glitcher_ninni_west.src} imageAltText="" headline="Lorem" address="/"/>
			</CardCollection>
		</div>
	);
}
