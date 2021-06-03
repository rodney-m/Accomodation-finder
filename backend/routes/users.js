const router = require('express').Router();
let User = require('../models/userModel');

router.route('/').get((req, res))