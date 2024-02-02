import mongoose from "mongoose";
const connectToMongoDB =async()=>{
    try{
          await mongoose.connect(process.env.MONGO_DB_URL);
          console.log("Connected To MongoDb")
    }
    catch(error){
         console.log("Error connection to MongoDb",error.message)
    }
};

export default connectToMongoDB;