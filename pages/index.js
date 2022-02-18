import Head from "next/head";
import { Banner } from "components";

export default function Home() {
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Amazon</title>
			</Head>
			<main className="max-w-screen-2xl mx-auto">
			{/* Banner */}
			<Banner />
			{/* Productfeed */}
			</main>
		</div>
	);
}
