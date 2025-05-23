import CTA from "./cta";

interface cardCollectionType {
  headline?: string;
  subtitle?: string;
  address?: string;
  ctaText?: string;
  children: React.ReactNode;
}

export default function CardCollection({
  children,
  headline,
  subtitle,
  address,
  ctaText,
}: cardCollectionType) {
  return (
    <div className="flex flex-col gap-8 md:gap-6">
      <div className="flex flex-row justify-between items-end">
        <h2 className="flex-1">{headline}</h2>
        {subtitle && <p className="flex-1 text-right self-end">{subtitle}</p>}
        <div className="max-md:hidden">
          {address && (
            <CTA text={ctaText || "See more"} address={address} arrow={true} />
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 [&>*]:flex-1 [&>*]:min-w-[30%] [&>*]:md:max-w-[50%] [&>*:nth-child(n+4)]:md:max-w-[calc(33.33%-24px);] md:gap-8">
        {children}
      </div>
      <div className="w-full md:hidden">
        {address && (
          <CTA text={ctaText || "See more"} address={address} arrow={true} />
        )}
      </div>
    </div>
  );
}
