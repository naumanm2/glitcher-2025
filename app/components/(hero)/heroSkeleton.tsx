import { SVGSkeleton, Skeleton } from "@/utils/skeleton";

export default function HeroSkeleton() {
	return (
		<div className="rounded-2xl bg-glitcherpink w-full p-4 md:p-6 pt-[160px] md:pt-[240px] relative">
			<div className="text-glitcherred w-full scale-[120%] md:scale-110 flex justify-center font-display -z-10">
				<Skeleton className="w-[100vw] h-32" />
			</div>
			<div className="relative flex flex-col md:flex-row justify-between w-full gap-8 md:gap-12 mt-12 z-10">
				<div className="md:self-end flex-1 flex flex-col gap-2 md:gap-4">
					<p>
						<SVGSkeleton className="h-6 w-full" />
					</p>
					<h2>
						<SVGSkeleton className="h-6 w-full" />
					</h2>
				</div>
				<div className="flex-1">
					<Skeleton className="w-full h-full [aspect-ratio:8/9]" />
				</div>
			</div>
		</div>
	);
}
