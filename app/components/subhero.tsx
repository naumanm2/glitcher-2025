import Image, { StaticImageData } from "next/image";

import CTA from "./cta";

interface subheroOptions {
	headline: string;
	subtitle?: string;
	image?: StaticImageData;
	imageAltText?: string;
	params?: Promise<{ slug: string }>;
}

export default async function Subhero({
	headline,
	subtitle,
	image,
	imageAltText,
	params,
}: subheroOptions) {
	const breadcrumb = await params;
	return (
		<div className="rounded-2xl bg-glitcherpink w-full p-6 pt-[160px] md:pt-[240px]">
			<div className="text-glitcherred w-full">
				<h1 className="font-display">{headline}</h1>
			</div>

			<div className="flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12 mt-12">
				<div className="md:self-end flex-1 flex flex-col gap-2 md:gap-4">
					<p>{subtitle}</p>
				</div>
				<div className="flex-1">
					{image && imageAltText && (
						<Image
							src={image.src}
							alt={imageAltText}
							className="rounded-2xl"
							style={{ objectFit: "cover" }}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
