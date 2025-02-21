import urlFor from "@/app/(utils)/image-builder";
import CTAdisplay from "@/app/components/cta-display";
import LogoRow from "@/app/components/logo-row";
import RichTextParagraph from "@/app/components/richtext-paragraph";
import Spacer from "@/app/components/spacer";
import Subhero from "@/app/components/subhero";
import { client } from "@/sanity/lib/client";
import { SHOW_QUERY } from "@/sanity/lib/queries";
import { Show } from "@/sanity/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
};

interface showPageOptions {
  params: Promise<{ id: string }>;
}

export default async function showPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const content = await client.fetch(SHOW_QUERY, { slug: id });
  console.log(content?.mainImageUrl);
  if (!content) {
    return "There was an error.";
  }
  return (
    <>
      <Subhero
        headline={content.title!}
        subtitle={content.subtitle!}
        tickets={content.tickets!}
        image={content.mainImageUrl!}
        imageBlurData={urlFor(content.mainImageUrl!).blur(1000).url()}
        ctaText="Buy tickets"
      />
      <Spacer />
      <RichTextParagraph headline="About the show" content={content.content!} />
      <Spacer />
      <CTAdisplay
        headline={content.title!}
        tickets={content.tickets!}
        text="Buy tickets"
      />
      <Spacer />
      <LogoRow />
      <Spacer />
    </>
  );
}
