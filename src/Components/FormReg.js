import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import axios from 'axios';

function RegistrationForm() {
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [age, setAge] = useState('');
   const [password, setPassword] = useState('');
   const history = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await axios
            .post('http://localhost:8000/signup', {
               email,
               password,
            })
            .then((res) => {
               if (res.data === 'exist') {
                  alert('User already exists');
               } else if (res.data === 'notexist') {
                  history('/main');
               }
            })
            .catch((e) => {
               alert('wrong details');
               console.log(e);
            });
      } catch (e) {
         console.log(e);
      }
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
