import { createServer } from "http";

import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Server } from "socket.io";

import { dbConnection } from "./database/config.js";
import clientRoutes from "./routes/clients.routes.js";
import serviceRoutes from "./routes/services.routes.js";
import keywordsRoutes from "./routes/keywords.routes.js";
import categoryRoutes from "./routes/category.routes.js";
import providerRoutes from "./routes/provider.routes.js";
import casesRoutes from "./routes/cases.routes.js";
import authRoutes from "./routes/auth.routes.js";
import roleRoutes from "./routes/role.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";
import chatRoutes from "./routes/chat.routes.js";

import { socketController } from "./sockets/socket.controller.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

dbConnection(); // Establecer conexión a la BD

// Middlewares
app.use(cors());
// Lectura y parseo del del body (generalmente utilizado cuando se envian información por PUT o POST)
app.use(express.json());

// Socket server configuration
const httpServer = createServer(app);
const io = new Server(httpServer, {
	cors: {
		origin: "*",
	},
});

io.on("connection", socketController);

// RUTAS
app.use("/api/v1/client", clientRoutes);
app.use("/api/v1/provider", providerRoutes);
app.use("/api/v1/service", serviceRoutes);
app.use("/api/v1/keyword", keywordsRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/case", casesRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/role", roleRoutes);
app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/chat", chatRoutes);

// Listen with socketserver according to documentation
httpServer.listen(PORT, () => console.log(`Server corriendo en el servidor ${PORT} 🔥`));
