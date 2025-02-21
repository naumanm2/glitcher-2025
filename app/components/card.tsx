import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface cardOptions {
  image: string;
  imageBlurData?: string;
  imageAltText: string;
  headline: string;
  subtitle?: string[];
  paragraph?: string;
  paragraph2?: string;
  address?: string;
  phone?: string;
}

export default function Card({
  image,
  imageBlurData,
  imageAltText,
  headline,
  subtitle,
  paragraph,
  paragraph2,
  address,
  phone,
}: cardOptions) {
  return (
    <div>
      {address ? (
        <div className="flex flex-col gap-2 flex-1">
          <Link href={address} className="flex-1">
            <div className="overflow-hidden rounded-xl flex-1">
              <Image
                src={image}
                width={700}
                height={900}
                blurDataURL={imageBlurData}
                alt={imageAltText}
                className="animate-fade-in transition duration-300 hover:scale-110"
                style={{ objectFit: "cover", width: "auto", height: "auto"}}
              />
            </div>
          </Link>
          <h3 className="pt-2">{headline}</h3>
          <div className="">
            {subtitle &&
              subtitle.map((content:string, index:number) => <p key={index}>{content}</p>)}
            <p>{paragraph}</p>
            <p>{paragraph2}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col pb-4">
          <div className="overflow-hidden rounded-xl">
            <Image
              src={image}
              width={500}
              height={700}
              //   blurDataURL={imageBlurData}
              alt={imageAltText}
            />
          </div>
          <h3 className="pt-3 pb-2">{headline}</h3>
          <p className="pb-1">{paragraph}</p>
          <Link href={`tel:${phone}`}>
            <p className="underline hover:opacity-70 animate-fade-in transition duration-200 ">
              {phone}
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
