import Image from "next/image";

import Glitcher from "../../public/glitcher-red.svg";
import Glitcher_ninni_west from "../assets/images/Glitcher_ninni_west-.jpg";

interface heroOptions {
  heading: string;
  subtitle: string;
}

export default function Hero({ heading, subtitle }: heroOptions) {
  return (
    <div className="rounded-2xl bg-glitcherpink w-full p-6 pt-[160px] md:pt-[240px]">
      <div className="text-glitcherred w-full scale-[120%] md:scale-110 flex justify-center font-display">
        <Image src={Glitcher} alt="" className="w-[100vw]"></Image>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-full gap-12 mt-12">
        <div className="md:self-end flex-1 flex flex-col gap-4">
          <p>{subtitle}</p>
          <h2>{heading}</h2>
        </div>
        <div className="flex-1">
          <Image
            src={Glitcher_ninni_west}
            alt="Image of the collective members"
            className="rounded-2xl"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
