import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
	const secret = req.nextUrl.searchParams.get("secret");

	// Protect the endpoint with a secret token
	if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
		return NextResponse.json({ message: "Invalid token" }, { status: 401 });
	}

	try {
		const { slug } = await req.json();

		if (!slug) {
			revalidatePath("/");
			revalidatePath("/shows");
			revalidatePath("/about");
		}

		// Revalidate the specific page
		revalidatePath(`/shows/${slug}`);
		// Also revalidate listing page if needed
		revalidatePath("/shows");

		return NextResponse.json({ message: `Revalidated /shows/${slug}` });
	} catch (error) {
		return NextResponse.json({ message: "Error revalidating", error }, { status: 500 });
	}
}
