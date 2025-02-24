"use client";

import Link from "next/link";
import Image from "next/image";
import CTAarrow from "../../public/assets/arrow.svg";
import { useState } from "react";
import { Modal } from "./modal";
import { Show } from "@/sanity/types";

interface linkOptions {
  text: string;
  arrow: boolean;
  address: string;
}
interface CTAoptions {
  headline: string;
  text: string;
  address?: string;
  tickets?: Show["tickets"];
}

export default function CTAdisplay({
  headline,
  text,
  address,
  tickets,
}: CTAoptions) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full font-medium text-center text-[10vw] leading-none -mb-[2.5vw]">
          {headline}
        </div>
        {tickets && tickets.length > 1 && !address && (
          <>
            {open && <Modal links={tickets} setOpen={setOpen} open={open} />}
            <button onClick={() => setOpen(!open)}>
              <div className="group w-full bg-glitcherpink h-[24vw] rounded-full flex flex-row justify-center items-center gap-12 md:gap-24">
                <div className="text-[9vw] font-medium">{text}</div>
                <div className="basis-1/12">
                  <Image
                    src={CTAarrow}
                    alt=""
                    width={144}
                    layout="responsive"
                    className="-ml-4 md:-ml-12 group-hover:-ml-0 animate-fade-in transition-all duration-200 w-full"
                  />
                </div>
              </div>
            </button>
          </>
        )}
        {tickets && tickets.length == 1 && (
          <>
            <Link href={tickets[0].url}>
              <div className="group w-full bg-glitcherpink h-[24vw] rounded-full flex flex-row justify-center items-center gap-12 md:gap-24">
                <div className="text-[9vw] font-medium">{text}</div>
                <div className="basis-1/12">
                  <Image
                    src={CTAarrow}
                    alt=""
                    width={144}
                    layout="responsive"
                    className="-ml-4 md:-ml-12 group-hover:-ml-0 animate-fade-in transition-all duration-200 w-full"
                  />
                </div>
              </div>
            </Link>
          </>
        )}

        {address && !tickets && (
          <>
            <Link href={address}>
              <div className="group w-full bg-glitcherpink h-[24vw] rounded-full flex flex-row justify-center items-center gap-12 md:gap-24">
                <div className="text-[9vw] font-medium">{text}</div>
                <div className="basis-1/12">
                  <Image
                    src={CTAarrow}
                    alt=""
                    width={144}
                    layout="responsive"
                    className="-ml-4 md:-ml-12 group-hover:-ml-0 animate-fade-in transition-all duration-200 w-full"
                  />
                </div>
              </div>
            </Link>
          </>
        )}
      </div>
    </>
  );
}
