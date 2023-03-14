require('dotenv').config();
const mongoose = require('mongoose');

const order = new mongoose.Schema({
    order_name: {type:String, required: true, default:'test_order'},
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer"}, // ** add reference here to Customer collection **
});

const Order = mongoose.model('Order', order);
module.exports = Order;