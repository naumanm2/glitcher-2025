import type { Metadata } from "next";
import "./globals.css";

import Container from "./components/container";
import Header from "./components/header";
import Footer from "./components/footer";

import { CyGrotesk } from "./assets/fonts/index";

export const metadata: Metadata = {
	title: {
		default: "Glitcher",
		template: "%s | Glitcher"
	},
	description: "Glitcher is a pop-culture inspired performance collective based in Helsinki",
	twitter: {
		card: "summary_large_image"
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<main
					className={`${CyGrotesk.variable} font-sans flex justify-center overflow-x-hidden
        `}>
					<Container>
						<Header />
						{children}
						<Footer />
					</Container>
				</main>
			</body>
		</html>
	);
}
