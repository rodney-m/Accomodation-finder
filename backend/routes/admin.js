const router = require('express').Router();
const bcrypt = require('bcrypt');
let Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res, next) => {
    Admin.findOne({ email: req.body.email })
        .then(admin => {
            if (!admin) {
                return res.status(401).json({
                    message: "Account not found!"
                })
            }
            bcrypt.compare(req.body.password, admin.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Gerara here"
                    });
                }
                if (result) {
                    const token = jwt.sign({
                            email: admin.email,
                            Id: admin._id.toString()
                        },
                        process.env.JWT_KEY, {
                            expiresIn: "1h"
                        });
                    return res.status(200).json({
                        message: "Successful login!",
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