import '../Assets/Styles/navbar.css';

import React, { useEffect, useState } from 'react';

import { CgProfile } from 'react-icons/cg';
import { FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdNightlight } from 'react-icons/md';

function Navbar() {
   const [isNightMode, setIsNightMode] = useState(false);
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      if (isNightMode) {
         document.body.classList.add('darkTheme');
      } else {
         document.body.classList.remove('darkTheme');
      }
   }, [isNightMode]);

   useEffect(() => {
      // Token kontrolünü gerçekleştirme - localStorage'dan veya uygun bir yerden token'ı kontrol edin
      const token = localStorage.getItem('token'); // Token'ı localStorage'dan alabilirsiniz veya uygun bir yerden elde edebilirsiniz

      if (token) {
         // Token mevcut ise kullanıcı oturum açmış demektir
         setIsLoggedIn(true);
      }
   }, []);

   const handleLogout = () => {
      // Oturumu kapatma işlemi - JWT ve token ile ilgili gereksinimlere göre yapılmalı
      localStorage.removeItem('token'); // Token'ı localStorage'dan kaldırabilirsiniz veya uygun bir şekilde işleyebilirsiniz
      setIsLoggedIn(false); // Oturum durumunu false olarak ayarlıyoruz
   };

   return (
      <div className="header">
         <div className="header-container container">
            <Link to="/">
               <div className="logo-area">
                  <span className="logo-first"> With</span>
                  <span className="logo-second">Lang</span>
               </div>
            </Link>

            <div className="navbar-right">
               <div
                  onClick={() => setIsNightMode(!isNightMode)}
                  className={`night-mode ${
                     isNightMode ? 'nightMode' : 'dayMode'
                  }`}
               >
                  {isNightMode ? (
                     <div className="day-icon">
                        <FaSun />
                     </div>
                  ) : (
                     <div className="night-icon">
                        <MdNightlight />
                     </div>
                  )}
               </div>
               {isLoggedIn ? (
                  <div className="nav-login-wrapper">
                     <Link to="/profile">
                        <button className="profile-icon">
                           <CgProfile />
                        </button>
                     </Link>
                     <Link to="/register">
                        <button className="logout-button">Çıkış</button>
                     </Link>
                  </div>
               ) : (
                  <Link to="/register">
                     <button className="login-button">Kayıt Ol</button>
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
}

export default Navbar;
