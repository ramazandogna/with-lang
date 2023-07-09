const mongoose = require('mongoose');

// Kullanıcı şema tanımı
const userSchema = new mongoose.Schema({
   fullName: {
      type: String,
      required: true,
   },
   email: {
      type: String,
      required: true,
      unique: true,
   },
   age: {
      type: Number,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
});

// Kullanıcı modeli
const User = mongoose.model('User', userSchema);

module.exports = User;
