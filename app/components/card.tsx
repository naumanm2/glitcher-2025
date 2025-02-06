import Link from "next/link";
import Image from "next/image";

interface cardOptions {
  image: string;
  imageAltText: string;
  headline: string;
  paragraph?: string;
  address?: string;
}

export default function Card({
  image,
  imageAltText,
  headline,
  paragraph,
  address,
}: cardOptions) {
  const imageAddress = image;
  return (
    <div>
      {address && (
        <Link href={address} className="flex-1">
          <div className="flex flex-col gap-2 flex-1">
            <div className="overflow-hidden rounded-xl block">
              <Image
                src={imageAddress}
                alt={imageAltText}
                className="animate-fade-in transition duration-300 hover:scale-110"
				width={640}
				height={960}
                layout="responsive"
              />
            </div>
            <h3 className="pt-2">{headline}</h3>
            <p>{paragraph}</p>
          </div>
        </Link>
      )}
    </div>
  );
}
