import type { NextConfig } from "next";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
	images: {
		localPatterns: [
			{
				pathname: "/assets/images/**",
				search: "",
			},
		],
	},
};

const withMDX = createMDX({
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
