import urlFor from "@/utils/image-builder";
import CTAdisplay from "@/app/components/cta-display";
import LogoRow from "@/app/components/logo-row";
import RichTextParagraph from "@/app/components/richtext-paragraph";
import Spacer from "@/app/components/spacer";
import Subhero from "@/app/components/subhero";
import { client } from "@/sanity/lib/client";
import { SHOW_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { SHOW_QUERYResult } from "@/sanity/types";
import Link from "next/link";

export const metadata: Metadata = {
  title: "",
};

const SLUGS_QUERY = `*[_type == "show"]{ "id": slug.current }`;

export default async function showPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const content: SHOW_QUERYResult = await client.fetch(SHOW_QUERY, {
    slug: id,
  });

  if (!content) {
    return "There was an error fetching content.";
  }
  return (
    <>
      <Subhero
        headline={content.title}
        subtitle={content.subtitle || []}
        tickets={content.tickets!}
        year={content.year || undefined}
        image={urlFor(content.mainImage).url()}
        imageAltText={content.mainImage.alt}
        imageBlurData={urlFor(content.mainImage).blur(1000).url()}
        ctaText="Buy tickets"
      />
      <Spacer />
      <RichTextParagraph headline="About the show" content={content.content!} />

      <div className="w-full flex flex-col md:flex-row gap-6 md:gap-6">
        <div className="md:flex-1 max-md:hidden"></div>
        <div className="flex-1 md:pt-4 [&>p]:pb-6">
          {content.attachments && content.attachments.length > 0 && (
            <div className="space-y-2">
              {content.attachments.map((item, idx) => (
                <div
                  key={item._ref || idx}
                  className="flex flex-row items-center gap-1"
                >
                  <Link
                    key={item._ref || idx}
                    href={item.file?.attachmentUrl || "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-70 font-medium animate-fade-in transition duration-200"
                  >
                    {`${item.title}` || `Download PDF ${idx + 1}`}
                    <p className="ml-2 no-underline float-right"> [Download]</p>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
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
export async function generateStaticParams() {
  // Fetch only the slugs to minimize query size
  const slugs = await client.fetch(SLUGS_QUERY);
  return slugs.map((show: { id: string }) => ({ id: show.id }));
}
