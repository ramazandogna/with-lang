import './Assets/Styles/global.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import Navbar from './Components/Navbar';
import SignPage from './Pages/SignPage';

function App() {
   return (
      <div className="app">
         <Navbar />

         <Routes>
            <Route
               path="/"
               element={<HomePage />}
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
