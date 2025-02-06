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
      <div className="flex-1">{headline && <h2>{headline}</h2>}</div>
      <div className="flex-1 md:pt-4">
        <p className="pb-4 md:pb-6">{paragraph}</p>
        {ctaAddress && (
          <CTA
            text={ctaText || "Read more"}
            arrow={true}
            address={ctaAddress}
          />
        )}
      </div>
    </div>
  );
}
