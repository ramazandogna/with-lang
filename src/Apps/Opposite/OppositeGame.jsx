import React, { useState } from 'react';

import axios from 'axios';

const OppositeGame = () => {
   const [inputValue, setInputValue] = useState('');
   const [opposite, setOpposite] = useState('');
   const [randomWord, setRandomWord] = useState('');
   const [score, setScore] = useState(0);

   const words = [
      'happy',
      'beautiful',
      'amazing',
      'brave',
      'creative',
      'delicious',
      'elegant',
      'fantastic',
      'generous',
      'honest',
      'intelligent',
      'kind',
      'lovely',
      'magnificent',
      'passionate',
   ];

   const handleInputChange = (e) => {
      setInputValue(e.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (inputValue.trim() !== '') {
         try {
            const response = await axios.get(
               `https://wordsapiv1.p.rapidapi.com/words/${inputValue}/antonyms`,
               {
                  headers: {
                     'X-RapidAPI-Key':
                        '79f63589a3msh56f29dc357dac65p1998c3jsn74f6107f1b9a',
                     'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
                  },
               }
            );
            const data = response.data;
            if (data.antonyms && data.antonyms.length > 0) {
               setOpposite(data.antonyms[0]);
            }
         } catch (error) {
            console.error(error);
         }

         setInputValue('');
      }
   };

   const handleSelection = (selected) => {
      if (selected === 'A' && opposite !== '') {
         setScore((prevScore) => prevScore + 1);
      }
   };

   const handleRandomWord = () => {
      setRandomWord(words[Math.floor(Math.random() * words.length)]);
   };

   return (
      <div className="app app-section">
         <div className="container">
            <h2 className="game-h2">Opposite Game</h2>
            <p className="score">Score: {score}</p>
            <form
               className="game-form"
               onSubmit={handleSubmit}
            >
               <input
                  className="game-text-input"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter a word"
               />
               <button
                  onClick={handleRandomWord}
                  type="submit"
                  className="submit"
               >
                  Submit
               </button>
            </form>
            <div className="button-container">
               <button
                  className="option"
                  onClick={() => handleSelection('A')}
               >
                  {opposite}
               </button>
               <button className="option">{randomWord}</button>
            </div>
         </div>
      </div>
   );
};

export default OppositeGame;
