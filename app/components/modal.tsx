"use client";

import Image from "next/image";
import CTAarrow from "../../public/assets/arrow.svg";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface linkOptions {
	text: string;
	arrow: boolean;
	address: string;
}
interface links {
	links: Array<linkOptions>;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export function Modal ({ links, open, setOpen }: links) {
	return (
		<>
			<div
				onClick={() => setOpen(!open)}
				className="h-full w-full fixed flex flex-row justify-center items-center top-0 left-0 z-20 [background-color:rgba(0,0,0,0.4)] p-4">
				<div className="p-4 md:p-6 flex flex-col gap-4 bg-white border-1 rounded-xl md:w-96 w-full align-middle">
					<h3 className="pb-2">Choose venue</h3>
					{links.map((i, index) => (
						<Link key={index} href={i.address} className="group">
							<button className="flex px-4 md:px-6 pt-3 pb-[13px] md:pb-[14px] gap-5 bg-glitcherpink items-center justify-between -mx-1 rounded-full w-full">
								<div className="">{i.text}</div>
								<div className="pt-0.5 -mr-2 -translate-x-2 group-hover:-translate-x-0 animate-fade-in transition-all duration-200">
									<Image src={CTAarrow} alt="" width={16} className="-rotate-45" />
								</div>
							</button>
						</Link>
					))}
				</div>
			</div>
		</>
	);
};