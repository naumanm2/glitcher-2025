import Card from "../components/card";
import CardCollection from "../components/card-collection";
import Subhero from "../components/subhero";

import HowToLiveTogether from "../../public/general/how-to-live-together.jpg";
import HowToLiveTogetherBlur from "../../public/general/how-to-live-together-blur.jpg";
import ThePornHorrorMusicalTwo from "../../public/general/tphm.jpg";
import ThePornHorrorMusicalTwoBlur from "../../public/general/tphm-blur.jpg";

import Spacer from "../components/spacer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shows",
};

export default function Shows() {
  return (
    <>
      <Subhero headline="Shows" />
      <Spacer />
      <CardCollection subtitle={"2 shows"}>
        <Card
          image={HowToLiveTogether}
          imageBlurData={HowToLiveTogetherBlur}
          imageAltText={""}
          headline={"How To Live Together"}
          paragraph="15.3.2025 - 29.3.2025 Viirus, Helsinki"
          paragraph2="11.4.2025 – 12.4.2025 Konträr, Stockholm"
          address="/shows/how-to-live-together"
        />
        <Card
          image={ThePornHorrorMusicalTwo}
          imageBlurData={ThePornHorrorMusicalTwoBlur}
          imageAltText={""}
          headline={"The Porn Horror Musical 2"}
          paragraph="22.5.2025 - 24.5.2025 Tehdas Teatteri, Turku"
          address="/shows/the-porn-horror-musical-2"
        />
      </CardCollection>
      <Spacer />
    </>
  );
}
