const mongoose = require('mongoose');

const financeSchema = new Schema({
    reg_number: String,
    first_name: String,
    last_name: String,
    registration_status: String,
});

const Finance = mongoose.model('Finance', financeSchema);

module.exports = Finance;