"use client";

import Image from "next/image";
import CTAarrow from "../../public/assets/arrow.svg";
import { useState } from "react";

import CTA from "./cta";
import { Modal } from "./modal";

interface linkOptions {
  text: string;
  arrow: boolean;
  address: string;
}
interface CTAoptions {
  text: string;
  arrow: boolean;
  links: Array<linkOptions>;
}

export default function PopupCTA({ text, arrow, links }: CTAoptions) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {links.length > 1 ? (
        <>
          {open && <Modal links={links} setOpen={setOpen} open={open} />}
          <button
            className="group flex px-6 pt-3 pb-[13px] md:pb-[14px] gap-5 border-2 border-black items-center justify-between md:-mx-1 rounded-full w-fit max-md:w-full"
            onClick={() => setOpen(!open)}
          >
            <div className="">{text}</div>
            {arrow && (
              <div className="pt-0.5 -mr-2 -translate-x-2 group-hover:-translate-x-0 animate-fade-in transition-all duration-200">
                <Image src={CTAarrow} alt="" width={16} />
              </div>
            )}
          </button>
        </>
      ) : (
        <CTA text={text} arrow={links[0].arrow} address={links[0].address} />
      )}
    </>
  );
}
