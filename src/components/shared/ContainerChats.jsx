import React, { useEffect, useState } from "react";
import CardChat from "./CardChat";
import { useSelector } from "react-redux";
import { getUsersRequest } from "../../services/users.services";

const ContainerChats = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getAllUsers = async () => {
			const users = await getUsersRequest();
			console.log(users);
			setUsers(users.data);
		};
		getAllUsers();
	}, []);

	return (
		<div className="w-2/4 mx-2">
			<h1 className="text-5xl font-bold m-5 text-mainTitle">Chats</h1>
			<div className="flex flex-col items-center">
				{users.map((user) => {
					return <CardChat key={user?.id} data={user} />;
				})}
			</div>
		</div>
	);
};

export default ContainerChats;
