"use client";

import Image from "next/image";

import PopupCTA from "./cta-popup";

import { CyGroteskHero } from "../assets/fonts/index";
import Breadcrumb from "./breadcrumb";

import { Show } from "@/sanity/types";

interface subheroOptions {
	headline: string;
	subtitle?: string[];
	image?: string;
	year?: string;
	imageBlurData?: string;
	imageAltText?: string;
	ctaText?: string;
	tickets?: Show["tickets"];
}

export default function Subhero({
	headline,
	image,
	imageBlurData,
	imageAltText,
	subtitle,
	year,
	ctaText,
	tickets,
}: subheroOptions) {
	return (
		<div className="rounded-2xl bg-glitcherpink w-full p-4 md:p-6 pt-[160px] md:pt-[240px]">
			<div className="flex flex-col gap-6">
				<Breadcrumb />
				<div className="text-glitcherred w-full">
					<h1 className={`${CyGroteskHero.variable} font-display`}>
						{headline}
						{year && <sup> {year}</sup>}
					</h1>
				</div>
				<div className="flex-1 flex flex-col gap-2">
					{subtitle && subtitle.map((subtitle, index) => <p key={index}>{subtitle}</p>)}
				</div>

				{tickets && ctaText && <PopupCTA text={ctaText} tickets={tickets} arrow={true} />}
				<div className="flex flex-row justify-between">
					<div className="max-md:hidden flex-1"></div>
					<div className="flex-1">
						{image && imageBlurData && (
							<Image
								src={image}
								blurDataURL={imageBlurData}
								width={1600}
								height={1800}
								placeholder="blur"
								alt={imageAltText || "Glitcher show main poster"}
								className="rounded-2xl [aspect-ratio:8/9]"
								style={{ objectFit: "cover" }}
								sizes="(max-width:768px) 100vw, 51vw"
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
