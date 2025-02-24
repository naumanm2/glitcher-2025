import { SVGSkeleton, Skeleton } from "@/app/(utils)/skeleton";

function CardSkeleton() {
	return (
		<>
			<div className="flex flex-col gap-2 flex-1">
				<div className="flex-1">
					<SVGSkeleton className="w-full [aspect-ratio:8/9]" />
				</div>
				<h3 className="pt-2">
					<Skeleton className="w-[200px] max-w-full" />
				</h3>
				<div>
					<Skeleton className="w-[296px] max-w-full" />
					<p></p>
				</div>
			</div>
		</>
	);
}

export default function CardSkeletons({ n }: { n: number }) {
	return (
		<div className="flex flex-col md:flex-row gap-2">
			{Array.from({ length: n }, (_, index) => (
				<CardSkeleton key={index} />
			))}
		</div>
	);
}
