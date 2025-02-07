import Card from "../components/card";
import CardCollection from "../components/card-collection";
import Subhero from "../components/subhero";

import Copy_of_bloodbath from "../assets/images/Copy of Bloodbath.jpg";
import Spacer from "../components/spacer";

export default function Shows() {
	return (
		<>
			<Subhero headline="Shows" />
			<Spacer />
			<CardCollection subtitle={"2 shows"}>
				<Card
					image={Copy_of_bloodbath.src}
					imageAltText={""}
					headline={"How To Live Together"}
					paragraph="10.10.2024 – 10.01.2027"
					address="/"
				/>
				<Card
					image={Copy_of_bloodbath.src}
					imageAltText={""}
					headline={"Bloodbath"}
					paragraph="10.10.2024 – 10.01.2027"
					address="/"
				/>
			</CardCollection>
			<Spacer />
		</>
	);
}
