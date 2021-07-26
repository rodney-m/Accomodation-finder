const router = require('express').Router();
const bcrypt = require('bcrypt');
let Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

router.route('/add').post((req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            const newAdmin = new Admin({
                email: email,
                password: hash
            });

            newAdmin.save()
                .then(() => res.json('Admin added.'))
                .catch(error => res.status(400).json('Error:' + error));
        }
    })
});

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