// This script is the entry point of the server

// Import and setup enviroment varaibles
import "dotenv/config";
import express from "express";
import cors from "cors";

import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { db } from "./config/firebaseConfig.js";

const app = express();
const port = process.env.PORT || 3000;

// Path to frontend dist directory
const clientBuildPath = join(__dirname, "..", "client", "dist");

// Init Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(clientBuildPath));

// Start the Express server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console once the server starts successfully.
  console.log(`Express server listening at http://localhost:${port}`);
});
