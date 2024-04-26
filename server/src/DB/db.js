import mongoose from "mongoose";
import { dbName } from "../constant.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${dbName}`);
        console.log(`MongoDB connected!! DB to ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`Failed to connect to Mongo!!: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
