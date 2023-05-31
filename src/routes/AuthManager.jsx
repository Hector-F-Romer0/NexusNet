import React from "react";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/shared/Loading";

const AuthManager = ({ children }) => {
	const { role, isLoading } = useAuth();

	return <>{children}</>;
};

export default AuthManager;
