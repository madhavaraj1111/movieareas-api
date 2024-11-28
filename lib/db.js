import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://madhavaraj1111:mwnqhqY5w3IWNDnb@cluster0.7jfrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.error("Connection error with mongodb", error);
    process.exit(1);
  }
};

export default connectDb;

// mongodb+srv://madhavaraj1111:mwnqhqY5w3IWNDnb@cluster0.7jfrp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
