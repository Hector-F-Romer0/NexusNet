import express from 'express'
import * as dotenv from "dotenv";
import { dbConnection } from "../database/config.js";
import { Server } from "socket.io";
import { createServer } from 'http'
import cors from "cors";
import { socketController } from '../sockets/socket.controller.js';
import passport from "passport";
import session from "express-session";

dotenv.config();
import clientRoutes from "../routes/clients.routes.js";
import serviceRoutes from "../routes/services.routes.js";
import keywordsRoutes from "../routes/keywords.routes.js";
import categoryRoutes from "../routes/category.routes.js";
import providerRoutes from "../routes/provider.routes.js";
import casesRoutes from "../routes/cases.routes.js";
import authRoutes from "../routes/auth.routes.js";
import roleRoutes from "../routes/role.routes.js";
import messageRoutes from "../routes/message.routes.js";
import userRoutes from "../routes/users.routes.js";
import chatRoutes from "../routes/chat.routes.js";

class ServerBE{
constructor(){

    this.PORT = process.env.PORT || 4001;

    this.app = express();
    this.httpServer = createServer(this.app);
    this.io = new Server(this.httpServer, {
        cors: {
            origin: "*",
        },
    });

    this.connectToBD()
    this.configSockets()
    this.middlewares()
    this.setRoutes()
}


// BD config
async connectToBD(){
    await dbConnection()
}

middlewares(){
    this.app.use(cors());
this.app.use(express.json());
this.app.use(session({ secret: "Sunshine" }));
this.app.use(passport.initialize());
this.app.use(passport.session());
}

setRoutes(){
this.app.use("/api/v1/client", clientRoutes);
this.app.use("/api/v1/provider", providerRoutes);
this.app.use("/api/v1/service", serviceRoutes);
this.app.use("/api/v1/keyword", keywordsRoutes);
this.app.use("/api/v1/category", categoryRoutes);
this.app.use("/api/v1/case", casesRoutes);
this.app.use("/api/v1/auth", authRoutes);
this.app.use("/api/v1/role", roleRoutes);
this.app.use("/api/v1/message", messageRoutes);
this.app.use("/api/v1/user", userRoutes);
this.app.use("/api/v1/chat", chatRoutes);
}
configSockets(){
    this.io.on("connection", (socket) => socketController(socket, this.io));
}

listen(){
    // Listen with socketserver according to documentation
this.httpServer.listen(this.PORT, () => console.log(`Server corriendo en el servidor ${this.PORT} 🔥`));
}
}

export{ ServerBE }