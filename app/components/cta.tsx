import Image from "next/image";
import CTAarrow from "../../public/arrow.svg";
import Link from "next/link";

interface CTAoptions {
	text: string;
	arrow: boolean;
	address: string;
}

export default function CTA({ text, arrow, address }: CTAoptions) {
	return (
		<Link href={address}>
			<button className="flex px-6 pt-3 pb-[14px] gap-2 hover:gap-3 transition-all">
				<div className="">{text}</div>
				{arrow && (
					<div className="pt-0.5">
						<Image src={CTAarrow} alt="" width={16} />
					</div>
				)}
			</button>
		</Link>
	);
}
