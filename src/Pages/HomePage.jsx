import About from './About';
import Introduction from './Introduction';
import React from 'react';
import SSS from './SSS';

function HomePage() {
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
