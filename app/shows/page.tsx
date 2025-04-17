import Card from "../components/card/card";
import CardCollection from "../components/card-collection";
import Subhero from "../components/subhero";

import Spacer from "../components/spacer";
import { Metadata } from "next";
import { ACTIVESHOWS_QUERY, INACTIVESHOWS_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import urlFor from "../../utils/image-builder";

export const metadata: Metadata = {
  title: "Shows",
};

export default async function Shows() {
  const shows = await client.fetch(ACTIVESHOWS_QUERY);
  const pastShows = await client.fetch(INACTIVESHOWS_QUERY);
  const amount = shows.length;
  const pastAmount = pastShows.length;
  return (
    <>
      <Subhero headline="Shows" />
      <Spacer />
      <CardCollection
        subtitle={`${amount > 1 || amount == 0 ? amount + " shows" : amount + " show"} `}
      >
        {shows.map((content, index) => (
          <Card
            key={index}
            image={urlFor(content.mainImage).url()}
            imageBlurData={urlFor(content.mainImage).blur(1000).url()}
            imageAltText={""}
            headline={content.title}
            subtitle={content.subtitle || []}
            year={content.year || undefined}
            address={`/shows/${content.slug.current}`}
          />
        ))}
      </CardCollection>
      <Spacer />
      {pastAmount > 1 && (
        <CardCollection
          headline="Past Shows"
          subtitle={`${pastAmount > 1 || pastAmount == 0 ? pastAmount + " shows" : pastAmount + " show"} `}
        >
          {pastShows.map((content, index) => (
            <Card
              key={index}
              image={urlFor(content.mainImage).url()}
              imageBlurData={urlFor(content.mainImage).blur(1000).url()}
              imageAltText={""}
              headline={content.title}
              subtitle={content.subtitle || []}
              year={content.year || undefined}
              address={`/shows/${content.slug.current}`}
            />
          ))}
        </CardCollection>
      )}
      <Spacer />
    </>
  );
}
