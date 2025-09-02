import dotenv from "dotenv";
import { connectMongo } from "./db/mongo";
import express from "express";
import fs from "fs";
import path from "path";

dotenv.config();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Hello Raghavendra!" });
});

app.post("/friends", (req, res) => {
  const { name, address } = req.body;
  const filePath = path.join("/data/friends", `${name}.json`);

  fs.writeFile(filePath, JSON.stringify({ name, address }), (err) => {
    if (err) {
      console.log("Error writing a file :", err);
      res.status(500).json({ message: "Failed to save data" });
    }
    console.log("Data saved successfully");
    res.status(200).json({ message: "Data saved successfully" });
  });
});

const startServer = async () => {
  await connectMongo();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running  at http://localhost:${PORT}`);
  });
};

startServer();
