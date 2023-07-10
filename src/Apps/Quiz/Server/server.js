import { config } from 'dotenv';
import connect from './database/conn.js';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import router from './router/route.js';
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

app.use('/api', router);

app.get('/', (req, res) => {
   res.json('Get Request');
});

connect()
   .then(() => {
      app.listen(port, () => {
         console.log(`Server connected to http://localhost:${port}`);
      });
   })
   .catch((error) => {
      console.log('Invalid Database Connection');
   });
