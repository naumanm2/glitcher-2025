export default function Container({ children }: { children: React.ReactNode }) {
	return (
			<div className="max-w-screen-[1720px] p-4 md:p-8 w-full">{children}</div>
	);
}
