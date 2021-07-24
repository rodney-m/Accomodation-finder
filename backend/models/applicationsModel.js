const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    reg_no: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    year: { type: String, required: true },
    department: { type: String, required: true },
    hostel: { type: Number },
    room_no: { type: Number },
    phone: { type: String },
    email: { type: String },
    message: { type: String },
    status: { type: Boolean }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;