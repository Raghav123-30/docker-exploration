import dotenv from "dotenv";
//import { connectMongo } from "./db/mongo";
import express from "express";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Hello there!" });
});

const startServer = async () => {
  //await connectMongo();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running  at http://localhost:${PORT}`);
  });
};

startServer();
