import Image from "next/image";

import GlitcherMainBlur from "@/public/general/glitcher-blur.jpg";
import { client } from "@/sanity/lib/client";
import urlFor from "../../(utils)/image-builder";
import { GENERAL_QUERY } from "@/sanity/lib/queries";

export default async function Hero() {
	const content = await client.fetch(GENERAL_QUERY);

	if (!content) return <p>Error</p>;
	return (
		<div className="rounded-2xl bg-glitcherpink w-full p-4 md:p-6 pt-[80px] md:pt-[140px] relative">
			<div className="text-glitcherred w-full scale-[120%] md:scale-110 flex justify-center font-display -mb-[7vw] md:-mb-[25vw]">
				<Image
					src={urlFor(content.mainLogo.asset!).url()}
					alt={content.mainLogo.alt || "Typographical logo of Glitcher Collective spelling 'Glitcher'"}
					width={1080}
					height={280}
					className="w-[100vw]"
				/>
			</div>
			<div className="relative flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12 mt-12 z-10">
				<div className="md:self-end flex-1 flex flex-col gap-2 md:gap-4">
					<p>{content.subtitle}</p>
					<h2>{content.title}</h2>
				</div>
				<div className="flex-1 shadow-md rounded-2xl overflow-hidden">
					<Image
						src={urlFor(content.mainImage.asset!).width(1600).height(1800).url()}
						blurDataURL={GlitcherMainBlur.src}
						alt={content.mainImage.alt || "Main image of Glitcher Collective"}
						width={1600}
						height={1800}
						placeholder="blur"
						style={{ objectFit: "cover" }}
						sizes="(max-width:768px) 100vw, 50vw"
					/>
				</div>
			</div>
		</div>
	);
}
