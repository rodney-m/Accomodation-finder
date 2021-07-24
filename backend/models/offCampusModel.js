const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const offCampusSchema = new Schema({
    owner: String,
    address: String,
    phoneNumber: String,
    gender: String,
    availableBeds: Number,
    availableBathRooms: Number,
    price: String,
    amenities: String,
    description: String,
    images: String,
    currentRating: Number,
    curfew: String,
    approved: Boolean
});

const offCampus = mongoose.model('OffCampus', offCampusSchema);

module.exports = offCampus;