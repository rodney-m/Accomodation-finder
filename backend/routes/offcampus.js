const router = require('express').Router();
let House = require('../models/offCampusModel');

router.route('/').get((req, res) => {
    House.find()
        .then(houses => res.json(houses))
        .catch(error => res.status(400).json('Error:' + error));
});

router.route('/add').post((req, res) => {
    const owner = req.body.owner;
    const address = req.body.address;
    const phone_number = req.body.phone_number;
    const gender = req.body.gender;
    const beds = Number(req.body.beds);
    const cost = req.body.cost;
    const amenities = req.body.amenities;
    const images = req.body.images;
    const approved = req.body.approved;

    const newHouse = new House({
        owner,
        address,
        phone_number,
        gender,
        beds,
        cost,
        amenities,
        images,
        approved
    });

    newHouse.save()
        .then(() => res.json('House added.'))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;