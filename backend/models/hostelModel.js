const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hostelSchema = new Schema({
    name: { type: String },
    beds_available: { type: Number},
    beds_reserved: { type: Number},
    beds_occupied: { type: Number}
});

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;