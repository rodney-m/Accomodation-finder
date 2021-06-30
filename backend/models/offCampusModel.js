const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offCampusSchema = new Schema({
    owner: String,
    address: String,
    phone_number: String,
    gender: String,
    beds: Number,
    cost: String,
    amenities: String,
    images: String,
    approved: Boolean
});

const offCampus = mongoose.model('OffCampus', offCampusSchema);

module.exports = offCampus;