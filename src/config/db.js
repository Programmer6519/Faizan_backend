import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
dotenv.config();
// require('dotenv').config({path: './env'});

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`Connected succesffully`);
  } catch (error) {
    console.log("Error in DB Connection\n", error);
    process.exit(1);
  }
};

export default connectDB;
