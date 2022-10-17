import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
import authRouter from "./src/routes/authRouter.js"
dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000

mongoose
    .connect("mongodb://localhost:27017/med")
    .then(()=>{console.log("DB - Power")})
    .catch((error)=>{console.log(error)})


app.use("/auth", authRouter)
app.use("/users", authRouter)



const server = app.listen(PORT, function () {  
    console.log('Сервер пашет на порту: ' + server.address().port);
  })