import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

if(!process.env.DB_URL) {
  throw new Error(`Please define the MONGODB_URI environment `);
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log(`Connected to database in developement mode`);
  } catch (error) {
    console.error('Error connecting to database: ', error);

    process.exit(1);
  }
}

export default connectToDatabase;