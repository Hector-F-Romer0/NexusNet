import React, { useState } from "react";
import CardChat from "./CardChat";
import { useSelector } from "react-redux";

const ContainerChats = () => {
	const { usersDB } = useSelector((state) => state.usersDB);

	const clients = usersDB.filter((user) => user?.typeUser !== "admin");

	return (
		<div className="w-2/4 mx-2">
			<h1 className="text-5xl font-bold m-5 text-mainTitle">Chats</h1>
			<div className="flex flex-col items-center">
				{clients.map((client) => {
					return <CardChat key={client?.id} data={client} />;
				})}
			</div>
		</div>
	);
};

export default ContainerChats;
