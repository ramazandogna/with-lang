import '../Assets/Styles/main.css';

import MainBanner from '../Assets/Images/test.png';
import React from 'react';

function Main() {
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
               <li className="games-item-1">Hızlı Quiz</li>
               <li className="games-item-2">Eş Anlamlı Kelimeler</li>
               <li className="games-item-3">Zıt Anlamlı Kelimeler</li>
               <li className="games-item-4">İnteraktif Öğrenme</li>
            </ul>
         </div>
      </div>
   );
}

export default Main;
