import Link from "next/link";
import Image from "next/image";

import Glitcher from "../../public/logos/glitcher-pink.svg";
import { GENERAL_QUERYResult } from "@/sanity/types";
import urlFor from "../(utils)/image-builder";

export default function Footer({ content }: { content: GENERAL_QUERYResult }) {
	console.log(content);
	return (
		<footer>
			<div className="bg-foreground rounded-3xl flex flex-col gap-16 md:gap-16 text-white p-4 md:p-8">
				<div className="flex md:flex-row flex-col w-full justify-between">
					<div className="flex flex-row md:gap-6 pb-4">
						<Link
							href="/shows"
							className="p-2 font-medium hover:underline cursor-pointer">
							Shows
						</Link>
						<Link
							href="/about-us"
							className="p-2 font-medium hover:underline cursor-pointer">
							About us
						</Link>
					</div>
					<div className="flex flex-col-reverse gap-0 items-start">
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
						<div className="flex flex-row gap-6">
							{content?.socials &&
								content.socials.map((item, index) => (
									<Link
										key={index}
										rel="noopener noreferrer"
										target="_blank"
										href={item.url}
										className="p-2 font-regular underline hover:opacity-85 transition-opacity duration-100 ease-in-out">
										{item.social}
									</Link>
								))}
						</div>
					</div>
				</div>
				<div className="text-glitcherred w-full scale-[125%] md:scale-110 flex justify-center font-display [&>path]:fill-glitcherpink">
					{content?.mainLogo && content.mainLogo.asset ? (
						<Image
							src={urlFor(content.mainLogo.asset).url()}
							blurDataURL={urlFor(content.mainLogo.asset).blur(1000).url()}
							alt={content.mainLogo.alt || "Main image of Glitcher Collective"}
							width={1080}
							height={280}
							className="w-[100vw]"
						/>
					) : (
						<p>Failed to fetch logo.</p>
					)}
				</div>
				<div className="w-full text-center p-2">
					<p>cc. Glitcher 2025.</p>
				</div>
			</div>
		</footer>
	);
}
