export default function Container({ children }: { children: React.ReactNode }) {
	return (
		<body>
			<div className="max-w-screen-2xl p-8">{children}</div>
		</body>
	);
}
