const {screenRepo} = require('../database')

class screenService {
    constructor(){
        this.repo = new screenRepo();
    }

    async getRecords(){
        try {
            return await this.repo.getAll();
        } catch(err){
            console.log(err);
        }
    };

    async createRecord(screen_data){
        try {
            return await this.repo.createRecord(screen_data);
        } catch (err){
            console.log(err);
        }
    }

};

module.exports = screenService