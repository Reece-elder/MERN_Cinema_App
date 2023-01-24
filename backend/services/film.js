const {filmRepo} = require('../database')

class filmService {
    constructor(){
        this.repo = new filmRepo();
    }

    async getRecords(){
        try {
            return await this.repo.getAll();
        } catch(err){
            console.log(err);
        }
    };

    async getRecord(id){
        try {
            return await this.repo.getOne(id);
        } catch (err) {
            console.log(err);
        }
    }

    async createRecord(film_data){
        try {
            return await this.repo.createRecord(film_data);
        } catch (err){
            console.log(err);
        }
    }

};

module.exports = filmService