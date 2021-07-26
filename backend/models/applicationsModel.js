const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    regNumber: { type: String, required: true },
    fullName: { type: String },
    year: { type: String },
    department: { type: String },
    hostel: { type: Number },
    roomNumber: { type: Number },
    phone: { type: String },
    email: { type: String },
    message: { type: String },
    status: { type: Boolean }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;