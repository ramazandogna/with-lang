import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

function Profile() {
   const [userData, setUserData] = useState('');
   const history = useNavigate();

   useEffect(() => {
      const token = window.localStorage.getItem('token');
      if (!token) {
         window.location.href = '/login';
         return;
      }

      fetch('http://localhost:8000/userData', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
         },
         body: JSON.stringify({
            token: token,
         }),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data, 'userData');
            setUserData(data.data);
         });
   }, [history]);

   if (!userData) {
      return <div>Loading...</div>; // Veri yüklenene kadar yüklenme göstergesi gösterilebilir
   }

   const parsedData = JSON.parse(userData);

   return (
      <div className="app">
         <div className="app-section">
            <div className="container">
               <div>
                  <h2> Kullanıcı Profili:</h2>
                  <div>Senin adın: {parsedData.fullName}</div>
                  <div>Senin yaşın: {parsedData.age}</div>
                  <div>Senin epostan: {parsedData.email}</div>
               </div>
               <br />
               <div>
                  <h3>Senin Quiz Score</h3>
                  <div>Doğru sayın: {parsedData.quiz[0].dogru}</div>
                  <div>Yanlış sayın: {parsedData.quiz[0].yanlis}</div>
                  <div>Durum: Geçti</div>
               </div>
               <br />
               <div>
                  <h3>Eş Anlamı Kelime Skoru:</h3>
                  <div>{parsedData.esanlam} Puan</div>
               </div>
               <br />
               <div>
                  <h3>Zıt Anlamlı Kelime Skoru:</h3>
                  <div>{parsedData.zitanlam} Puan</div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Profile;
