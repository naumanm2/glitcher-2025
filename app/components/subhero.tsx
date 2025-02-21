"use client";

import Image from "next/image";

import PopupCTA from "./cta-popup";

import { CyGroteskHero } from "../assets/fonts/index";
import Breadcrumb from "./breadcrumb";

import { Show } from "@/sanity/types";

interface CTAoptions {
  text: string;
  arrow: boolean;
  address: string;
}

interface subheroOptions {
  headline: string;
  subtitle?: string[];
  image?: string;
  imageBlurData?: string;
  imageAltText?: string;
  ctaText?: string;
  links?: Array<CTAoptions>;
  tickets?: Show["tickets"];
}

export default function Subhero({
  headline,
  image,
  imageBlurData,
  imageAltText,
  subtitle,
  ctaText,
  links,
  tickets,
}: subheroOptions) {
  console.log("imageblur:" + imageBlurData);
  return (
    <div className="rounded-2xl bg-glitcherpink w-full p-4 md:p-6 pt-[160px] md:pt-[240px]">
      <div className="flex flex-col gap-6">
        <Breadcrumb />
        <div className="text-glitcherred w-full">
          <h1 className={`${CyGroteskHero.variable} font-display`}>
            {headline}
          </h1>
        </div>
        <div className="flex-1 flex flex-col gap-2 md:gap-2">
          {/* {subtitle && subtitle.length>1 && subtitle?.map((subtitle, index) => (
            <p key={index}>{subtitle}</p>
          ))} */}
        </div>

        {tickets && ctaText && (
          <PopupCTA text={ctaText} tickets={tickets} arrow={true} />
        )}
        <div className="flex flex-row justify-between">
          <div className="max-md:hidden flex-1"></div>
          <div className="flex-1">
            {image && imageBlurData && (
              <Image
                src={image}
                blurDataURL={imageBlurData}
                width={700}
                height={500}
                placeholder="blur"
                alt={"imageAltText"}
                className="rounded-2xl"
                style={{ objectFit: "cover", width: "auto" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
