import Link from "next/link";
import CTA from "./cta";

interface cardCollectionType {
	headline: string;
	address?: string;
	children: React.ReactNode;
}

export default function CardCollection({
	children,
	headline,
	address,
}: cardCollectionType) {
	return (
		<div className="flex flex-col gap-8 md:gap-6">
			<div className="flex flex-row items-center justify-between">
				<h2>{headline}</h2>
				<div className="max-md:hidden">
					{address && <CTA text="Read more" address={address} arrow={true} />}
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-8 md:gap-4">{children}</div>
			<div className="w-full md:hidden">
				{address && <CTA text="Read more" address={address} arrow={true} />}
			</div>
		</div>
	);
}
