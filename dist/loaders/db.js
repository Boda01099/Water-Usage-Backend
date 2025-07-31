import mongoose from "mongoose";
import "dotenv/config";
import logger from "../utils/logger";
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI) {
            throw new Error("MONGO_URI is not defined");
        }
        await mongoose
            .connect(mongoURI)
            .then(() => logger.info("MongoDB connected successfully"))
            .catch((error) => {
            logger.error("Error connecting to MongoDB:", error);
            process.exit(1);
        });
    }
    catch (error) {
        logger.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};
export default connectDB;
