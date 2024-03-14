const mongoose = require("mongoose");
let cachedDb: any = null;
export const connectDb = async () => {
  try {
    if (cachedDb) {
      return true;
    }
    console.log("Checking");
    await mongoose
      .connect(
        "mongodb+srv://quiz:quiz@quiz.as3jzp9.mongodb.net/?retryWrites=true&w=majority&appName=quiz"
      )
      .then(() => (cachedDb = true))
      .catch(() => (cachedDb = false));
    // cachedDb = mongoose.connection;
    console.log("MongoDB Connected");
    return cachedDb;
  } catch (error) {
    console.error("Error while connecting to db", error);
    process.exit(1);
  }
};
