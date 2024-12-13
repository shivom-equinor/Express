const express = require("express");
const cors = require("cors");

// Create an instance of the Express app
const app = express();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Middleware (optional, add here if needed)

// Routes

app.get('/', (req, res) => {
    res.send('Hello,Azure! This is a Node.js application.');
  });

  app.get('/test2', (req, res) => {
    res.send('Hello, This is a Node.js application route 2.');
  });

app.get("/test", (req, res) => {
  try {
    // Simulate data fetching or processing logic
    const responseData = { message: "Hello, this is your JSON response!" };

    // Send a JSON response if everything goes well
    res.status(200).json(responseData);
  } catch (error) {
    // Handle any errors that occur during processing
    console.error("Error occurred:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

// Port number
const PORT = process.env.PORT || 8090;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});