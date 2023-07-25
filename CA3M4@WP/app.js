const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Create an Express.js app
const app = express();

// Middleware for parsing request bodies
app.use(bodyParser.json());

// Define a user schema for MongoDB
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create a user model from the schema
const User = mongoose.model('User', userSchema);

// Connect to the MongoDB database
mongoose.connect('mongodb://0.0.0.0:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

// Route handler for POST /users
app.post('/users', (req, res) => {
  // Extract user data from the request body
  const { name, email, password } = req.body;

  // Validate required fields
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a new user
  const user = new User({ name, email, password });

  // Save the user data to the database
  user.save()
    .then((savedUser) => {
      // Return success response with the saved user data
      res.status(201).json(savedUser);
    })
    .catch((error) => {
      // Return error response if there is an issue saving the data
      res.status(500).json({ error: 'Failed to save user data to the database' });
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});