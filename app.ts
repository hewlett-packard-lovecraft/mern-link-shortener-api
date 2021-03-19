import express from "express";
import mongoose, { mongo } from "mongoose";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

// routes
// routes here
import Main from "./routes/Main";


const app = express();
app.use(morgan("dev"));
app.listen(3000);

app.get("/", Main);

// set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

// get the default connection
var db = mongoose.connection;

// bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));