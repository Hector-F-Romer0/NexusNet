import { setKeyWords, startLoading } from "./keywordsSlice";
import keywords from "../../../db/keywords.json";

export const getKeyWords = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		// console.log(keywords);
		// TODO: conectar a la base de datos
		dispatch(setKeyWords(keywords));
	};
};