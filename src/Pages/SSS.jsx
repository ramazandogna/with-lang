import '../Assets/Styles/sss.css';

import React from 'react';
import SSSquestions from '../Components/SSSquestions';

const SSS = () => {
   return (
      <div className="accordion">
         <h2 className="accordion-heading">Sıkça Sorulan Sorular SSS</h2>
         <div className="accordion-questions-section">
            <SSSquestions />
         </div>
      </div>
   );
};

export default SSS;
