var Lands = require('../models/landModel');

var controller = {};

//controller

module.exports = function(app){
    app.get("/api/setupLands", (req, res) => {
        // setup seed data
        var seedLands = [
            {
                area: "NTP",
                block: "B1",
                portion: "31",
                owner: "Minh Hong",
                ownerPhone: "0905562357",
                referrer: null,
                referrerPhone: null,
                depositDate: null,
                price: "2 ty 250",
                note: "Tu co",
                isSold: false,
                soldDate: null
            },
            {
                area: "NHX",
                block: "B2",
                portion: "150",
                owner: "Van Tuyen",
                ownerPhone: "0983837250",
                referrer: null,
                referrerPhone: null,
                depositDate: null,
                price: "2 ty 9",
                note: "Moi mua",
                isSold: false,
                soldDate: null
            }
        ];

        Lands.create(seedLands, (err, results) => {
            res.send(results);
        })
    });
}