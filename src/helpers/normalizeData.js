export const changeKeysOfArray = (array, keyToDelete, keyToChange) => {
	// Cambiar la key "id" a "value" para que React Selector detecte bien los datos.
	// console.log(array.length);
	array.map((item) => {
		item[keyToChange] = item[keyToDelete];
		delete item[keyToDelete];
		return item;
	});
	return array;
};
