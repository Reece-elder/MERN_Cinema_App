const showingService = require('../services/showing')

module.exports = (app) => {

    const service = new showingService()

    // Get all screens
    app.get('/showing', async(req,res,next) => {
        try {
            const data = await service.getRecords()
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }

    });

    // Create Screen
    app.post("/showing", async(req, res, next) => {
        try {
            const data = req.body;
            const response = await service.createRecord(data)
            return res.json(response)
            
        } catch (err) {

        }
    });

    // Get one showing
    app.get("/showing/:id", async(req, res, next) => {
        try {
            const data = await service.getRecord(req.params.id);
            res.status(201).json(data)
        } catch(err){
            console.log(err);
        }
    })

}