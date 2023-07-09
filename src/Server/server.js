const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require('cors');
app.use(cors());
const bcrypt = require('bcryptjs');

mongoose
   .connect(
      'mongodb+srv://withlang:withlang123@withlang.rtihuni.mongodb.net/',
      {
         useNewUrlParser: true,
      }
   )
   .then(() => {
      console.log('Connected to database');
   })
   .catch((e) => console.log(e));

const User = require('./userDetail');

app.post('/register', async (req, res) => {
   const { fullName, email, password, age } = req.body;

   const encryptedPassword = await bcrypt.hash(password, 10);
   try {
      const oldUser = await User.findOne({ email });

      if (oldUser) {
         return res.send({
            error: 'User exist',
         });
      }
      await User.create({
         fullName,
         email,
         password: encryptedPassword,
         age,
      });
      res.send({ status: 'ok' });
   } catch (error) {
      res.send({ status: 'error' });
   }
});

app.listen(8000, () => {
   console.log('Server Starter');
});
