import './Assets/Styles/global.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import Main from './Pages/Main';
import Navbar from './Components/Navbar';
import SignPage from './Pages/SignPage';

function App() {
   return (
      <div className="app">
         <Navbar />

         <Routes>
            <Route
               path="/"
               element={<Main />}
            />
            <Route
               path="/signup"
               element={<SignPage />}
            />
            <Route
               path="/signup"
               element={<SignPage />}
            />
         </Routes>

         <Footer />
      </div>
   );
}

export default App;
