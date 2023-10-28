import mongoose from 'mongoose';

async function ConnectToDatabase() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect("mongodb://0.0.0.0:27017/user-auth" , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
	  console.log("Connected to database::MongoDB");
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export default ConnectToDatabase;