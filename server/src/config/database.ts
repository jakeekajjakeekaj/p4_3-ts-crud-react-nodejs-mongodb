import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

const connectDB = async ()=> {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(">>>> DB is Connected");
  } catch (err) {
    console.log(err);
  }
}

export default connectDB;