const router = require('express').Router();
let Hostel = require('../models/hostelModel');

router.route('/').get((req, res) => {
    Hostel.find()
        .then(hostels => res.json(hostels))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;