const mongoose = require('mongoose');

const schema = mongoose.Schema({
    showing_film: { type: mongoose.Schema.Types.ObjectId, ref: 'film', required: true },
    showing_screen: { type: mongoose.Schema.Types.ObjectId, ref: 'screen', required: true },
    time_showing: Date
});

const showingModel = mongoose.model('showing', schema);

module.exports = showingModel