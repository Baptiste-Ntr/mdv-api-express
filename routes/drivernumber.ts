module.exports = function (app) {

    const request = require('request')

    app.get('/drivernumber/:driverName', (req, res) => {

        const driverName = req.params.driverName

        request(`http://ergast.com/api/f1/drivers/${driverName}.json`, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                const drivers = JSON.parse(body)
                // res.send(drivers)
                const permanentNumber = drivers.MRData.DriverTable.Drivers[0].permanentNumber
                res.send({ permanentNumber: permanentNumber })
            } else {
                res.status(500).send({ error: error })
            }
        })
    })
}