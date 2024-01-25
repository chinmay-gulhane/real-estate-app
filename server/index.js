import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import registerRouter from "./routes/index.js";
import cookieParser from "cookie-parser";

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

// allow json as input for the server
app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

//Initialize routes
registerRouter(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running successfully on ${PORT}`);
});
