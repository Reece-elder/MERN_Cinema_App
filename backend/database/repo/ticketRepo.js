const {ticketModel, customerModel} = require("../model");

class ticketRepo {
    
    async getAll(){
        try {
            return await ticketModel.find().populate('showing_id').populate('customer_id');
            // return data
        } catch(err){
            console.log(err);
        }

    }

    async getOne(id) {
        try {
            return await showingModel.findById(id).populate('showing_film').populate('showing_screen');
        } catch(err){
            console.log(err);
        }
    }

    async createRecord(data){

        try {
            // const film = await filmModel.findById(data.showing_film)
            // const screen = await screenModel.findById(data.showing_screen)
            // if(film && screen){
                const showing = new ticketModel(data);
                return await showing.save();
            // }

        } catch (err){
            console.log(err);
        }
    }
}

module.exports = ticketRepo;

