import React from "react";

import Image from "next/image";
import Glitcher from "../public/logos/glitcher-eye.svg";

export default function Loading() {
	return (
		<div>
			<div className="bg-glitcherpink h-full w-full flex justify-center items-center">
				<Image src={Glitcher} alt="Glitcher logo of an eye" width={96} />
			</div>
			<p>loading...</p>
		</div>
	);
}
