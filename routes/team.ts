
module.exports = function (app) {

    const path = require('path')

    app.get('/team', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'data', 'team.json'))
    })
}