import CTA from "./cta";

interface TextParagraphOptions {
	headline: string;
	paragraph: string;
	ctaText?: string;
	ctaAddress?: string;
}

export default function TextParagraph({
	headline,
	paragraph,
	ctaText,
	ctaAddress,
}: TextParagraphOptions) {
	return (
		<div className="w-full flex flex-col md:flex-row gap-4 md:gap-6">
			<div>{headline && <h2>{headline}</h2>}</div>
			<div className="">
				<p className="pb-4 md:pb-6">{paragraph}</p>
				{ctaText && ctaAddress && (
					<CTA text={ctaText} arrow={true} address={ctaAddress} />
				)}
			</div>
		</div>
	);
}
