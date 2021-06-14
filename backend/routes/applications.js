const router = require('express').Router();
let Application = require('../models/applicationsModel');

router.route('/').get((req, res) => {
    Application.find()
        .then(applications => res.json(applications))
        .catch(error => res.status(400).json('Error:' + error));
});

router.route('/add').post((req, res) => {
    const regNumber = req.body.regNumber;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const year = req.body.year;
    const roomNumber = Number(req.body.roomNumber);
    const department = req.body.department;
    const address = req.body.address;

    const newApplication = new Application({
        regNumber,
        firstname,
        lastname,
        year,
        roomNumber,
        department,
        address
    });

    newApplication.save()
        .then(() => res.json('Application added.'))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;