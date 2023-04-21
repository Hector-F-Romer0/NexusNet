import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
	// const { user } = useSelector((state) => state.user);

	console.log(user);
	console.log(user?.user);
	if (!user.user) {
		return <Navigate to="/" />;
	}

	return children ? children : <Outlet />;
	//     const { usersDB } = useSelector((state) => state.usersDB);
	//     const { providers } = useSelector((state) => state.providers);
	//     let existsUser = "";
	// 	const existsClient = usersDB.find((user) => user.username == data.username);
	// 	const existsProvider = providers.find((provider) => provider.username == data.username);

	// 	if (existsClient?.typeUser === "client") {
	// 		existsUser = "client";
	// 	} else if (existsClient?.typeUser === "admin"){
	//         existsUser = "admin";
	//     } else if (existsProvider) {
	// 		existsUser = "provider";
	// 	} else {
	// 		existsUser = null;
	// 	}
	// 	console.log(existsUser);
};
