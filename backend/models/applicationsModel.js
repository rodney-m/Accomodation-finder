const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    regNumber: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    year: { type: String, required: true },
    roomNumber: { type: Number, required: true },
    department: { type: String, required: true },
    address: { type: String, required: true },
}, {
    timestamps: true,
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;