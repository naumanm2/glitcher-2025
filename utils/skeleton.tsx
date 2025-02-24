export const Skeleton = ({ className }: { className: string }) => (
	<div aria-live="polite" aria-busy="true" className={className}>
		<span className="block h-full w-full animate-pulse select-none rounded-2xl bg-gray-200 leading-none">
			‌
		</span>
		<br />
	</div>
);

export const SVGSkeleton = ({ className }: { className: string }) => (
	<svg className={className + " animate-pulse rounded bg-gray-200"} />
);
