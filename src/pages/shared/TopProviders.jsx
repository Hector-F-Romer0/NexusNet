import React from "react";
import { useSelector } from "react-redux";

import SideBar from "../../components/shared/SideBar";
import Footer from "../../components/shared/Footer";
import CardTopProvider from "../../components/shared/CardTopProvider";

const TopProviders = () => {
	const { providers } = useSelector((state) => state.providers);

	return (
		<section className="flex">
			<SideBar />
			<div className=" text-xl text-gray-900 font-semibold">
				<h1 className="text-4xl font-bold text-center mt-9">Top providers</h1>
				<div className="flex flex-col items-center justify-center flex-wrap gap-11 mt-10 mb-5">
					{providers.map((provider) => (
						<CardTopProvider key={provider.id} data={provider} />
					))}
				</div>
				<Footer />
			</div>
		</section>
	);
};

export default TopProviders;
