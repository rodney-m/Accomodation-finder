const mongoose = require('mongoose');

const ownerSchema = new Schema({
    first_name: String,
    Last_name: String,
    Address:  String,
    Phone_number:Number,

  


});

const ownerSchema = mongoose.model('Owner', ownerSchema);

module.exports = ownerSchema;