export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
			<div className="max-w-screen-2xl p-4 md:p-8 w-full">{children}</div>
	);
}
