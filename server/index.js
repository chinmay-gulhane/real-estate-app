import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv package installed to store mongo url in env file
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDb!");
  })
  .catch((err) => {
    console.log(err);
  });

// Initialize express app
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running successfully on ${PORT}`);
});
