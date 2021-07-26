const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/userModel');
let Student = require('../models/studentModel');
const jwt = require('jsonwebtoken');

router.route('/signup').post((req, res, next) => {
    Student.findOne({ regNumber: req.body.reg_number })
        .then(student => {
            if (!student) {
                return res.status(404).json({
                    error: "Not found"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            reg_number: req.body.reg_number,
                            fullName: student.firstNames + " " + student.lastName,
                            email: student.email,
                            password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                res.status(200).json({
                                    message: 'User created.'
                                });
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                })
                            });
                    }
                });
            }
        })
        .catch(err => {
            console.log(err);
        });

});

router.post('/login', (req, res, next) => {
    // console.log(req.body);
    User.findOne({ reg_number: req.body.reg_number })
        .then(user => {
            // console.log(user)
            if (!user) {
                return res.status(401).json({
                    message: "User not found"
                })
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Gerara here"
                    });
                }
                if (result) {
                    const token = jwt.sign({
                            email: user.email,
                            userId: user._id.toString()
                        },
                        process.env.JWT_KEY, {
                            expiresIn: "1h"
                        });

                    Student.findOne({ email: user.email })
                        .then(student => {
                            const details = {
                                fullName: student.firstNames + " " + student.lastName,
                                email: student.email,
                                paidTuition: student.paidTuition,
                                year: student.year,
                                dept: student.dept,
                                phoneNumber: student.phoneNumber
                            };
                            return res.status(200).send({
                                message: "Successful login!",
                                token: token,
                                details
                            })
                        })
                }
            })
        })
        .catch(err => {
            console.log(err);
        });
})

module.exports = router;