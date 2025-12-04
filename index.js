import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import app from "./app.js";

dotenv.config();

// connect to database
connectDB();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
