export default function Spacer({ h }: { h: number }) {
	return <div className={`w-full`} style={{ height: h + "px"}}></div>;
}
