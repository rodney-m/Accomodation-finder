const router = require('express').Router();
let OffCampus = require('../models/hostelModel');

router.route('/').get((req, res) => {
    OffCampus.find()
        .then(houses => res.json(houses))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;