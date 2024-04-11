import mongoose from "mongoose";

const connectDB = () => {
    const connectionString = `${process.env.MONGODB_URI}`;

    mongoose.connect(connectionString)
        .then(() => console.log("MongoDB Connected"))
        .catch((e) => console.log("Error ->", e));
};

export default connectDB;
