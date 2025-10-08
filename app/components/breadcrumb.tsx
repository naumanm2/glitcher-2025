import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const length = pathNames.length;

  return (
    <div>
      <div className="flex flex-row gap-2">
        <Link href="/" className="underline">
          Home
        </Link>
        {pathNames.map((i: string, index: number) => {
          const icap =
            i.charAt(0).toUpperCase() + String(i).slice(1).replaceAll("-", " ");
          return (
            <div key={index} className="flex flex-row gap-2">
              <p className="">/</p>
              {index + 1 < length ? (
                <Link href={"/" + i} className="underline">
                  {icap}
                </Link>
              ) : (
                <p>{icap}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
