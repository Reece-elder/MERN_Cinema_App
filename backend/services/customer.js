const {customerRepo} = require('../database')

class customerService {
    constructor(){
        this.repo = new customerRepo();
    }

    async getRecords(){
        try {
            return await this.repo.getAll();
        } catch(err){
            console.log(err);
        }
    };

    async createRecord(customer_data){
        try {
            return await this.repo.createRecord(customer_data);
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

module.exports = customerService