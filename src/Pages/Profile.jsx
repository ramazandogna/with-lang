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
               <h2> User Profile:</h2>
               <div>Name: {parsedData.fullName}</div>
               <div>{parsedData.age}</div>
               <div>{parsedData.email}</div>
            </div>
         </div>
      </div>
   );
}

export default Profile;
