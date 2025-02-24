import Image, { StaticImageData } from "next/image";

import konstsamfundet from "../../public/sponsors/s_konstsamfundet.png";
import svenskakulturfonden from "../../public/sponsors/s_svenska-kulturfonden.png";
import helsingforsstad from "../../public/sponsors/s_helsingfors-stad.png";
import gesellius from "../../public/sponsors/s_gesellius.png";
import suomenkulttuurirahasto from "../../public/sponsors/s_suomen-kulttuurirahasto.png";
import ottomalm from "../../public/sponsors/s_ottomalm.png";
import thuring from "../../public/sponsors/s_thuring.png";
import tinfo from "../../public/sponsors/s_tinfo.png";
import nygren from "../../public/sponsors/s_nygren.png";
import krooks from "../../public/sponsors/s_krooks.png";
import { client } from "@/sanity/lib/client";
import { SPONSORS_QUERY } from "@/sanity/lib/queries";
import { SPONSORS_QUERYResult } from "@/sanity/types";
import urlFor from "../(utils)/image-builder";

const logos = [
	konstsamfundet,
	svenskakulturfonden,
	helsingforsstad,
	gesellius,
	suomenkulttuurirahasto,
	ottomalm,
	thuring,
	tinfo,
	nygren,
	krooks,
];

const Logo = ({ image, alt }: { image: string; alt: string }) => (
	<Image src={image} alt={alt} width={226} height={113} />
);

export default async function LogoRow() {
	const logos = await client.fetch(SPONSORS_QUERY);
	if (!logos?.sponsors) return <p>Failed to fetch sponsors.</p>;
	const totalLogos = logos.sponsors.length;
	return (
		<div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_left,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)]">
			<div
				className="flex animate-infinite-scroll flex-row gap-10 w-[calc(2*var(--count)*(theme(gap.10)+226px))] shrink-0"
				style={{
					//@ts-expect-error, count is not specified, yet needed to calculate length
					"--count": totalLogos,
					animationDuration: "30s",
				}}>
				{[...logos.sponsors, ...logos.sponsors].map((content, index) => (
					<div key={index}>
						{content.asset && (
							<Logo image={urlFor(content.asset).url()} alt={content.alt} />
						)}
					</div>
				))}
			</div>
		</div>
	);
}
