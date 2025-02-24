const Skeleton = ({ className }: { className: string }) => (
	<div aria-live="polite" aria-busy="true" className={className}>
		<span className="inline-flex w-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
			‌
		</span>
		<br />
	</div>
);

const SVGSkeleton = ({ className }: { className: string }) => (
	<svg className={className + " animate-pulse rounded bg-gray-300"} />
);

export default function LoadingSkeleton() {
	return (
		<>
			<div>
				<div className="flex flex-col gap-2 flex-1">
					<a className="flex-1">
						<div className="flex-1">
							<SVGSkeleton className="animate-fade-in transition duration-300 hover:scale-110 h-[1080px]" />
						</div>
					</a>
					<h3 className="pt-2">
						<Skeleton className="w-[200px] max-w-full" />
					</h3>
					<div>
						<Skeleton className="w-[296px] max-w-full" />
						<p></p>
						<p></p>
					</div>
				</div>
			</div>
		</>
	);
}
