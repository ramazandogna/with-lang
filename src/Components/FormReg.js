import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function RegistrationForm() {
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [age, setAge] = useState('');
   const [password, setPassword] = useState('');
   const [registrationStatus, setRegistrationStatus] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      // Form verilerini kullanarak yapılacak işlemler
      console.log('Ad Soyad:', fullName);
      console.log('E-posta:', email);
      console.log('Yaş:', age);
      console.log('Şifre:', password);

      // Kullanıcıyı kaydetmek için backend'e istek gönderin
      axios
         .post('http://localhost:8000/api/register', {
            fullName,
            email,

            age,
            password,
         })
         .then((response) => {
            console.log(response.data.message);
            setRegistrationStatus('Kayıt başarılı!');
         })
         .catch((error) => {
            console.error('Kayıt hatası:', error);
            if (error.response && error.response.status === 409) {
               setRegistrationStatus('Bu e-posta ile zaten kayıt olunmuş.');
            } else {
               setRegistrationStatus('Kayıt sırasında bir hata oluştu.');
            }
         });

      // Formu sıfırla
      setFullName('');
      setEmail('');
      setAge('');
      setPassword('');
   };

   return (
      <form
         className="registration-form"
         onSubmit={handleSubmit}
      >
         <h2 className="registration-form-h2">KAYIT OL</h2>
         <div className="form-group">
            <label htmlFor="fullName">Ad Soyad:</label>
            <input
               type="text"
               id="fullName"
               value={fullName}
               placeholder="Adın Soyadın.."
               onChange={(e) => setFullName(e.target.value)}
               required
            />
         </div>
         <div className="form-group">
            <label htmlFor="email">E-posta:</label>
            <input
               type="email"
               id="email"
               value={email}
               placeholder="seninepostan@example.com"
               onChange={(e) => setEmail(e.target.value)}
               required
            />
         </div>

         <div className="form-group">
            <label htmlFor="age">Yaş:</label>
            <input
               type="number"
               id="age"
               value={age}
               placeholder="Yaşın.."
               onChange={(e) => setAge(e.target.value)}
               required
            />
         </div>
         <div className="form-group">
            <label htmlFor="password">Şifre:</label>
            <input
               type="password"
               id="password"
               value={password}
               placeholder="Şifren.."
               onChange={(e) => setPassword(e.target.value)}
               required
            />
         </div>
         <button
            type="submit"
            className="submit-button"
         >
            Kayıt Ol
         </button>
         <p className="zaten-uye">
            Zaten üye misin?{' '}
            <Link
               className="zaten-uye-link"
               to="/login"
            >
               GİRİŞ YAP
            </Link>
         </p>
         {registrationStatus && (
            <p className="registration-status">{registrationStatus}</p>
         )}
      </form>
   );
}

export default RegistrationForm;
