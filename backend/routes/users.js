const router = require('express').Router();
let User = require('../models/userModel');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(error => res.status(400).json('Error:' + error));
});

router.route('/add').post((req, res) => {

    const given_name = req.body.given_name;
    const family_name = req.body.family_name;
    const nickname = req.body.nickname;
    const name = req.body.name;
    const picture = req.body.picture;
    const locale = req.body.locale;
    const updated_at = req.body.updated_at;
    const email = req.body.email;
    const email_verified = req.body.email_verified;
    const sub = req.body.sub;

    const newUser = new User({
        given_name,
        family_name,
        nickname,
        name,
        picture,
        locale,
        updated_at,
        email,
        email_verified,
        sub,
    });

    newUser.save()
        .then(() => res.json('User added.'))
        .catch(error => res.status(400).json('Error:' + error));
});

module.exports = router;