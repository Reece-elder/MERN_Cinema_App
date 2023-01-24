const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    age: Number, 
    email: String,
    password: String
});

const customerModel = mongoose.model('customer', schema);

module.exports = customerModel