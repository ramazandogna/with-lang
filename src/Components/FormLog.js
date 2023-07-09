import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function FormLog() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      fetch('http://localhost:8000/login-user', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify({
            email,
            password,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data, 'userLogin');
            alert('giriş başarılı');
            window.localStorage.setItem('token', data.data);
            window.location.href = '/main';
         })
         .catch((error) => {});
   };

   return (
      <form
         className="registration-form"
         action="POST"
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
            onClick={handleSubmit}
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
      </form>
   );
}

export default FormLog;
