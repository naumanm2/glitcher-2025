import Image from "next/image";
import CTAarrow from "../../public/arrow.svg";
import Link from "next/link";

interface CTAoptions {
  text: string;
  arrow: boolean;
  address: string;
}

export default function CTA({ text, arrow, address}: CTAoptions) {
  return (
    <Link href={address}>
      <button className="group flex px-6 pt-3 pb-[13px] md:pb-[14px] gap-5 border-2 border-black items-center justify-between max-md:-mx-1 rounded-full max-md:w-full ">
        <div className="">{text}</div>
        {arrow && (
          <div className="pt-0.5 -mr-2 -translate-x-2 group-hover:-translate-x-0 animate-fade-in transition-all duration-200">
            <Image src={CTAarrow} alt="" width={16} />
          </div>
        )}
      </button>
    </Link>
  );
}
