import { MDXContent } from "mdx/types";
import CTA from "./cta";

interface TextParagraphOptions {
	headline?: string;
	paragraph?: string;
	ingress?: string;
	ctaText?: string;
	ctaAddress?: string;
	Content?: MDXContent;
}

export default function TextParagraph({
	headline,
	paragraph,
	ingress,
	ctaText,
	ctaAddress,
	Content,
}: TextParagraphOptions) {
	return (
		<div className="w-full flex flex-col md:flex-row gap-6 md:gap-6">
			<div className="flex-1">{headline && <h2>{headline}</h2>}</div>
			<div className="flex-1 md:pt-4 [&>p]:pb-6">
				{Content && <Content />}
				{ingress && <strong className="pb-4 md:pb-6 inline-block">{ingress}</strong>}
				<p className="pb-4 md:pb-6">{paragraph}</p>
				{ctaAddress && (
					<CTA text={ctaText || "Read more"} arrow={true} address={ctaAddress} />
				)}
			</div>
		</div>
	);
}
