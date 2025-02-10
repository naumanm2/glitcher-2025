interface imageCollectionType {
	headline?: string;
	subtitle?: string;
	children: React.ReactNode;
}

export default function ImageCollection({
	children,
	headline,
	subtitle,
}: imageCollectionType) {
	return (
		<div className="flex flex-col gap-8 md:gap-6">
			<div className="flex flex-row justify-between">
				<h2 className="flex-1">{headline}</h2>
				<p className="flex-1 text-right self-end">{subtitle}</p>
			</div>
			<div className="overflow-scroll snap-x">
				<div className="flex flex-row flex-nowrap md:flex-wrap w-min md:w-full md:[&>*]:w-[calc(33.3333%-10.67px)] gap-4 [&>*]:w-[83vw] max-md:last:pr-2">
					{children}
				</div>
			</div>
		</div>
	);
}
