const router = require('express').Router();
const bcrypt = require('bcrypt');
let User = require('../models/userModel');

router.route('/signup').post((req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user) {
                return res.status(409).json({
                    message: 'user exists'
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
            }
        })
        .catch();

})

router.route('/login').post((res, req, next) => {
        User.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length < 1) {
                    return res.status(401).json({
                        message: "Auth failed"
                    })
                }
            })
            .catch();
    })
    // router.route('/add').post((req, res) => {

//     const given_name = req.body.given_name;
//     const family_name = req.body.family_name;
//     const nickname = req.body.nickname;
//     const name = req.body.name;
//     const picture = req.body.picture;
//     const locale = req.body.locale;
//     const updated_at = req.body.updated_at;
//     const email = req.body.email;
//     const email_verified = req.body.email_verified;
//     const sub = req.body.sub;

//     const newUser = new User({
//         given_name,
//         family_name,
//         nickname,
//         name,
//         picture,
//         locale,
//         updated_at,
//         email,
//         email_verified,
//         sub,
//     });

//     newUser.save()
//         .then(() => res.json('User added.'))
//         .catch(error => res.status(400).json('Error:' + error));
// });

module.exports = router;