import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

function FormLog() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [loginStatus, setLoginStatus] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      // Kullanıcının gönderdiği e-posta ve şifre
      const userData = {
         email: email,
         password: password,
      };

      // Backend'e istek gönderme
      axios
         .post('http://localhost:8000/api/login', userData)
         .then((response) => {
            const { token } = response.data;
            // JWT'yi localStorage'e kaydetme
            localStorage.setItem('token', token);
            // Giriş başarılı mesajını ayarlama
            setLoginStatus('Giriş başarılı!');
         })
         .catch((error) => {
            // Hata durumunda hata mesajını ayarlama
            setLoginStatus('Geçersiz e-posta veya şifre.');
         });

      // Formu sıfırla
      setEmail('');
      setPassword('');
   };

   return (
      <form
         className="registration-form"
         onSubmit={handleSubmit}
      >
         <h2 className="registration-form-h2">Giriş Yap</h2>
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
            Giriş Yap
         </button>
         <p className="zaten-uye">
            Henüz üye değil misin?
            <Link
               className="zaten-uye-link"
               to="/register"
            >
               Kayıt ol
            </Link>
         </p>
         {loginStatus && <p className="login-status">{loginStatus}</p>}
      </form>
   );
}

export default FormLog;
