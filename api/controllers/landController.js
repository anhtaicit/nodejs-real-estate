var Lands = require('../models/landModel');

var controller = {};

controller.getAll = async (req, res) => {
    try {
        const lands =  await Lands.getAll();
        res.send(lands);
    } catch (error) {
        console.log(error);
        res.send('Got error in getAll');
    }
};

controller.getLand = async (req, res) => {
    let _id = req.params.id;
    try {
        const lands =  await Lands.getLand(_id);
        res.send(lands);
    } catch (error) {
        console.log(error);
        res.send('Got error in getLand');
    }
};

controller.addLand = async (req, res) => {
    let landToAdd = {
        area: req.body.area,
        block: req.body.block,
        portion: req.body.portion,
        owner: req.body.owner,
        ownerPhone: req.body.ownerPhone,
        referrer: req.body.referrer,
        referrerPhone: req.body.referrerPhone,
        depositDate: req.body.depositDate,
        price: req.body.price,
        note: req.body.note,
        isSold: req.body.isSold,
        soldDate: req.body.soldDate,
        addedDate: Date.now()
    };
    try {
        const savedLand =  await Lands.addLand(landToAdd);
        res.send(savedLand);
    } catch (error) {
        console.log(error);
        res.send('Got error in addLand');
    }
};

controller.editLand = async (req, res) => {
    let _id = req.body._id;
    let landToUpdate = {
        area: req.body.area,
        block: req.body.block,
        portion: req.body.portion,
        owner: req.body.owner,
        ownerPhone: req.body.ownerPhone,
        referrer: req.body.referrer,
        referrerPhone: req.body.referrerPhone,
        depositDate: req.body.depositDate,
        price: req.body.price,
        note: req.body.note,
        isSold: req.body.isSold,
        soldDate: req.body.soldDate
    };
    if (!req.body._id) {
        return res.status(500).send("ID is required");
    }
    else {
        try {
            const updatedLand =  await Lands.editLand(_id, landToUpdate);
            res.send(updatedLand);
        } catch (error) {
            console.log(error);
            res.send('Got error in editLand');
        }
    }
};

controller.deleteLand = async (req, res) => {
    let _id = req.params.id;
    try {
        const lands =  await Lands.deleteLand(_id);
        res.send(lands);
    } catch (error) {
        console.log(error);
        res.send('Got error in deleteLand');
    }
};

module.exports = controller;