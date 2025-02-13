import CTAdisplay from "@/app/components/cta-display";
import LogoRow from "@/app/components/logo-row";
import Spacer from "@/app/components/spacer";
import Subhero from "@/app/components/subhero";
import TextParagraph from "@/app/components/text-paragraph";

import Bloodbath from "../../../public/general/bloodbath.jpg";
import BloodbathBlur from "../../../public/general/bloodbath-blur.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bloodbath",
};

interface linkOptions {
  text: string;
  arrow: boolean;
  address: string;
}

export default function ShowBloodbath() {
  const tiketti: linkOptions = {
    text: "Tiketti.fi",
    arrow: true,
    address: "https://tiketti.fi",
  };
  const lippufi: linkOptions = {
    text: "Lippu.fi",
    arrow: true,
    address: "https://lippu.fi",
  };
  const links: Array<linkOptions> = [tiketti, lippufi];

  return (
    <div>
      <Subhero
        headline="Bloodbath"
        subtitle="Lorem ipsum"
        ctaText="Buy tickets"
        links={links}
        image={Bloodbath}
        imageBlurData={BloodbathBlur}
        imageAltText="Cover photo of a theatrical performance, Bloodbath"
      />
      <Spacer />
      <TextParagraph
        headline="About the show"
        ingress="A storm is brewing and the mountains loom over a little cabin in the woods."
        paragraph="Daddy and his stepdaughter Riley have a cozy weekend to look forward to all to themselves, no Mommy to disturb them. They do what they do best: fuck. But they’re suddenly interrupted by a loud knock on the door. Who can it be? In this weather and at this late hour? Their world slowly starts to fall apart when another Daddy and stepdaughter duo enters the little cabin. Who are they and what do they want? More sexy fun? Or will everything fall apart? The night is getting dark, will they make it out of the fuck-cabin alive?"
      />
      <TextParagraph
        ingress="Credits for the show"
        paragraph="Concept and story:"
      />
      <Spacer />
      <CTAdisplay headline="Bloodbath" links={links} text="Buy tickets" />
      <Spacer />
      <TextParagraph
        headline="About Glitcher"
        paragraph="Glitcher is a Finnish performance collective which has been active since 2019. Today it consists of artists Emelie Zilliacus, Joel Forsbacka, Josefine Fri, Oscar Fagerudd and Martin Paul. "
        ctaAddress="/about-us"
      />
      <Spacer />
      <LogoRow />
      <Spacer />
    </div>
  );
}
