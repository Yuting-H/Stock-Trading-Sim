// This script is the entry point of the server

// Import ExpressJS from /node_modules
const express = require("express");

// Import path package from NodeJS
const path = require("path");

// Create server instance
const app = express();

// Define port for network traffic
const port = 3000;

const appRoot = path.join(__dirname, "..");

app.get("/", (res) => {
  res.sendFile(path.join(appRoot, "client", "index.html"));
});

// When user naviagates to localhost:3000/api/hello, send them this message
app.get("/api/hello", (res) => {
  res.send("Your server is running, notice the");
});

// Start the Express server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console once the server starts successfully.
  console.log(`Express app listening at http://localhost:${port}`);
});
