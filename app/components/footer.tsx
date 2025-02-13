import Link from "next/link";
import Image from "next/image";

import Glitcher from "../../public/logos/glitcher-pink.svg";

export default function Footer() {
  return (
    <footer>
      <div className="bg-foreground rounded-3xl flex flex-col gap-16 md:gap-16 text-white p-4 md:p-8">
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
          <div className="flex flex-col-reverse gap-0 items-start">
            <div className="">
              <p className="p-2 hover:underline">
                <a href="tel:+358 45 136 4006">+358 45 136 4006</a>
              </p>
              <p className="p-2 hover:underline">
                <a href="mailto:info@glitcher.info">info@glitcher.info</a>
              </p>
            </div>
            <div className="flex flex-row gap-6">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/g_litcher/"
                className="p-2 font-regular underline hover:opacity-85 transition-opacity duration-100 ease-in-out"
              >
                Instagram
              </Link>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com/glitcherinthehouse"
                className="p-2 font-regular underline hover:opacity-85 transition-opacity duration-100 ease-in-out"
              >
                Facebook
              </Link>
            </div>
          </div>
        </div>
        <div className="text-glitcherred w-full scale-[125%] md:scale-110 flex justify-center font-display">
          <Image src={Glitcher} alt="" className="w-[100vw]"></Image>
        </div>
        <div className="w-full text-center p-2">
          <p>cc. Glitcher 2025.</p>
        </div>
      </div>
    </footer>
  );
}
