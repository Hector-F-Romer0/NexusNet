import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { USER_ROLES } from "../db/config";
import Loading from "../components/shared/Loading";

const ProtectedRoutes = ({ children, allowedFor }) => {
	const { role, isLoading } = useAuth();

	if (isLoading) {
		return <Loading />;
	}

	if (!role) {
		return <Navigate to="/" replace />;
	}

	if (role === USER_ROLES.CLIENT && allowedFor === USER_ROLES.PROVIDER) {
		return <Navigate to="/client/home" replace />;
	}

	if (role === USER_ROLES.CLIENT && allowedFor === USER_ROLES.ADMIN) {
		return <Navigate to="/client/home" replace />;
	}

	if (role === USER_ROLES.PROVIDER && allowedFor === USER_ROLES.CLIENT) {
		return <Navigate to="/provider/home" />;
	}
	if (role === USER_ROLES.PROVIDER && allowedFor === USER_ROLES.ADMIN) {
		return <Navigate to="/provider/home" />;
	}

	if (role === USER_ROLES.ADMIN && allowedFor === USER_ROLES.PROVIDER) {
		return <Navigate to="/admin/home" />;
	}

	if (role === USER_ROLES.ADMIN && allowedFor === USER_ROLES.CLIENT) {
		return <Navigate to="/admin/home" />;
	}
	return children ? children : <Outlet />;
};

export default ProtectedRoutes;
