const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    regNumber: String,
    firstNames: String,
    lastName: String,
    address: String,
    year: String,
    dept: String,
    paidTuition: Number
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;