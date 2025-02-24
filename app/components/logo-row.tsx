import Image from "next/image";

import { client } from "@/sanity/lib/client";
import { SPONSORS_QUERY } from "@/sanity/lib/queries";
import urlFor from "../../utils/image-builder";


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
