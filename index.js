import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.listen(process.env.PORT, () => console.log(`Server corriendo en el servidor ${process.env.PORT} 😎`));
