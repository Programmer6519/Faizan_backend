import connectDB from "./config/db.js";
import express from "express";
import dotenv from 'dotenv'
dotenv.config({path: './env'});
// require('dotenv').config({path: './env'});


const app = express();
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at port ${process.env.PORT}`);
});

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
