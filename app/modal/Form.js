// models/Form.js
const mongoose = require('mongoose');

const formFieldSchema = new mongoose.Schema({
    type: { type: String, required: true },
    value: { type: String, default: "" },
    label: { type: String, default: "Title" }
}, { _id: true }); // Using default ObjectId for form fields

const formSchema = new mongoose.Schema({
    formTitle: { type: String, default: "Untitled Form" },
    formFields: [formFieldSchema]
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

module.exports = Form;
