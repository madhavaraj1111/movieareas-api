import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.error("Connection error with mongodb", error);
    process.exit(1);
  }
};

export default connectDb;
