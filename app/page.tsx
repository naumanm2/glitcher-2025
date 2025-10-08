// import TextWithLead from "./components/text-with-lead";
import Spacer from "./components/spacer";
import Hero from "./components/(hero)/hero";
import TextParagraph from "./components/text-paragraph";
import CTAdisplay from "./components/cta-display";
import LogoRow from "./components/logo-row";
import { client } from "@/sanity/lib/client";
import { GENERAL_QUERY, ACTIVESHOWS_QUERY } from "@/sanity/lib/queries";
import { Suspense } from "react";
import HeroSkeleton from "./components/(hero)/heroSkeleton";
import Card from "./components/card/card";
import urlFor from "../utils/image-builder";
import CardCollection from "./components/card-collection";
import { ACTIVESHOWS_QUERYResult, GENERAL_QUERYResult } from "@/sanity/types";

export default async function Home() {
  const general: GENERAL_QUERYResult = await client.fetch(GENERAL_QUERY);
  const shows: ACTIVESHOWS_QUERYResult = await client.fetch(ACTIVESHOWS_QUERY);

  return (
    <div>
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Spacer />
      {/* <TextWithLead
				lead="–Lasse Garoff, Yle 18.11.2023"
				paragraph="På teaterscenen gottar sig Glitcher i allt det mörka och snaskiga vi älskar: ”Popkultur är lite syndigt”"
			/> 
			<Spacer /> */}
      {/* <Suspense fallback={<CardSkeletons n={2} />}>
				<ShowCollection cap={2} headline="Current shows " /> */}
      <CardCollection
        headline="Current shows"
        ctaText="See all shows"
        address="/shows"
      >
        {shows.map((content, index) => (
          <Card
            key={index}
            image={urlFor(content.mainImage).url()}
            imageBlurData={urlFor(content.mainImage).blur(1000).url()}
            imageAltText={content.alt || "Show main image"}
            headline={content.title}
            subtitle={content.subtitle!}
            year={content.year || undefined}
            address={`/shows/${content.slug.current}`}
          />
        ))}
      </CardCollection>
      {/* </Suspense> */}
      <Spacer />
      <TextParagraph
        headline="About Glitcher"
        paragraph={
          general?.introShort ||
          "Glitcher is a Finnish performance collective which has been active since 2019. Today it consists of artists Emelie Zilliacus, Joel Forsbacka, Josefine Fri, Oscar Fagerudd, Martin Paul and Misan Nykvist."
        }
        ctaAddress="/about-us"
      />
      <Spacer />
      <CTAdisplay
        headline="Interested?"
        text="Email us"
        address={`mailto:${general?.email || "info@glitcher.info"}`}
      />
      <Spacer />
      <LogoRow />
      <Spacer />
    </div>
  );
}
