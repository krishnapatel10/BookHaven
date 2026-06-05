import express from "express"
import cors from "cors"
import "dotenv/config"


let app = express()

app.use(express.json())
// app.use(cors())
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://book-haven-uw13.vercel.app"
    ],
    credentials: true
  })
);


//connect mongodb 
import connectdb from "./config/connectdb.js"

//connect mongodb function
connectdb()



//routes api 
import BooksRoute from "./Routes/booksRoute.js"
import UserRoute from "./Routes/UserRoute.js"



//local api
app.get("/",(req,res)=>{
    res.json("api is working..")
})

//routes
app.use("/api/book",BooksRoute)
app.use("/api/user",UserRoute)




//listen
app.listen(process.env.PORT || 5500,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

