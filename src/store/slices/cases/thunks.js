import moment from "moment";

import casesDB from "../../../db/cases.json";
import { createCase } from "./casesSlice";

export const getCases = () => {
	return async (dispatch) => {
		// TODO: Poner isLOading en true
		dispatch(casesDB);

		// getCase
	};
};

export const getCase = (idCase) => {
	return async (dispatch) => {
		// TODO: Poner isLOading en true
		const findCase = casesDB.find((myCase) => myCase.id === idCase);
		dispatch(findCase);

		// getCase
	};
};

export const postCase = (caseToCreate) => {
	return async (dispatch) => {
		const { category, data, keywords, service, userId } = caseToCreate;
		//TODO: Petición a la BD para crear un caso.

		const caseToAdd = {
			id: Date.now(),
			caseTitle: data?.caseTitle,
			caseDescription: data.caseDescription,
			createdBy: userId,
			createdAt: moment(Date.now()).format("DD/MM/YYYY"),
			takenOn: null,
			takenBy: null,
			completed: false,
			keywords,
			service,
			category,
			files: [
				{
					id: 1,
					src: "https://....",
				},
			],
		};
		// console.log(caseToAdd);
		dispatch(createCase(caseToAdd));
	};
};
