import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config(); 

const app = express();


app.use(express.json());


connectDB();


app.get("/", (req, res) => {
  res.send("Server is running successfully ");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`)
});
