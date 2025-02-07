"use client";

import Image, { StaticImageData } from "next/image";

import CTA from "./cta";

import { CyGroteskHero } from "../assets/fonts/index";
import Breadcrumb from "./breadcrumb";

interface subheroOptions {
	headline: string;
	subtitle?: string;
	image?: StaticImageData;
	imageAltText?: string;
	ctaText?: string;
	address?: string;
}

export default function Subhero({
	headline,
	subtitle,
	image,
	imageAltText,
  ctaText,
  address
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
				</div>

				{ctaText && address && <CTA text={ctaText} address={address} arrow={true} />}
				<div className="flex flex-row justify-between">
					<div className="max-md:hidden flex-1"></div>
					<div className="flex-1">
						{image && imageAltText && (
							<Image
								src={image}
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
