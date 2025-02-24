import Link from "next/link";
import Image from "next/image";
import faggeBlur from "@/public/performers/fagge-blur.jpg";
import parsePhone from "@/utils/parse-phone";

interface cardOptions {
	image: string | undefined;
	imageBlurData?: string;
	imageAltText: string;
	headline: string;
	subtitle?: string[];
	paragraph?: string;
	paragraph2?: string;
	address?: string;
	phone?: string;
}

export default function Card({
	image,
	imageAltText,
	headline,
	subtitle,
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
						<div className="overflow-hidden rounded-xl flex-1 [aspect-ratio:8/9]">
							{!image ? (
								<p>No image available</p>
							) : (
								<Image
									src={image}
									alt={imageAltText || "Sanity Image"}
									blurDataURL={faggeBlur.src}
									width={1600}
									height={1800}
									placeholder="blur"
									className="animate-fade-in transition duration-300 hover:scale-110"
									style={{
										objectFit: "cover",
										objectPosition: "50% 50%",
										height: "100%"
									}}
									sizes="(max-width:768px) 100vw, 33vw"
								/>
							)}
						</div>
					</Link>
					<h3 className="pt-2">{headline}</h3>
					<div className="">
						{subtitle &&
							subtitle.map((content: string, index: number) => (
								<p key={index}>{content}</p>
							))}
						<p>{paragraph}</p>
						<p>{paragraph2}</p>
					</div>
				</div>
			) : (
				<div className="flex flex-col pb-4">
					<div className="overflow-hidden rounded-xl flex-1 [aspect-ratio:8/9]">
						{!image ? (
							<p>No image available</p>
						) : (
							<Image
								src={image}
								alt={imageAltText || "Sanity Image"}
								blurDataURL={faggeBlur.src}
								width={1600}
								height={1800}
								placeholder="blur"
								style={{ objectFit: "cover" }}
								sizes="(max-width:768px) 100vw, 33vw"
							/>
						)}
					</div>
					<h3 className="pt-3 pb-2">{headline}</h3>
					<p className="pb-1">{paragraph}</p>
					<Link href={`tel:${phone}`}>
						<p className="underline hover:opacity-70 animate-fade-in transition duration-200 ">
							{parsePhone(phone)}
						</p>
					</Link>
				</div>
			)}
		</div>
	);
}
