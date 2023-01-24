const ticketService = require('../services/ticket')

module.exports = (app) => {

    const service = new ticketService()

    // Get all screens
    app.get('/ticket', async(req,res,next) => {
        try {
            const data = await service.getRecords()
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }

    });

    // Create Screen
    app.post("/ticket", async(req, res, next) => {
        try {
            const data = req.body;
            const response = await service.createRecord(data)
            return res.json(response)
            
        } catch (err) {

        }
    });

    // Get one showing
    app.get("/ticket/:id", async(req, res, next) => {
        try {
            const data = await service.getRecord(req.params.id);
            res.status(201).json(data)
        } catch(err){
            console.log(err);
        }
    })

}