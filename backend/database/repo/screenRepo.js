const { screenModel } = require("../model");

class screenRepo {
    
    async getAll(){
        try {
            return await screenModel.find()
        } catch(err){
            console.log(err);
        }

    }

    async createRecord(data){
        try {
            const screen = new screenModel(data);
            return await screen.save();
        } catch (err){
            console.log(err);
        }
    }
}

module.exports = screenRepo;

