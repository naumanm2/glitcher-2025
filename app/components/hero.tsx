import Image from "next/image";

import Glitcher from "../../public/logos/glitcher-red.svg";
import GlitcherMain from "../../public/general/glitcher.jpg";
import GlitcherMainBlur from "../../public/general/glitcher-blur.jpg";
import { client } from "@/sanity/lib/client";
import urlFor from "../(utils)/image-builder";
import { SanityImage } from "../(utils)/sanityimage";

export default async function Hero({
	image,
	heading,
	logo,
	subtitle,
}: {
	image: SanityImage | undefined;
	logo: SanityImage | undefined;
	heading: string;
	subtitle: string | undefined;
}) {
	return (
		<div className="rounded-2xl bg-glitcherpink w-full p-4 md:p-6 pt-[160px] md:pt-[240px] relative">
			<div className="text-glitcherred w-full scale-[120%] md:scale-110 flex justify-center font-display -z-10">
				{logo && logo.asset ? (
					<Image
						src={urlFor(logo.asset).url()}
						blurDataURL={urlFor(logo.asset).blur(1000).url()}
						alt={logo.alt || "Main image of Glitcher Collective"}
						width={1080}
						height={280}
						className="w-[100vw]"
					/>
				) : (
					<p>Failed to fetch logo.</p>
				)}
			</div>

			<div className="relative flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12 mt-12 z-10">
				<div className="md:self-end flex-1 flex flex-col gap-2 md:gap-4">
					<p>{subtitle}</p>
					<h2>{heading}</h2>
				</div>
				<div className="flex-1">
					{image && image.asset ? (
						<Image
							src={urlFor(image.asset).url()}
							blurDataURL={urlFor(image.asset).blur(1000).url()}
							alt={image.alt || "Main image of Glitcher Collective"}
							width={1600}
							height={1800}
							className="rounded-2xl"
							placeholder="blur"
							style={{ objectFit: "cover", width: "auto" }}
						/>
					) : (
						<p>Failed to fetch image.</p>
					)}
				</div>
			</div>
		</div>
	);
}
