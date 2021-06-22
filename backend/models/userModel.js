const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: String,
    lastname: String,
    reg_number: String,
    email:String  
});

const user = mongoose.model('User', userSchema);

module.exports = user;