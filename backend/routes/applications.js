const router = require('express').Router();
let Application = require('../models/applicationsModel');

router.route('/').get((req, res) => {
    Application.find()
        .then(applications => res.json(applications))
        .catch(error => res.status(400).json('Error:' + error));
});

router.route('/oncampus').post((req, res) => {
    const regNumber = req.body.regNumber;
    const fullName = req.body.fullName;
    const year = req.body.year;
    const department = req.body.department;
    const hostel = req.body.hostel;
    const roomNumber = req.body.roomNumber;
    const phone = req.body.year;
    const email = req.body.email;
    const message = req.body.message;
    const status = req.body.status

    const newApplication = new Application({
        regNumber,
        fullName,
        year,
        department,
        hostel,
        roomNumber,
        phone,
        email,
        message,
        status
    });

    newApplication.save()
        .then(() => res.json('Application added.'))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;