import mongoose from "mongoose";

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION);
		console.log("Conexión a la BD exitosa 😎");
	} catch (error) {
		console.log(error);
		throw new Error("Error al conectarse a la BD 🧯");
	}
};

export { dbConnection };
