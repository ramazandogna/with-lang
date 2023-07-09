const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Kullanıcı modeli
require('dotenv').config();

const secretKey = process.env.JWT_SECRET_KEY;

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

const jwt = require('jsonwebtoken');

// Giriş yap endpoint'i
router.post('/login', async (req, res) => {
   try {
      const { email, password } = req.body;

      // Kullanıcının doğrulanması
      const user = await User.findOne({ email });

      if (!user) {
         return res.status(401).json({
            error: 'Geçersiz e-posta veya şifre.',
         });
      }

      // Şifrenin doğrulanması
      const isMatch = await user.comparePassword(password);

      if (!isMatch) {
         return res.status(401).json({
            error: 'Geçersiz e-posta veya şifre.',
         });
      }

      // JWT oluşturma
      const token = jwt.sign(
         { userId: user._id, email: user.email },
         secretKey,
         { expiresIn: '1h' }
      );

      return res.status(200).json({
         message: 'Giriş başarılı!',
         token: token,
      });
   } catch (error) {
      return res.status(500).json({
         error: 'Giriş sırasında bir hata oluştu.',
      });
   }
});

module.exports = router;
