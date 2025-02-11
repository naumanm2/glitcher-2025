import Image from "next/image";

import Glitcher from "../../public/logos/glitcher-text-logo-red.svg";
import GlitcherMain from "../../public/general/glitcher.jpg";
import GlitcherMainBlur from "../../public/general/glitcher-blur.jpg";


interface heroOptions {
  heading: string;
  subtitle?: string;
}

export default function Hero({ heading, subtitle }: heroOptions) {
  return (
    <div className="rounded-2xl bg-glitcherpink w-full p-4 md:p-6 pt-[100px] md:pt-[100px] relative">
      <div className="text-glitcherred w-full scale-[125%] md:scale-110 flex justify-center font-display -mb-[4vw] md:-mb-[30vw] -z-10">
        <Image src={Glitcher} alt="" className="w-[100vw]"></Image>
      </div>

      <div className="relative flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12 mt-12 z-10">
        <div className="md:self-end flex-1 flex flex-col gap-2 md:gap-4">
          <p>{subtitle}</p>
          <h2>{heading}</h2>
        </div>
        <div className="flex-1">
          <Image
            src={GlitcherMain}
            blurDataURL={GlitcherMainBlur.src}
            placeholder="blur"
            alt="Image of the collective members"
            className="rounded-2xl"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
