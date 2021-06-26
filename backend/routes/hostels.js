const router = require('express').Router();
let Hostel = require('../models/hostelModel');

router.route('/').get((req, res) => {
    Hostel.find()
        .then(hostels => res.json(hostels))
        .catch(error => res.status(400).json('Error:' + error));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const beds_available = req.body.beds_available;
    const beds_reserved = req.body.beds_reserved;
    const beds_occupied = req.body.beds_occupied;

    const newHostel = new Hostel({
        name,
        beds_available,
        beds_reserved,
        beds_occupied
    });

    newHostel.save()
        .then(() => res.json('Hostel added.'))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;