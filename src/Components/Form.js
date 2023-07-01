import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function RegistrationForm() {
   const [fullName, setFullName] = useState('');
   const [email, setEmail] = useState('');
   const [gender, setGender] = useState('');
   const [age, setAge] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();

      // Form verilerini kullanarak yapılacak işlemler
      console.log('Ad Soyad:', fullName);
      console.log('E-posta:', email);
      console.log('Cinsiyet:', gender);
      console.log('Yaş:', age);

      // Formu sıfırla
      setFullName('');
      setEmail('');
      setGender('');
      setAge('');
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
               placeholder="Adın Soyadın"
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
            <label htmlFor="gender">Cinsiyet:</label>
            <select
               id="gender"
               value={gender}
               onChange={(e) => setGender(e.target.value)}
               required
            >
               <option value="">Seçiniz</option>
               <option value="erkek">Erkek</option>
               <option value="kadın">Kadın</option>
            </select>
         </div>
         <div className="form-group">
            <label htmlFor="age">Yaş:</label>
            <input
               type="number"
               id="age"
               value={age}
               placeholder=""
               onChange={(e) => setAge(e.target.value)}
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
            zaten üye misin
            <Link
               className="zaten-uye-link"
               to="/sign"
            >
               GİRİŞ YAP
            </Link>
         </p>
      </form>
   );
}

export default RegistrationForm;
