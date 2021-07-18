const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// first_name: String,
//lastname: String,

const userSchema = new Schema({

    reg_number: { type: String, unique: true },
    email: { type: String, unique: true },
    password: String
});

const user = mongoose.model('User', userSchema);

module.exports = user;