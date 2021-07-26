const router = require('express').Router();
let Student = require('../models/studentModel');

router.route('/').get((req, res) => {
    Student.find()
        .then(students => res.json(students))
        .catch(error => res.status(400).json('Error:' + error));
});

router.route('/add').post((req, res) => {
    const regNumber = req.body.regNumber;
    const firstNames = req.body.firstNames;
    const lastName = req.body.lastName;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const year = req.body.year;
    const dept = req.body.dept;
    const paidTuition = Number(req.body.paidTuition);

    const newStudent = new Student({
        regNumber,
        firstNames,
        lastName,
        address,
        phoneNumber,
        email,
        year,
        dept,
        paidTuition
    });

    newStudent.save()
        .then(() => res.json('Student added.'))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;