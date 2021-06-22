const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    reg_no: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    year: { type: String, required: true },
    hostel: { type: Number, required: true },
    room_no: { type: Number, required: true },
    department: { type: String, required: true },
    status: { type: Boolean}
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;