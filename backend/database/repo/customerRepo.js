const { customerModel } = require("../model");

class customerRepo {
    
    async getAll(){
        try {
            return await customerModel.find()
        } catch(err){
            console.log(err);
        }
    }

    async getOne(id){
        try {
            return await customerModel.findById(id)
        } catch(err){
            console.log(err);
        }

    }

    async createRecord(data){
        try {
            const customer_model = new customerModel(data);
            const result = await customer_model.save();
            return result
        } catch (err){
            console.log(err);
        }
    }
}

module.exports = customerRepo;

