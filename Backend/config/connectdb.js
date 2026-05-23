import mongoose from "mongoose";

export default function connectdb() {

   try {
     mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("Connected to mongodb...");
    }).catch((error)=>{
        console.log({message:message.error});
    })
   } catch (error) {
      console.log({message:message.error});
   }
    
}