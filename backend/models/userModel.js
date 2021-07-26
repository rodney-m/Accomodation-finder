const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    reg_number: { type: String, unique: true },
    email: { type: String, unique: true },
    fullName: String,
    password: String
});

const user = mongoose.model('User', userSchema);

module.exports = user;