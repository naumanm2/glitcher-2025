import Link from "next/link";
import Image from "next/image";
import CTAarrow from "../../public/arrow.svg";

interface CTADisplayOptions {
  headline: string;
  text: string;
  address: string;
}

export default function CTAdisplay({
  headline,
  text,
  address,
}: CTADisplayOptions) {
  return (
    <div className="flex flex-col">
      <div className="w-full font-medium text-center text-[10vw] -mb-[5vw]">
        {headline}
      </div>
      <Link href={address}>
        <div className="group w-full bg-glitcherpink h-[32vw] md:h-[24vw] rounded-full flex flex-row justify-center items-center gap-12 md:gap-24">
          <div className="text-[9vw] font-medium">{text}</div>
          <div className="basis-1/12">
            <Image
              src={CTAarrow}
              alt=""
              width={144}
              layout="responsive"
              className="-ml-4 md:-ml-12 group-hover:-ml-0 animate-fade-in transition-all duration-200 w-full"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
