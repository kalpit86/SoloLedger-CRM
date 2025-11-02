import express, { json } from "express";
import "dotenv/config"
import authRouter from "./src/routes/authRoutes.js";
import connectDB from "./src/config/db.js";
import cors from "cors";

const app = express();
const port = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

connectDB(mongoURI);

const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: allowedOrigins, // Allows all origins
  exposedHeaders: ['Authorization'],
}));

app.use(express.json());
app.use("/api/auth",authRouter)

app.get("/",(req,res)=>{
    res.status(200).send(`<h1>Hello or bhai kese ho ???<h1/>`)
})

app.listen(port,()=>{
  console.log("Server is listening on: "+ port)
})