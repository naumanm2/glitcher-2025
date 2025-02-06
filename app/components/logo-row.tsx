import Image, { StaticImageData } from "next/image";

import konstsamfundet from "../../public/client_konstsamfundet.png";
import nordiskKulturfond from "../../public/client_nordisk-kulturfond.png";
import nordiskKulturkontakt from "../../public/client_nordisk-kulturkontakt.png";
import svenskaKulturfonden from "../../public/client_svenska-kulturfonden.png";
import tresmeder from "../../public/client_tresmeder.png";

const logos = [
  konstsamfundet,
  nordiskKulturfond,
  nordiskKulturkontakt,
  svenskaKulturfonden,
  tresmeder,
];

const Logo = ({ image }: { image: StaticImageData }) => (
  <Image
    src={image.src}
    alt={image.blurDataURL || "client logo"}
    width={226}
    height={48}
  />
);

const totalLogos = logos.length;

export default function LogoRow() {
  return (
    <div className="flex w-full overflow-hidden">
      <div
        className="flex animate-infinite-scroll flex-row gap-20 py-10 w-[calc(2*var(--count)*(theme(gap.10)+226px))] shrink-0"
        style={{
          //@ts-ignore
          "--count": totalLogos,
          animationDuration: "5s",
        }}
      >
        {[...logos, ...logos].map((image, index) => (
          <Logo key={index} image={image} />
        ))}
      </div>
    </div>
  );
}
