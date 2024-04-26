import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
app.use(express.json({ limit: "16kb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

//* Routes
import clientRoutes from "./Routes/client.routes.js";
import generalRoutes from "./Routes/general.routes.js";
import managementRoutes from "./Routes/management.routes.js";
import salesRoutes from "./Routes/sales.routes.js";

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

export { app };
