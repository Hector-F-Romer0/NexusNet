import { writeFile } from "node:fs";

const saveJSON = (data, filename) => {
	const jsonData = JSON.stringify(data);
	writeFile(`../db/${filename}.json`, jsonData, (error) => {
		if (error) {
			console.log(`Error guardando el archivo: ${error}`);
		}
	});
};

const readJSON = () => {};

export { saveJSON, readJSON };
