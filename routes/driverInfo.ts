import { Application, Request, Response } from 'express'


module.exports = function (app: Application) {

    const fs = require('fs')
    const request = require('request')
    const path = require('path')

    app.get('/driverinfo/:driverName', (req: Request, res: Response) => {
        let driverName: string = req.params.driverName;
        driverName = driverName.charAt(0).toUpperCase() + driverName.slice(1);

        fs.readFile(path.join(__dirname, '..', 'data', 'driver.json'), 'utf8', (error, data) => {
            if (error) {
                res.status(500).send({ error: error })
            } else {
                const driversData = JSON.parse(data)
                const drivers = driversData.drivers
                const driverInfo = drivers.find((driver) => driver.lastname === driverName)

                if (driverInfo) {
                    request(`http://ergast.com/api/f1/drivers/${driverName}.json`, (error: any, response: any, body: any) => {
                        if (!error && response.statusCode === 200) {
                            const drivers = JSON.parse(body)
                            // res.send(drivers)
                            const permanentNumber = drivers.MRData.DriverTable.Drivers[0].permanentNumber
                            res.send({
                                permanentNumber: permanentNumber,
                                driverLastName: driverInfo.lastname,
                                driverFirstName: driverInfo.firstname,
                                driverTeam: driverInfo.team
                            })
                        } else {
                            res.status(500).send({ error: error })
                        }
                    })
                } else {
                    res.status(404).send({ error: 'Driver not found' })
                }
            }
        })
    })
}