import Link from "next/link";
import Image from "next/image";

import Glitcher from "../../public/glitcher-eye.svg";
import CTA from "./cta";

export default function Header() {
  return (
    <nav className=" flex items-center justify-between fixed w-full z-10 top-0 ">
      <div className="flex flex-row gap-6 font-medium">
        <Link href="/shows">Shows</Link>
        <Link href="/shows">About us</Link>
      </div>
      <div className="">
        <Image src={Glitcher} alt="Glitcher logo of an eye" width={144} />
      </div>
      <CTA text="Book us" arrow={false} address="/" />
    </nav>
  );
}
