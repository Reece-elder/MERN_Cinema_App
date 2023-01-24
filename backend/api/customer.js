const customerService = require('../services/customer')

module.exports = (app) => {

    const service = new customerService()

    // Get all customers
    app.get('/customer', async(req,res,next) => {
        try {
            const data = await service.getRecords()
            res.status(201).json(data)
        } catch (err) {
            next(err)
        }

    });

    app.get("/customer/:id", async(req, res, next) => {
        try {
            const data = await service.getRecord(req.params.id)
            res.status(201).json(data)
        } catch (err) {
            console.log(err);
        }
    })

    app.post("/customer", async(req, res, next) => {

        try {
            const data = req.body;
            const response = await service.createRecord(data)
            return res.json(response)
            
        } catch (err) {

        }
    })

}