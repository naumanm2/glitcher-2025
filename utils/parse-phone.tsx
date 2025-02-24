export default function parsePhone(number: string | undefined | null) {
	if (!number) return "";
	return (
		number.substring(0, 4) + " " + number.substring(4, 6) + " " + number.substring(6,9) + " " + number.substring(9)
	);
}
