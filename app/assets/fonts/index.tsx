import localFont from "next/font/local";

export const CyGrotesk = localFont({
	src: [
		{
			path: "CyGrotesk-KeyBold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "CyGrotesk-KeyDemi.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "CyGrotesk-KeyMedium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "CyGrotesk-KeyRegular.otf",
			weight: "400",
			style: "normal",
		},
	],
	variable: "--font-cy-grotesk",
});

export const CyGroteskHero = localFont({
	src: "CyGrotesk-WideBold.otf",
	variable: "--font-cy-grotesk-display",
});