const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
   fullName: String,
   age: Number,
   email: { type: String, unique: true },
   password: String,
});

module.exports = mongoose.model('UserInfo', userDetailsSchema);
