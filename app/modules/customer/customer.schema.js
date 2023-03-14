require('dotenv').config();
const mongoose = require('mongoose');

const customer = new mongoose.Schema({
    name: { type: String, required: true },
    phone_number: { type: String, required: true },
    email: { type: String, required: true }
});

const Customer = mongoose.model('Customer', customer);
module.exports = Customer;