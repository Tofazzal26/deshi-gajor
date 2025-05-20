import mongoose from "mongoose";

const ConnectMongoose = async () => {
  try {
    const res = await mongoose.connect(process.env.Mongoose_URI);
    // console.log("Mongoose Connect Successfully");
  } catch (error) {
    // console.error("Test MongoDB connection failed:", error);
  }
};

export default ConnectMongoose;
