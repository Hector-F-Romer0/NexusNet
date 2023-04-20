import { setKeyWords, startLoading } from "./keywordsSlice";
import keywords from "../../../db/keywords.json";

export const getKeyWords = () => {
	return async (dispatch) => {
		dispatch(startLoading());
		// TODO: conectar a la base de datos
		dispatch(setKeyWords(keywords));
	};
};
