const mongoose = require('mongoose');

const schema = mongoose.Schema({
    title: String,
    runtime: Number,
    genre: String,
    rating: String,
    cast: [{
        type: String
    }],
    description: String,
    poster_url: String
});

const filmModel = mongoose.model('film', schema);

module.exports = filmModel