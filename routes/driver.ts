
module.exports = function (app) {
    const path = require('path')

    app.get('/driver', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'data', 'driver.json'))
    })
}