import '../Assets/Styles/sign.css';

import FormReg from '../Components/FormReg';
import React from 'react';

function SignPage() {
   return (
      <div className="sign-page-section">
         <div className="container">
            <div className="sing-page-wrapper">
               <FormReg />
            </div>
         </div>
      </div>
   );
}

export default SignPage;
