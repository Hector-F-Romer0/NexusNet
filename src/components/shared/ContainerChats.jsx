import React, { useEffect, useState } from "react";
import CardChat from "./CardChat";
import { useSelector } from "react-redux";
import { getUsersRequest, getUsersWithoutMeRequest } from "../../services/users.services";
import { getUserToken } from "../../helpers/localStorageManagement";

const ContainerChats = ({ setmessageHistory, socket }) => {
	const [users, setUsers] = useState([]);
	const { userIdSesion } = useSelector((state) => state.chat);

	useEffect(() => {
		const getAllUsers = async () => {
			const userToken = getUserToken();
			const resUsers = await getUsersWithoutMeRequest(userToken);
			console.log(resUsers);
			setUsers(resUsers.data);
		};
		getAllUsers();
	}, []);

	return (
		<div className="w-2/4 mx-2">
			<h1 className="text-5xl font-bold m-5 text-mainTitle">Chats</h1>
			<div className="flex flex-col items-center">
				{users?.map((user) => {
					return <CardChat key={user?.id} data={user} socket={socket} />;
				})}
			</div>
		</div>
	);
};

export default ContainerChats;
