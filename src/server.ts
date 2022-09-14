import mongoose from "mongoose"
import "dotenv/config"

import express from "express"
import cors from "cors"
import router from "./endpoints"

import handleError from "./error-handler.middleware"

const app = express()
//------------------------------------------------------//
app.use(cors({ origin: "*" }))
app.use(express.json())
app.use("", router)
app.use(handleError)

app.listen(process.env.PORT, async () => {
  console.log(`Server running at port ${process.env.PORT}`)
  console.log("Connecting to MongoDB...")
  await mongoose.connect(process.env.MONGODB_CONNECTION_STRING ?? "")
  console.log("MongoDB Connected")
})

//------------------------------------------------------//
process.on("uncaughtException", (exception) => {
  console.log("UNCAUGHT EXCEPTION! 💥")
  console.log(exception.name, exception.message)
})
