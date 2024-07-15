import mongoose from "mongoose";

export const connectToDb = async () => {
 try {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("connect to mongo db");
 } catch (err) {
  throw new Error(err.message);
 }
};

mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
