"use client";

import Link from "next/link";
import Image from "next/image";

import Glitcher from "../../public/glitcher-eye.svg";
import CTA from "./cta";
import { useEffect, useState } from "react";

const Menu = () => {
	return (
		<div className="w-full h-full fixed top-0 left-0 -z-10 bg-glitcherpink p-2">
			<div className="flex flex-col h-full justify-end gap-6">
				<div className="flex flex-row justify-between">
					<div className="flex flex-col self-end">
						<Link href="/" className="font-medium p-2 hover:underline">
							Shows
						</Link>
						<Link href="/" className="font-medium p-2 hover:underline">
							About us
						</Link>
					</div>
					<div className="flex flex-row gap-6 [writing-mode:sideways-lr]">
						<div className="p-2 font-regular underline hover:opacity-85 transition-opacity duration-100 ease-in-out">
							<Link href="/">Instagram</Link>
						</div>
						<div className="p-2 font-regular underline hover:opacity-85 transition-opacity duration-100 ease-in-out">
							<Link href="/">Facebook</Link>
						</div>
					</div>
				</div>
				<div className="">
					<p className="p-2">
						<a href="mailto:info@glitcher.com">info@glitcher.com</a>
					</p>
					<p className="p-2">Hietalahdenkatu 5, 00180</p>
					<p className="p-2">
						<a href="tel:+358 50 1234 567">+358 50 1234 567</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default function Header() {
	const [open, setOpen] = useState(false);

	return (
		<nav className=" flex items-center justify-between fixed w-[calc(100%-16px*2)] md:w-[calc(100%-28px*2)] pt-2 md:pt-8 z-20 top-0 ">
			<div className="flex flex-row gap-6 max-md:hidden">
				<Link href="/shows" className="font-medium p-2 hover:underline">
					Shows
				</Link>
				<Link href="/shows" className="font-medium p-2 hover:underline">
					About us
				</Link>
			</div>
			<div className="h-[84px] md:h-[92px]">
				<Link href="/">
					<Image src={Glitcher} alt="Glitcher logo of an eye" width={96} />
				</Link>
			</div>
			<div className="max-md:hidden p-2">
				<CTA text="Book us" arrow={false} address="/" />
			</div>
			<div className="md:hidden">
				{!open ? (
					<button onClick={() => setOpen(!open)}>MENU</button>
				) : (
					<div className="">
						<button onClick={() => setOpen(!open)}>CLOSE</button>
						<Menu />
					</div>
				)}
			</div>
		</nav>
	);
}
