import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {

	// Protect the endpoint with a secret token
  const secret = req.headers.get('authorization')?.replace('Bearer ', '');

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }


	try {
		const { slug } = await req.json();
		console.log("revalidating", slug);

		if (!slug) {
			revalidatePath("/");
			revalidatePath("/shows");
			revalidatePath("/about");
      return NextResponse.json({ message: `Revalidated all pages ${slug}` });
		}

		// Revalidate the specific page
		revalidatePath(`/shows/${slug}`);
		// Also revalidate listing page if needed
		revalidatePath("/shows");
		// Optionally revalidate the homepage if it lists shows
		revalidatePath("/");

		return NextResponse.json({ message: `Revalidated /shows/${slug}` });
	} catch (error) {
		return NextResponse.json({ message: "Error revalidating", error }, { status: 500 });
	}
}
