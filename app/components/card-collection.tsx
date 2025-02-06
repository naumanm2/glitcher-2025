interface cardCollectionType {
	children: React.ReactNode;
	overflow: boolean;
}

export default function CardCollection({ children, overflow }: cardCollectionType) {
	return (
		<div>
			{overflow && (
				<div className="flex flex-wrap flex-row">
					<div className="min-w-[88.8%] max-w-[600px] flex-[1_0_25%] gap-0">
						{children}
					</div>
				</div>
			)}
			<div className="">
				<div className="flex flex-wrap flex-row min-w-[88.8%] max-w-[600px] flex-[1_0_25%] gap-0">{children}</div>
			</div>
		</div>
	);
}
