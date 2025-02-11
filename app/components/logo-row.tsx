import Image, { StaticImageData } from "next/image";

import konstsamfundet from "../../public/sponsors/s_konstsamfundet.png";
import svenskakulturfonden from "../../public/sponsors/s_svenska-kulturfonden.png";
import helsingforsstad from "../../public/sponsors/s_helsingfors-stad.png";
import gesellius from "../../public/sponsors/s_gesellius.png";
import suomenkulttuurirahasto from "../../public/sponsors/s_suomen-kulttuurirahasto.png";
import ottomalm from "../../public/sponsors/s_ottomalm.png";
import thuring from "../../public/sponsors/s_thuring.png";
import tinfo from "../../public/sponsors/s_tinfo.png";
import nygren from "../../public/sponsors/s_nygren.png";

const logos = [
	konstsamfundet,
	svenskakulturfonden,
	helsingforsstad,
	gesellius,
	suomenkulttuurirahasto,
	ottomalm,
	thuring,
	tinfo,
	nygren,
];

const Logo = ({ image }: { image: StaticImageData }) => (
	<Image src={image.src} alt="sponsor logo for glitcher" width={226} height={113} />
);

const totalLogos = logos.length;

export default function LogoRow() {
	return (
		<div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_left,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_2%,rgba(0,0,0,1)_98%,rgba(0,0,0,0)_100%)]">
			<div
				className="flex animate-infinite-scroll flex-row gap-10 w-[calc(2*var(--count)*(theme(gap.10)+226px))] shrink-0"
				style={{
					//@ts-expect-error
					"--count": totalLogos,
					animationDuration: "30s",
				}}>
				{[...logos, ...logos].map((image, index) => (
					<Logo key={index} image={image} />
				))}
			</div>
		</div>
	);
}
