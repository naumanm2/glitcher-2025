import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface cardOptions {
	image: StaticImageData;
	imageBlurData: StaticImageData;
	imageAltText: string;
	headline: string;
	paragraph?: string;
	paragraph2?: string;
	address?: string;
	phone?: string;
}

export default function Card({
	image,
	imageBlurData,
	imageAltText,
	headline,
	paragraph,
	paragraph2,
	address,
	phone,
}: cardOptions) {
	return (
		<div>
			{address ? (
				<div className="flex flex-col gap-2 flex-1">
					<Link href={address} className="flex-1">
						<div className="overflow-hidden rounded-xl block">
							<Image
								src={image}
								blurDataURL={imageBlurData.src}
								alt={imageAltText}
								className="animate-fade-in transition duration-300 hover:scale-110"
								placeholder="blur"
							/>
						</div>
					</Link>
					<h3 className="pt-2">{headline}</h3>
					<div className="">
						<p>{paragraph}</p>
						<p>{paragraph2}</p>
					</div>
				</div>
			) : (
				<div className="flex flex-col pb-4">
					<div className="overflow-hidden rounded-xl">
						<Image
							src={image}
							blurDataURL={imageBlurData.src}
							alt={imageAltText}
							placeholder="blur"
						/>
					</div>
					<h3 className="pt-3 pb-2">{headline}</h3>
					<p className="pb-1">{paragraph}</p>
					<Link href={`tel:${phone}`}>
						<p className="underline hover:opacity-80 animate-fade-in transition duration-300 ">
							{phone}
						</p>
					</Link>
				</div>
			)}
		</div>
	);
}
