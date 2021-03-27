import express from "express";
import mongoose, { mongo } from "mongoose";
import morgan from "morgan";

import * as config from "./config.json";
// import rateLimit from "express-rate-limit";

// routes here
import Generate from "./routes/Generate";
import Redirect from "./routes/Redirect";

const app = express();
app.use(morgan("dev"));
app.listen(3000);

app.use("/generate", Generate);
app.use("/", Redirect);

// set up default mongoose connection
var mongoDB = config.mongo;
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// get the default connection
var db = mongoose.connection;

// bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

console.log(`mongodb connection: + { mongodb } \n port : 3000`);
