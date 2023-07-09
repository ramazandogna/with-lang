import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function RegistrationForm() {
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [age, setAge] = useState('');
   const [password, setPassword] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      fetch('http://localhost:8000/register', {
         method: 'POST',
         crossDomain: true,
         headers: {
            'content-type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
         },
         body: JSON.stringify({
            fullName,
            email,
            password,
            age,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data, 'userRegister');
         });
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
      </form>
   );
}

export default RegistrationForm;
