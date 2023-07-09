const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Kullanıcı modeli

// Kayıt ol endpoint'i
router.post('/register', async (req, res) => {
   const { fullName, email, age, password } = req.body;

   try {
      // Yeni bir kullanıcı oluştur
      const newUser = new User({
         fullName,
         email,
         age,
         password,
      });

      // Kullanıcıyı kaydet
      const savedUser = await newUser.save();

      // Kayıt işlemi başarılı, başarılı mesajı ve kaydedilen kullanıcıyı dön
      return res.status(201).json({
         message: 'Kayıt başarılı!',
         user: savedUser,
      });
   } catch (error) {
      if (
         error.code === 11000 &&
         error.keyPattern &&
         error.keyPattern.email === 1
      ) {
         // Aynı e-posta ile kayıtlı kullanıcı var, hata dön
         return res.status(409).json({
            error: 'Bu e-posta ile zaten kayıt olunmuş.',
         });
      }
      // Diğer hata durumlarında hata dön
      return res.status(500).json({
         error: 'Kayıt sırasında bir hata oluştu.',
      });
   }
});

module.exports = router;
