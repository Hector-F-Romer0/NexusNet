import axios from "axios";

export const instanceBackend = axios.create({
	baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
});

export const USER_ROLES = Object.freeze({
	ADMIN: "6466e4f3f6031b477e59c2e5",
	PROVIDER: "6466e5f41d1fe6f36287dc40",
	CLIENT: "6466e5f81d1fe6f36287dc43",
});
