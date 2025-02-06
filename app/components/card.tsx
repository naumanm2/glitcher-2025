import Link from "next/link";
import Image from "next/image";

interface cardOptions {
	image: string;
	imageAltText: string;
	headline: string;
	paragraph?: string;
	address?: string;
}

export default function Card({
	image,
	imageAltText,
	headline,
	paragraph,
	address,
}: cardOptions) {
	const imageAddress = image;
	return (
		<div>
			{address && (
				<Link href={address} className="">
					<div className="flex flex-col">
						<Image
							src={imageAddress}
							alt={imageAltText}
							width={360}
							height={480}
							className="animate-fade-in transition duration-300 hover:scale-110 rounded-xl"
						/>
						<h3>{headline}</h3>
						<p>{paragraph}</p>
					</div>
				</Link>
			)}
		</div>
	);
}
