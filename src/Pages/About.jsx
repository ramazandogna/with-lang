import '../Assets/Styles/about.css';

import { AiOutlineDown } from 'react-icons/ai';
import React from 'react';

function About() {
   const scrollToNextSection = () => {
      window.scrollTo({
         top: window.innerHeight,
         behavior: 'smooth',
      });
   };

   return (
      <div className="home-section">
         <div className="home-wrapper container">
            <div className="home-brand-introduction">
               Hafızanı geliştirecek, sana İngilizce öğretecek oyunlar ve çok
               daha fazlası
            </div>

            <div>
               <p className="home-brand-free">Üstelik tamamen ücretsiz!</p>
            </div>
            <div>
               <p className="home-brand-click">
                  Butona tıkla ve yeni heycana yelken aç*
               </p>
            </div>
            <div className="home-brand-button">
               <p className="home-brand-button-text">BAŞLA</p>
            </div>
         </div>

         <div
            onClick={scrollToNextSection}
            className="home-down-button"
         >
            <AiOutlineDown />
         </div>
      </div>
   );
}

export default About;
