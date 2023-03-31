require('dotenv').config();
const mongoose = require('mongoose');


const user = new mongoose.Schema({
     
    first_name: { type:String, required: true},
    last_name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required:true}
    
});
 const User = mongoose.model('user', user);
 module.exports = User;

