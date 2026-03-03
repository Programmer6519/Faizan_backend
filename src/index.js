import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import express, { urlencoded } from "express";
import dotenv from 'dotenv'
import cors from 'cors'
// require('dotenv').config({path: './env'});


const app = express();
dotenv.config({path: './env'});
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true,limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());




connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is listeneing to port ${process.env.PORT}`);
  })
})
.catch((err) => {console.log(err)});


/*
import express from 'express';
const app = express();

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
        console.log("Errr: ", error);
        throw error
    })
    app.listen(process.env.PORT, () => {
        console.log(`app is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("Error:" + error);
    throw error;
  }
})();
*/
