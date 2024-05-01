const {schema, model, default: mongoose}= require('mongoose');
const { required } = require('../validators/auth-validators');

const contactSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    message: {type: String, required: true},
});

const Contact = new model("Contact", contactSchema);
module.exports = Contact;