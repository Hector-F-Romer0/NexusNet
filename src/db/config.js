import axios from "axios";

export const instanceBackend = axios.create({
	baseURL: "http://localhost:4000/api/v1",
});
