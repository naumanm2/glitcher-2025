// import TextWithLead from "./components/text-with-lead";
import Spacer from "./components/spacer";
import CardCollection from "./components/card-collection";
import Card from "./components/card";
import Hero from "./components/hero";
import TextParagraph from "./components/text-paragraph";
import CTAdisplay from "./components/cta-display";
import LogoRow from "./components/logo-row";
// import Bloodbath from "../public/general/bloodbath.jpg";
// import BloodbathBlur from "../public/general/bloodbath-blur.jpg";
import ThePornHorrorMusicalTwo from "../public/general/tphm.jpg";
import ThePornHorrorMusicalTwoBlur from "../public/general/tphm-blur.jpg";
import HowToLiveTogether from "../public/general/how-to-live-together.jpg";
import HowToLiveTogetherBlur from "../public/general/how-to-live-together-blur.jpg";

export default function Home() {
  return (
    <div>
      <Hero heading="Theatre Collective" />
      <Spacer />
      {/* <TextWithLead
				lead="–Lasse Garoff, Yle 18.11.2023"
				paragraph="På teaterscenen gottar sig Glitcher i allt det mörka och snaskiga vi älskar: ”Popkultur är lite syndigt”"
			/> 
			<Spacer /> */}
      <CardCollection headline="Current shows">
        <Card
          image={HowToLiveTogether}
          imageBlurData={HowToLiveTogetherBlur}
          imageAltText=""
          paragraph="15.3.2025 - 29.3.2025 Viirus, Helsinki"
          paragraph2="11.4.2025 – 12.4.2025 Konträr, Stockholm"
          headline="How to Live Together"
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
        {/* <Card
						image={Bloodbath}
						imageBlurData={BloodbathBlur}
						imageAltText=""
						headline="Bloodbath"
						paragraph="10.10.2024 – 10.01.2027"
						address="/shows/bloodbath"
					/> */}
      </CardCollection>
      <Spacer />
      <TextParagraph
        headline="About Glitcher"
        paragraph="Glitcher is a Finnish performance collective which has been active since 2019. Today it consists of artists Emelie Zilliacus, Joel Forsbacka, Josefine Fri, Oscar Fagerudd, Martin Paul and Misan Nykvist."
        ctaAddress="/about-us"
      />
      <Spacer />
      <CTAdisplay
        headline="Interested?"
        text="Contact us"
        address="mailto:info@glitcher.info"
      />
      <Spacer />
      <LogoRow />
      <Spacer />
    </div>
  );
}
