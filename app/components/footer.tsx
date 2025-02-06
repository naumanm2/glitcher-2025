import Link from "next/link";
import Image from "next/image";

import Glitcher from "../../public/glitcher-pink.svg";

export default function Footer() {
  return (
    <footer>
      <div className="bg-foreground rounded-3xl flex flex-col gap-16 md:gap-16 text-white p-4 md:p-12">
        <div className="flex md:flex-row flex-col w-full justify-between">
          <div className="flex flex-row md:gap-6 pb-4">
            <Link
              href="/shows"
              className="p-2 font-medium hover:underline cursor-pointer"
            >
              Shows
            </Link>
            <Link
              href="/about-us"
              className="p-2 font-medium hover:underline cursor-pointer"
            >
              About us
            </Link>
          </div>
          <div className="flex flex-col gap-0 items-start md:items-end">
            <div className="flex flex-row gap-0">
              <Link
                href="/shows"
                className="p-2 font-regular underline hover:opacity-85 transition-opacity duration-100 ease-in-out"
              >
                Instagram
              </Link>
              <Link
                href="/about-us"
                className="p-2 font-regular underline hover:opacity-85 transition-opacity duration-100 ease-in-out"
              >
                Facebook
              </Link>
            </div>
            <p className="p-2">Hietalahdenkatu 5, 00180</p>
            <p className="p-2">
              <a href="tel:+358 50 1234 567">+358 50 1234 567</a>
            </p>
          </div>
        </div>
        <div className="text-glitcherred w-full scale-110 flex justify-center font-display">
          <Image src={Glitcher} alt="" className="w-[100vw]"></Image>
        </div>
        <div className="w-full text-center p-2">
          <p>cc. Glitcher 2025.</p>
        </div>
      </div>
    </footer>
  );
}
