import '../Assets/Styles/navbar.css';

import React, { useEffect, useState } from 'react';

import { FaSun } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdNightlight } from 'react-icons/md';

function Navbar() {
   const [isNightMode, setIsNightMode] = useState(false);

   useEffect(() => {
      if (isNightMode) {
         document.body.classList.add('dark');
      } else {
         document.body.classList.remove('dark');
      }
      console.log(isNightMode);
   }, [isNightMode]);

   return (
      <div className="header">
         <div className="header-container container">
            <Link to="/">
               <div className="logo-area">WithLang</div>
            </Link>

            <div className="navbar-right">
               <div
                  onClick={() => setIsNightMode(!isNightMode)}
                  className={`night-mode ${
                     isNightMode ? 'nightMode' : 'dayMode'
                  }`}
               >
                  {isNightMode ? (
                     <div className="night-icon">
                        <FaSun />
                     </div>
                  ) : (
                     <div className="day-icon">
                        <MdNightlight />
                     </div>
                  )}
               </div>
               <Link to="/">
                  <button className="login-button">LOG IN</button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
