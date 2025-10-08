import Card from "../components/card/card";
import ImageCollection from "../components/image-collection";
import Spacer from "../components/spacer";
import Subhero from "../components/subhero";
import CTAdisplay from "../components/cta-display";
import LogoRow from "../components/logo-row";

import { Metadata } from "next";

import { client } from "@/sanity/lib/client";
import { GENERAL_QUERY, MEMBERS_QUERY } from "@/sanity/lib/queries";
import urlFor from "../../utils/image-builder";
import RichTextParagraph from "../components/richtext-paragraph";

export const metadata: Metadata = {
  title: "About us",
};

export default async function About() {
  const members = await client.fetch(MEMBERS_QUERY);
  const general = await client.fetch(GENERAL_QUERY);

  return (
    <>
      <Subhero headline="About us" />
      <Spacer />
      <RichTextParagraph headline="Glitcher" content={general?.introLong} />
      <Spacer />
      <ImageCollection>
        {members &&
          members.map((member, index) => (
            <Card
              key={index}
              image={urlFor(member.image).url()}
              imageBlurData={urlFor(member.image).blur(1000).url()}
              imageAltText={member.alt}
              headline={member.name}
              paragraph={member.role}
              phone={member.phoneNumber ? member.phoneNumber : undefined}
            />
          ))}
      </ImageCollection>
      <Spacer />
      <CTAdisplay
        headline="Interested?"
        text="Email us"
        address={`mailto:${general?.email || "info@glitcher.info"}`}
      />
      <Spacer />
      <LogoRow />
      <Spacer />
    </>
  );
}
