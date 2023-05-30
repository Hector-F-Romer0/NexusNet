import { Navigate, Outlet } from "react-router-dom";
import { getRoleUser, getUserToken } from "../helpers/localStorageManagement";
import { verifyJWT } from "../helpers/jwt";

const ProtectedRoutes = ({ children, allowedFor }) => {
	// const user = getUserLocalStorage();
	// const getRole = async () => {
	// 	const role = await getRoleUser();
	// 	return role;
	// };

	// const role = getRole();
	// console.log(role);
	// console.log(user);

	// if (!user) {
	// 	return <Navigate to="/" />;
	// }

	// if (user.typeUser === "client" && allowedFor === "provider") {
	// 	return <Navigate to="/client/home" />;
	// }

	// if (user.typeUser === "client" && allowedFor === "admin") {
	// 	return <Navigate to="/client/home" />;
	// }

	// if (user.typeUser === "provider" && allowedFor === "client") {
	// 	return <Navigate to="/provider/home" />;
	// }
	// if (user.typeUser === "provider" && allowedFor === "admin") {
	// 	return <Navigate to="/provider/home" />;
	// }

	// if (user.typeUser === "admin" && allowedFor === "provider") {
	// 	return <Navigate to="/admin/home" />;
	// }

	// if (user.typeUser === "admin" && allowedFor === "client") {
	// 	return <Navigate to="/admin/home" />;
	// }

	return children ? children : <Outlet />;
};

export default ProtectedRoutes;
