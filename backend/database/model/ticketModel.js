const mongoose = require('mongoose');

const schema = mongoose.Schema({
    showing_id : {type: mongoose.Schema.Types.ObjectId, ref: 'showing', required: true},
    customer_id: {type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true},
    number_tickets: {type: Number, required: true},
    booking_time: {type: Date, default: Date.now}
});

const ticketModel = mongoose.model('ticket', schema);

module.exports = ticketModel