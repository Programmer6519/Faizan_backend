import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dns from 'dns'
import dotenv from 'dotenv'
dotenv.config();
// require('dotenv').config({path: './env'});

dns.setServers(['8.8.8.8','1.1.1.1']);

console.log(process.env.MONGODB_URI);
const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected succesffully !! DB HOST ${connectionInstance.connection.host}`);
    } catch (error){
        console.log("Error in DB Connection\n", error);
        process.exit(1);
    }
}

export default connectDB;