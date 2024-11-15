
const express = require('express');
const connectDB = require('./db');

const cors = require('cors');
const { createForm, getForms, getFormById, updateForm, deleteForm } = require('./app/controller/formController');
const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.post('/forms', createForm);
app.get('/forms', getForms);
app.get('/forms/:id', getFormById);
app.put('/forms/:id', updateForm);
app.delete('/forms/:id', deleteForm);


app.listen(5000, () => {
    console.log('Server is running ');
});
