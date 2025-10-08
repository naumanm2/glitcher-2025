import { client } from "@/sanity/lib/client";
import Card from "./card/card";
import CTA from "./cta";
import { ACTIVESHOWS_QUERY } from "@/sanity/lib/queries";
import urlFor from "../../utils/image-builder";
import faggeBlur from "@/public/performers/fagge-blur.jpg";
import { ACTIVESHOWS_QUERYResult } from "@/sanity/types";

interface showCollectionType {
  headline?: string;
  subtitle?: string;
  address?: string;
}

export default async function ShowCollection({
  headline,
  subtitle,
  address,
}: showCollectionType) {
  const shows:ACTIVESHOWS_QUERYResult = await client.fetch(ACTIVESHOWS_QUERY);
  return (
    <div className="flex flex-col gap-8 md:gap-6">
      <div className="flex flex-row justify-between items-end">
        <h2 className="flex-1">{headline}</h2>
        {subtitle && <p className="flex-1 text-right self-end">{subtitle}</p>}
        <div className="max-md:hidden">
          {address && <CTA text="Read more" address={address} arrow={true} />}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 [&>*]:flex-1 md:gap-4">
        {shows.map((content, index) => (
          <Card
            key={index}
            image={urlFor(content.mainImage).url()}
            imageBlurData={faggeBlur.src}
            imageAltText={content.alt || "Show main image"}
            headline={content.title}
            subtitle={content.subtitle!}
            address={`/shows/${content.slug.current}`}
          />
        ))}
      </div>
      <div className="w-full md:hidden">
        {address && <CTA text="Read more" address={address} arrow={true} />}
      </div>
    </div>
  );
}
