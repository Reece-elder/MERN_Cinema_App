const filmService = require('../services/film')

module.exports = (app) => {

    const service = new filmService()

    // Get all films
    app.get('/film', async(req,res,next) => {
        console.log("Triggered");

        try {
            const data = await service.getRecords()
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }
    });

    app.get("/film/:id", async(req, res, next) => {
        try {
            const data = await service.getRecord(req.params.id)
            res.status(201).json(data)
        } catch (err) {
            console.log(err);
        }
    })

    app.post("/film", async(req, res, next) => {

        try {
            const data = req.body;
            const response = await service.createRecord(data)
            return res.json(response)
            
        } catch (err) {

        }
    })

}