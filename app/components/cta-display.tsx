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
    <div className="flex flex-col mt-24">
      <div className="w-full font-medium text-center text-[10vw] -mb-24">
        {headline}
      </div>
      <Link href={address}>
        <div className="group w-full bg-glitcherpink h-[24vw] rounded-full flex flex-row justify-center items-center gap-24">
          <div className="text-[9vw] font-medium">{text}</div>
          <Image
            src={CTAarrow}
            alt=""
            width={144}
            layout="responsive"
            className="-ml-12 group-hover:-ml-0 animate-fade-in transition-all duration-200 max-w-36"
          />
        </div>
      </Link>
    </div>
  );
}
