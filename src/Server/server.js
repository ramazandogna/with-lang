const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json()); // JSON verileri için body-parser middleware'ini kullanıyoruz

// MongoDB bağlantısı
mongoose
   .connect(
      'mongodb+srv://withlang:withlang123@withlang.rtihuni.mongodb.net/users',
      {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      }
   )
   .then(() => {
      console.log('MongoDB bağlantısı başarılı!');
      app.listen(PORT, () => {
         console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
      });
   })
   .catch((err) => {
      console.error('MongoDB bağlantı hatası:', err);
   });

const apiRoutes = require('./Routes/api');
app.use('/api', apiRoutes);

module.exports = app;
