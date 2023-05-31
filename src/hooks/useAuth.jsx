import { useEffect, useState } from "react";
import { getRoleUser } from "../helpers/localStorageManagement";

export const useAuth = () => {
	const [role, setRole] = useState("");
	const [isLoading, setIsLoading] = useState(true);

	const getRole = async () => {
		setIsLoading(true);
		const roleUser = await getRoleUser();
		setRole(roleUser);
	};

	useEffect(() => {
		const fecthData = async () => {
			await getRole();
			// console.log(role);
			setIsLoading(false);
		};
		fecthData();
	}, []);

	return { role, isLoading };
};
