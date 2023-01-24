const {ticketRepo} = require('../database')

class ticketService {
    constructor(){
        this.repo = new ticketRepo();
    }

    async getRecords(){
        try {
            return await this.repo.getAll();
        } catch(err){
            console.log(err);
        }
    };

    async createRecord(ticket_data){
        try {
            return await this.repo.createRecord(ticket_data);
        } catch (err){
            console.log(err);
        }
    }

    async getRecord(id){
        try {
            return await this.repo.getOne(id);
        } catch (err) {
            console.log(err);
        }
    }

};

module.exports = ticketService