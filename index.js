// server.js
const express = require('express');
const connectDB = require('./db');

const cors = require('cors');
const { createForm, getForms, getFormById, updateForm, deleteForm } = require('./app/controller/formController');

const app = express();

// Connect to MongoDB (local)
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies




// Routes
app.post('/forms', createForm); // Create a new form
app.get('/forms', getForms); // Get all forms
app.get('/forms/:id', getFormById); // Get a single form by ID
app.put('/forms/:id', updateForm); // Update a form by ID
app.delete('/forms/:id', deleteForm); // Delete a form by ID

// Set up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
