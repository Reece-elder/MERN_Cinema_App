const { filmModel } = require("../model");

class filmRepo {
    
    async getAll(){
        try {
            return await filmModel.find()
        } catch(err){
            console.log(err);
        }

    }

    async getOne(id) {
        try {
            return await filmModel.findById(id)
        } catch (err) {
            console.log(err);
        }
    }

    async createRecord(data){
        try {
            const film_model = new filmModel(data);
            const result = await film_model.save();
            return result
        } catch (err){
            console.log(err);
        }
    }
}

module.exports = filmRepo;

