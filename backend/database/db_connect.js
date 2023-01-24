const mongoose = require('mongoose')
const {DB_URL} = require('../config')

module.exports = async() => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true
        });
        console.log("Connected to DB :)");
    } catch (err) {
        console.log(err);
    }
};
