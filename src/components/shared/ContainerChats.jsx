import React from "react";
import CardTopProvider from "./CardTopProvider";

const ContainerChats = () => {
	return (
		<div>
			<h1 className="text-5xl font-bold m-5 text-mainTitle">Chats</h1>
			<div className="w-full">
				<CardTopProvider />
				<CardTopProvider />
				<CardTopProvider />
				<CardTopProvider />
				<CardTopProvider />
				<CardTopProvider />
				<CardTopProvider />
			</div>
		</div>
	);
};

export default ContainerChats;
