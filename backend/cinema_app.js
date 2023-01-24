const express = require('express');
const cors = require('cors')
const {film, screen, showing, ticket, customer} = require('./api');

module.exports = async (app) => {
    app.use(express.json())
    app.use(cors())

    // Adding API
    film(app);
    screen(app);
    showing(app);
    customer(app);
    ticket(app);

    console.log("Hello world");

}