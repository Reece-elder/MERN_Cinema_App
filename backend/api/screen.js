const screenService = require('../services/screen')

module.exports = (app) => {

    const service = new screenService()
    service.getRecordsIds

    // Get all screens
    app.get('/screen', async(req,res,next) => {
        try {
            const data = await service.getRecords()
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }

    });

    // Create Screen
    app.post("/screen", async(req, res, next) => {
        try {
            const data = req.body;
            const response = await service.createRecord(data)
            return res.json(response)
            
        } catch (err) {

        }
    });

}