import './synonymgame.css';

import React, { useState } from 'react';

import axios from 'axios';

const SynonymGame = () => {
   const [inputValue, setInputValue] = useState('');
   const [synonym, setSynonym] = useState('');
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
               `https://wordsapiv1.p.rapidapi.com/words/${inputValue}/synonyms`,
               {
                  headers: {
                     'X-RapidAPI-Key':
                        '79f63589a3msh56f29dc357dac65p1998c3jsn74f6107f1b9a',
                     'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
                  },
               }
            );
            const data = response.data;
            if (data.synonyms && data.synonyms.length > 0) {
               setSynonym(data.synonyms[0]);
            }
         } catch (error) {
            console.error(error);
         }

         setInputValue('');
      }
   };

   const handleSelection = (selected) => {
      if (selected === 'A' && synonym !== '') {
         setScore((prevScore) => prevScore + 1);
      }
   };

   const handleRandomWord = () => {
      setRandomWord(words[Math.floor(Math.random() * words.length)]);
   };

   return (
      <div className="app app-section">
         <div className="container">
            <h2 className="game-h2">Synonym Game</h2>
            <div className="score">Score: {score}</div>
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
                  className="submit"
                  onClick={handleRandomWord}
                  type="submit-button"
               >
                  Submit
               </button>
            </form>
            <div className="button-container">
               <button
                  className="option"
                  onClick={() => handleSelection('A')}
               >
                  {synonym}
               </button>
               <button className="option">{randomWord}</button>
            </div>
         </div>
      </div>
   );
};

export default SynonymGame;
