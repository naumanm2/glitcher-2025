import {
  PortableText,
  PortableTextMarkComponentProps,
  PortableTextReactComponents,
} from "@portabletext/react";

import { Show } from "@/sanity/types";
import CTA from "./cta";

import Image from "next/image";
import Link from "next/link";

interface SanityImage {
  asset?: {
    _ref: string;
    _type: string;
  };
  alt?: string;
}

interface SanityLink {
  _type: string;
  href: string;
}

interface RichTextParagraphOptions {
  headline?: string;
  paragraph?: string;
  ingress?: string;
  ctaText?: string;
  ctaAddress?: string;
  content: Show["content"];
}

export default function RichTextParagraph({
  headline,
  ctaText,
  ctaAddress,
  content,
}: RichTextParagraphOptions) {
  const components: Partial<PortableTextReactComponents> = {
    types: {
      image: ({ value }: { value: SanityImage }) => {
        if (!value.asset?._ref) return null;
        return (
          <Image src={value.asset?._ref} alt={value.alt || "Sanity Image"} width={300} height={300} />
        );
      },
    },

    marks: {
      link: ({
        children,
        value,
      }: PortableTextMarkComponentProps<SanityLink>) => {
        if (!value?.href) return <>{children}</>;
        const rel = !value.href.startsWith("/")
          ? "noreferrer noopener"
          : undefined;
        return (
          <Link href={value.href} rel={rel}>
            {children}
          </Link>
        );
      },
    },
  };
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-6">
      <div className="flex-1">{headline && <h2>{headline}</h2>}</div>
      <div className="flex-1 md:pt-4 [&>p]:pb-6">
        {content && <PortableText value={content} components={components} />}
        {ctaAddress && (
          <CTA
            text={ctaText || "Read more"}
            arrow={true}
            address={ctaAddress}
          />
        )}
        {/* {ingress && (
          <strong className="pb-4 md:pb-6 inline-block">{ingress}</strong>
        )}
        <p className="pb-4 md:pb-6">{paragraph}</p> */}
      </div>
    </div>
  );
}
