
const Form = require('../modal/Form');

const createForm = async (req, res) => {
    try {
        const { formTitle, formFields } = req.body;
        
        const newForm = new Form({
            formTitle,
            formFields,
        });

        const savedForm = await newForm.save();
        res.status(201).json(savedForm);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error saving form", error: err });
    }
};

const getForms = async (req, res) => {
    try {
        const forms = await Form.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getFormById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedForm = await Form.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.status(200).json(updatedForm);
    } catch (error) {
        res.status(500).json({ message: 'Error updating form', error });
    }
};

const updateForm = async (req, res) => {
    try {
        const form = await Form.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!form) return res.status(404).json({ error: "Form not found" });
        res.status(200).json(form);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteForm = async (req, res) => {
    try {
        const form = await Form.findByIdAndDelete(req.params.id);
        if (!form) return res.status(404).json({ error: "Form not found" });
        res.status(200).json({ message: "Form deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    updateForm,
    deleteForm,
    createForm,
    getForms,
    getFormById

}
