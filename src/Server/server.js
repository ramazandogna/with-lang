const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
const cors = require('cors');
app.use(cors());
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const JWT_SECRET = '12312h3j1h3j12h312u312j3n12j3h123b12j3123j1b23h12312b3b123';

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
const userModel = new User();

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

app.post('/login-user', async (req, res) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email });

   if (!user) {
      return res.send({
         error: 'User not found',
      });
   }
   if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({}, JWT_SECRET);
      if (res.status(201)) {
         return res.json({ status: 'ok', data: token });
      } else {
         return res.json({ status: 'error' });
      }
   }

   res.json({ status: 'error', error: 'Invalid password' });
});

app.listen(8000, () => {
   console.log('Server Starter');
});
