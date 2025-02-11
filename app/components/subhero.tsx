"use client";

import Image, { StaticImageData } from "next/image";

import PopupCTA from "./cta-popup";

import { CyGroteskHero } from "../assets/fonts/index";
import Breadcrumb from "./breadcrumb";

interface CTAoptions {
	text: string;
	arrow: boolean;
	address: string;
}

interface subheroOptions {
	headline: string;
	subtitle?: string;
	subtitle2?: string;
	image?: StaticImageData;
  imageBlurData?: StaticImageData;
	imageAltText?: string;
  ctaText?: string;
	links?: Array<CTAoptions>;
}

export default function Subhero({
	headline,
	subtitle,
	subtitle2,
	image,
  imageBlurData,
	imageAltText,
  ctaText,
	links,
}: subheroOptions) {
	return (
		<div className="rounded-2xl bg-glitcherpink w-full p-4 md:p-6 pt-[160px] md:pt-[240px]">
			<div className="flex flex-col gap-6">
				<Breadcrumb />
				<div className="text-glitcherred w-full">
					<h1 className={`${CyGroteskHero.variable} font-display`}>{headline}</h1>
				</div>
				<div className="flex-1 flex flex-col gap-2 md:gap-4">
					<p>{subtitle}</p>
					<p>{subtitle2}</p>
				</div>

				{links && ctaText && <PopupCTA text={ctaText} links={links} arrow={true} />}
				<div className="flex flex-row justify-between">
					<div className="max-md:hidden flex-1"></div>
					<div className="flex-1">
						{image && imageAltText && imageBlurData && (
							<Image
								src={image}
                blurDataURL={imageBlurData.src}
								alt={imageAltText}
								className="rounded-2xl"
								style={{ objectFit: "cover" }}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
