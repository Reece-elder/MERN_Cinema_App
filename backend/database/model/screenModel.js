const mongoose = require('mongoose');

const schema = mongoose.Schema({
    screen_number: String,
    total_seats: Number,
    luxury_seats: Boolean,
    projector: String
});

const screenModel = mongoose.model('screen', schema);

module.exports = screenModel