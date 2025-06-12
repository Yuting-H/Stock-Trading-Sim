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

app.get("/", (req, res) => {
  res.sendFile(path.join(appRoot, "client", "index.html"));
});

app.get("/scripts/bar-chart.js", (req, res) => {
  res.sendFile(path.join(appRoot, "client", "scripts/bar-chart.js"));
});

app.get("/scripts/wallet.js", (req, res) => {
  res.sendFile(path.join(appRoot, "client", "scripts/wallet.js"));
});

// for demo only
// :ticker is a wildcard
app.get("/api/demo/stocks/:ticker/latest", (req, res) => {
  let maxPrice = 100;
  let randPrice = Math.random() * maxPrice;

  const result = {
    price: randPrice,
  };

  res.status(200).json(result);
});

// Start the Express server and listen for incoming requests on the specified port.
app.listen(port, () => {
  // Log a message to the console once the server starts successfully.
  console.log(`Express app listening at http://localhost:${port}`);
});
