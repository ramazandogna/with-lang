const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

userSchema.methods.comparePassword = async function (password) {
   try {
      const isMatch = await bcrypt.compare(password, this.password);
      return isMatch;
   } catch (error) {
      throw error;
   }
};

// Kullanıcı modeli
const User = mongoose.model('User', userSchema);

module.exports = User;
