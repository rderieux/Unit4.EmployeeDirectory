// Import express and create the express app
const express = require("express");
const app = express();

const PORT = 3000;

// Middleware goes here

// Tell the app to start listening for requests
app.listen(PORT, () => {
  console.log(`Listening on port #${PORT}`);
});
