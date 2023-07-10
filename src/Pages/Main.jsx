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
               <Link
                  className="games-item-1"
                  to="/quiz"
               >
                  <li>Hızlı Quiz</li>
               </Link>
               <li className="games-item-2">Eş Anlamlı Kelimeler</li>
               <li className="games-item-3">Zıt Anlamlı Kelimeler</li>
               <li className="games-item-4">İnteraktif Öğrenme</li>
            </ul>
         </div>
      </div>
   );
}

export default Main;
