import express from "express";
import cors from "cors";
import connection from "./config/config.js";
import UserRoutes from "./routes/UserRoutes.js"


const app = express();
connection();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/api",UserRoutes)

app.listen(PORT, () => {

    console.log("Successfully connected!");
})