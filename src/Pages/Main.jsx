import '../Assets/Styles/main.css';

import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import MainBanner from '../Assets/Images/test.png';

function Main() {
   useEffect(() => {
      const token = window.localStorage.getItem('token');
      if (!token) {
         window.location.href = '/login';
         return;
      }
   }, []);

   return (
      <div className="main-section">
         <div className="container">
            <a href="#games-heading">
               <img
                  src={MainBanner}
                  alt="mainbanner"
                  className="games-banner"
               />
            </a>
            <div className="games-heading-container">
               <h3 id="games-heading">Güncel Oyunlar</h3>
            </div>

            <ul className="games-items-list">
               <a
                  className="games-item-1"
                  href="http://localhost:3001"
               >
                  <li>Hızlı Quiz</li>
               </a>
               <Link
                  to="synonym"
                  className="games-item-2"
               >
                  <li>Eş Anlamlı Kelimeler</li>
               </Link>
               <Link
                  to="opposite"
                  className="games-item-2"
               >
                  <li>Zıt Anlamlı Kelimeler</li>
               </Link>
               <li className="games-item-4">İnteraktif Öğrenme</li>
            </ul>
         </div>
      </div>
   );
}

export default Main;
