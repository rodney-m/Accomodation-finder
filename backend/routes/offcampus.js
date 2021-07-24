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
    const phoneNumber = req.body.phone_number;
    const gender = req.body.gender;
    const availableBeds = Number(req.body.availableBeds);
    const availableBathrooms = Number(req.body.availableBathrooms);
    const currentRating = Number(req.body.currentRating);
    const price = req.body.price;
    const curfew = req.body.curfew;
    const amenities = req.body.amenities;
    const description = req.body.description;
    const images = req.body.images;
    const approved = req.body.approved;

    const newHouse = new House({
        owner,
        address,
        phoneNumber,
        gender,
        availableBeds,
        availableBathrooms,
        currentRating,
        price,
        curfew,
        amenities,
        description,
        images,
        approved
    });

    newHouse.save()
        .then(() => res.json('House added.'))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;