const express = require('express');
const cinema_app = require('./cinema_app')
const {databaseConnection} = require('./database');

const startServer = async() => {

    const app = express();

    await databaseConnection();

    await cinema_app(app);

    port = 5005

    app.listen(port, () => {
        console.log(`Running on port ${port}`);
    });
};

startServer();