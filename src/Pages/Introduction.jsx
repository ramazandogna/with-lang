import '../Assets/Styles/introduction.css';

import React from 'react';

function Introduction() {
   return (
      <div
         id="#introduction"
         className="introduction-section"
      >
         <div className="introduction-wrapper-1">
            <div className="wrapper-1-1">
               Tamamen ücretsiz, birbirinden başarılı uygulamalar ile
               İngilizceni geliştir
            </div>
            <div className="wrapper-1-2">
               <span className="introduction-highline">ÜCRETSİZ</span>
            </div>
         </div>
         <div className="introduction-wrapper-2">
            <div className="wrapper-2-1">
               Ezbere değil, maruz kalma tekniği ile geliş.
            </div>
            <div className="wrapper-2-2">
               <span className="introduction-highline">GELİŞ</span>
            </div>
         </div>
      </div>
   );
}

export default Introduction;
