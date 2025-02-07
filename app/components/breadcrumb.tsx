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
				{pathNames.map((i: string, index: number) => (
					<div key={index} className="flex flex-row gap-2">
						<p className="">/ </p>
						{index < length+1 ? (
							<Link href={i} className={`${length < index && "underline"}`}>
								{i}
							</Link>
						) : (
							<p>{i}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
