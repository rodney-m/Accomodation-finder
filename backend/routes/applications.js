const router = require('express').Router();
let Application = require('../models/applicationsModel');

router.route('/').get((req, res) => {
    Application.find()
        .then(applications => res.json(applications))
        .catch(error => res.status(400).json('Error:' + error));
});

router.route('/add').post((req, res) => {
    const reg_no = req.body.reg_no;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const year = req.body.year;
    const hostel = Number(req.body.hostel);
    const room_no = Number(req.body.room_no);
    const department = req.body.department;
    const status = req.body.status;

    const newApplication = new Application({
        reg_no,
        fname,
        lname,
        year,
        hostel,
        room_no,
        department,
        status
    });

    newApplication.save()
        .then(() => res.json('Application added.'))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;