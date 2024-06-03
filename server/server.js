import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
const port = 3000;
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("the database is connected");
  })
  .catch((error) => {
    console.log(error);
  });

//*user routes */

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`the server is running on ${port}`);
});

// *** error handleing
app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
