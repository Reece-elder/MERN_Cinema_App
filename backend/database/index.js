module.exports = {
    databaseConnection: require("./db_connect"),
    filmRepo: require("./repo/filmRepo"),
    screenRepo: require("./repo/screenRepo"),
    showingRepo: require("./repo/showingRepo"),
    customerRepo: require("./repo/customerRepo"),
    ticketRepo: require("./repo/ticketRepo")
}