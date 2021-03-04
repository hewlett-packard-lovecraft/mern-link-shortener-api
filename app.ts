import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

// routes
// routes here
import Main from "./routes/Main";

const router = express.Router();
const app = express();

app.use(morgan("dev"));
app.listen(3000);

app.get("/", Main);
