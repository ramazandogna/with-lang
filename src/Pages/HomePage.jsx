import React, { useEffect } from 'react';

import About from './About';
import Introduction from './Introduction';
import SSS from './SSS';

function HomePage() {
   useEffect(() => {
      const token = window.localStorage.getItem('token');
      if (token) {
         window.location.href = '/main';
         return;
      }
   }, []);

   return (
      <>
         <About />
         <Introduction />
         <div className="container">
            <SSS />
         </div>
      </>
   );
}

export default HomePage;
