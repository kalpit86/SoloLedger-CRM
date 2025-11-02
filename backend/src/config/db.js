import mongoose from "mongoose";

const connectDB = async (connectionString) => {
  try {
    const conn = await mongoose.connect(connectionString, {
      // Recommended options for modern Mongoose versions
    });
    console.log(`MongoDB Connected: Successfully :)`);
    return conn; // Return the connection object if needed in other parts of your application
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB