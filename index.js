import express from "express";
import * as dotenv from "dotenv";

import { dbConnection } from "./database/config.js";
import clientRoutes from "./routes/clients.routes.js";
import serviceRoutes from "./routes/services.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;
dbConnection(); // Establecer conexión a la BD

// Middlewares
// Lectura y parseo del del body (generalmente utilizado cuando se envian información por PUT o POST)
app.use(express.json());

// RUTAS
app.use("/api/v1/client", clientRoutes);
app.use("/api/v1/service", serviceRoutes);

app.listen(PORT, () => console.log(`Server corriendo en el servidor ${PORT} 🔥`));
