const mongoose = require('mongoose');

const userSchema = new Schema({
    given_name: String,
    family_name: String,
    nickname: String,
    name: String,

    username: {
        type: String,
        required: true,
        unique: true,
    },


    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;