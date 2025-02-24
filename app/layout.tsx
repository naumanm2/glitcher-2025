import type { Metadata } from "next";
import "./globals.css";

import Container from "./components/container";
import Header from "./components/header";
import Footer from "./components/footer";

import { CyGrotesk } from "./assets/fonts/index";
import { GENERAL_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
	title: {
		default: "Glitcher",
		template: "%s | Glitcher",
	},
	description:
		"Glitcher is a pop-culture inspired performance collective based in Helsinki",
	twitter: {
		card: "summary_large_image",
	},
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const general = await client.fetch(GENERAL_QUERY);
	return (
		<html lang="en">
			<body className="no-scrollbar">
				<main
					className={`${CyGrotesk.variable} font-sans flex justify-center overflow-x-hidden 
        `}>
					<Container>
						<Header content={general} />
						{children}
						<Footer content={general} />
					</Container>
				</main>
			</body>
		</html>
	);
}
