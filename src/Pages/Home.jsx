import '../Assets/Styles/home.css';

import { AiOutlineDown } from 'react-icons/ai';
import React from 'react';

function Home() {
   const scrollToNextSection = () => {
      window.scrollTo({
         top: window.innerHeight,
         behavior: 'smooth',
      });
   };

   return (
      <div className="home-section">
         <div className="home-wrapper">
            <div className="home-brand-introduction">
               Stream brand new Originals, blockbusters, binge-worthy series and
               more
            </div>

            <div>
               <p className="home-brand-free">It's completly free!</p>
            </div>
            <div>
               <p className="home-brand-click">
                  Click button to start new challenges*
               </p>
            </div>
            <div className="home-brand-button">
               <p className="home-brand-button-text">GET STARTED</p>
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

export default Home;
