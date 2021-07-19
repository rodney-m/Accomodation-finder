const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/userModel');
const jwt = require('jsonwebtoken');

router.route('/signup').post((req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {

            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    const user = new User({
                        reg_number: req.body.reg_number,
                        email: req.body.email,
                        password: hash
                    });
                    user
                        .save()
                        .then(result => {
                            res.status(201).json({
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
        })
        .catch(err => {
            console.log(err);
        });

});

router.route('/login').post((req, res, next) => {
        User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length < 1) {
                    return res.status(401).json({
                        message: "Auth failed"
                    })
                }
                bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                    if (err) {
                        return res.status(401).json({
                            message: "Auth failed"
                        });
                    }
                    if (result) {
                        const token = jwt.sign({
                                email: user[0].email,
                                userId: user[0]._id
                            },
                            process.env.JWT_KEY, {
                                expiresIn: "1h"
                            });
                        return res.status(200).json({
                            message: "auth successful",
                            token: token
                        })
                    }
                })
            })
            .catch(err => {
                console.log(err);
            });
    })

module.exports = router;