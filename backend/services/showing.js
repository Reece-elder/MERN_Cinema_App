const {showingRepo} = require('../database')

class showingService {
    constructor(){
        this.repo = new showingRepo();
    }

    async getRecords(){
        try {
            return await this.repo.getAll();
        } catch(err){
            console.log(err);
        }
    };

    async createRecord(showing_data){
        try {
            return await this.repo.createRecord(showing_data);
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

module.exports = showingService