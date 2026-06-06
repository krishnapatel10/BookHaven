import mongoose from "mongoose";

export default function connectdb() {

   // try {
   //   mongoose.connect(process.env.MONGODB_URL).then(()=>{
   //    console.log("MONGODB_URL =", process.env.MONGODB_URL);
   //      console.log("Connected to mongodb...");
   //  }).catch((error)=>{
   //      console.log(error.message);
   //  })
   // } catch (error) {
   //    console.log(error.message);
   // }
    
     console.log("ENV URL:", process.env.MONGODB_URL);

  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Connected to mongodb...");
    })
    .catch((error) => {
      console.log("Mongo Error:", error.message);
    });
}