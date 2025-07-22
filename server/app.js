// This script is the entry point of the server

// Import and setup enviroment varaible manager
import "dotenv/config";

// Import ExpressJS
import express from "express";

import { dirname, join } from "path";
import { fileURLToPath } from "url";

// Import Firestore
import { db } from "./config/firebaseConfig.js";

const app = express();
const port = process.env.PORT || 3000;

const publicPath = join(dirname(fileURLToPath(import.meta.url)), "public");

// Add functionality to app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(publicPath));

// When user naviagates to localhost:3000/api/hello, send them this message
app.get("/api/data", async (req, res) => {});

// Start the Express server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console once the server starts successfully.
  console.log(`Express app listening at http://localhost:${port}`);
});
