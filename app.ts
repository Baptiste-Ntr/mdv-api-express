const express = require('express')

const app = express()

const driver = require('./routes/driver.ts')
const team = require('./routes/team.ts')
const driverNumber = require('./routes/drivernumber.ts')
const driverInfo = require('./routes/driverInfo.ts')

const port = 3000

app.get('/', (req, res) => {
    res.send('/driver to get driver data, /team to get team data')
})

// get driver / team 
driver(app)
team(app)
driverNumber(app)
driverInfo(app)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

