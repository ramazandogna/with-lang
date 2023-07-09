import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import axios from 'axios';

function FormLog() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const history = useNavigate();

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         await axios
            .post('http://localhost:8000/', {
               email,
               password,
            })
            .then((res) => {
               if (res.data === 'exist') {
                  history('/main');
               } else if (res.data === 'notexist') {
                  alert('User have not sign up');
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
