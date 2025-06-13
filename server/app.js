// This script is the entry point of the server

// Secret manager
import "dotenv/config";

// Import ExpressJS from /node_modules
import express from "express";

// Import path package from NodeJS
import { dirname } from "path";

// Firestore
import { db } from "./config/firebaseConfig.js";

// Create server instance
const app = express();

// Define port for network traffic
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile("../client/index.html");
});

// When user naviagates to localhost:3000/api/hello, send them this message
app.get("/api/data", async (req, res) => {
  try {
    const docRef = await db.collection("products").doc("exr0UlXAPbbZImJdCR0k");
    const docSnap = await docRef.get();

    res.status(201).json(docSnap.data()); // Return the ID of the new document
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send(error.toString());
  }
});

// Start the Express server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console once the server starts successfully.
  console.log(`Express app listening at http://localhost:${port}`);
});
