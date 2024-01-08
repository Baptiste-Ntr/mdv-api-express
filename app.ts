const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('/driver to get driver data, /team to get team data')
})

app.get('/driver', (req, res) => {
    res.sendFile(__dirname + '/data/driver.json')
})

app.get('/team', (req, res) => {
    res.sendFile(__dirname + '/data/team.json')
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})

