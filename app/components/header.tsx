"use client";

import Link from "next/link";
import Image from "next/image";

import Glitcher from "../../public/logos/glitcher-eye.svg";
import CTA from "./cta";
import { Dispatch, SetStateAction, useState } from "react";
import { client } from "@/sanity/lib/client";
import { GENERAL_QUERY } from "@/sanity/lib/queries";
import { GENERAL_QUERYResult } from "@/sanity/types";
import urlFor from "../(utils)/image-builder";

interface menuOptions {
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	content: GENERAL_QUERYResult;
}

const Menu = ({ open, setOpen, content }: menuOptions) => {
	return (
		<div className="w-full h-full fixed top-0 left-0 -z-10 bg-glitcherpink p-2">
			<div className="flex flex-col h-full justify-end gap-6">
				<div className="flex flex-row justify-between">
					<div className="flex flex-col self-end">
						<Link
							href="/shows"
							onClick={() => setOpen(!open)}
							className="font-medium text-2xl underline p-2 hover:underline">
							Shows
						</Link>
						<Link
							href="/about-us"
							onClick={() => setOpen(!open)}
							className="font-medium text-2xl underline p-2 hover:underline">
							About us
						</Link>
					</div>
					<div className="flex flex-row gap-6 [writing-mode:tb] underline-offset-2 -scale-100">
						{content?.socials &&
							content.socials.map((item, index) => (
								<div
									key={index}
									className="p-2 font-regular underline hover:opacity-85 transition-opacity duration-100 ease-in-out">
									<Link rel="noopener noreferrer" target="_blank" href={item.url}>
										{item.social}
									</Link>
								</div>
							))}
					</div>
				</div>
				<div className="">
					<p className="p-2 hover:underline">
						<a href={`mailto:${content?.email || "mailto:info@glitcher.info"}`}>
							{content?.email || "info@glitcher.info"}
						</a>
					</p>
					<p className="p-2 hover:underline">
						<a href={`mailto:${content?.phone || "tel:+358 45 136 4006"}`}>
							{content?.phone || "tel:+358 45 136 4006"}
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default function Header({ content }: { content: GENERAL_QUERYResult }) {
	const [open, setOpen] = useState(false);

	return (
		<nav className=" flex items-center justify-between fixed w-[calc(100%-16px*2)] md:w-[calc(100%-29px*2)] pt-2 md:pt-8 z-20 top-0 ">
			<div className="flex flex-row gap-6 max-md:hidden">
				<Link href="/shows" className="font-medium p-2 hover:underline">
					Shows
				</Link>
				<Link href="/about-us" className="font-medium p-2 hover:underline">
					About us
				</Link>
			</div>
			<div className="h-[84px] md:h-[92px]">
				<Link href="/" onClick={() => open && setOpen(!open)}>
					{content && (
						<Image
							src={urlFor(content.icon).url()}
							alt={content.mainImage.alt}
							width={96}
							height={96}
							style={{ height: "auto" }}
						/>
					)}
				</Link>
			</div>
			<div className="max-md:hidden p-2">
				<CTA
					text="Contact us"
					arrow={false}
					address={`mailto:${content?.email || "info@glitcher.info"}`}
				/>
			</div>
			<div className="md:hidden">
				{!open ? (
					<button onClick={() => setOpen(!open)}>MENU</button>
				) : (
					<div className="">
						<button onClick={() => setOpen(!open)}>CLOSE</button>
						<Menu setOpen={setOpen} open={open} content={content} />
					</div>
				)}
			</div>
		</nav>
	);
}
