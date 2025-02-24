import {
	PortableText,
	PortableTextMarkComponentProps,
	PortableTextReactComponents,
} from "@portabletext/react";

import { Show } from "@/sanity/types";

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
	content: Show["content"];
}

export default function RichTextParagraph({
	headline,
	content,
}: RichTextParagraphOptions) {
	const components: Partial<PortableTextReactComponents> = {
		types: {
			image: ({ value }: { value: SanityImage }) => {
				if (!value.asset?._ref) return null;
				return (
					<Image
						src={value.asset?._ref}
						alt={value.alt || "Sanity Image"}
						width={1080}
						height={1080}
					/>
				);
			},
		},

		marks: {
			link: ({ children, value }: PortableTextMarkComponentProps<SanityLink>) => {
				if (!value?.href) return <>{children}</>;
				const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
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
			</div>
		</div>
	);
}
