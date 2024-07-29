const express = require('express');
const app = express();
const port = 2003;

// Middleware to parse URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON payloads
app.use(express.json());

// Import routes from route.js
const employeeRoutes = require('./route');

// Use the imported routes
app.use('/', employeeRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
