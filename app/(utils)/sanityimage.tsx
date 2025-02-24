import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export type SanityImage = {
	_type: "image";
	asset?: {
		_ref: string;
		_type: "reference";
	};
	alt?: string;
	caption?: string;
};

// export default function SanityImage({ image }: { image: SanityImage | null }) {
// 	if (!image?.asset?._ref) {
// 		return <p>No image available</p>;
// 	}

// 	return (
// 		<Image
// 			src={urlFor(image).width(1600).height(1800).url()}
// 			alt={image.alt || "Sanity Image"}
// 			blurDataURL={urlFor(image).width(800).height(900).blur(1000).url()}
// 			width={600}
// 			height={900}
// 			priority
// 		/>
// 	);
// }
