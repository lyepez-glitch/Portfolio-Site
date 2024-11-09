/// models/Note.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String },
    number: { type: String },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;