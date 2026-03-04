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

export default app;