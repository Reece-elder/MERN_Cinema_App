const { showingModel, filmModel, screenModel } = require("../model");

class showingRepo {
    
    async getAll(){
        try {
            return await showingModel.find().populate('showing_film').populate('showing_screen');
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
            const film = await filmModel.findById(data.showing_film)
            const screen = await screenModel.findById(data.showing_screen)
            if(film && screen){
                const showing = new showingModel(data);
                return await showing.save();
            }

        } catch (err){
            console.log(err);
        }
    }
}

module.exports = showingRepo;

