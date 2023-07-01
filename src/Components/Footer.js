import '../Assets/Styles/footer.css';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import React from 'react';

const Footer = () => {
   return (
      <div className="footer-section">
         <div className="container">
            <div className="footer-wrapper">
               <span className="footer-created">© 2023 - by Ramazan Doğan</span>
               <a
                  href="https://github.com/ramazandogna"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <AiFillGithub className="footer-github" />
               </a>
               <a
                  href="https://www.linkedin.com/in/ramazandogna/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <AiFillLinkedin className="footer-linkedin" />
               </a>
            </div>
            <div className="footer-reserved">
               TÜM HAKLARI SAKLIDIR. İZİNSİZ KULLANILAMAZ.!
            </div>
         </div>
      </div>
   );
};

export default Footer;
