import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.MONGO_URI || "";

export const connectMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to mongodb");
  } catch (error) {
    console.error(
      "❌. Failed to connect to MongoDB. We encountered the following error.",
      error
    );
  }
};
