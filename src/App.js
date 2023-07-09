import './Assets/Styles/global.css';

import { Route, Routes } from 'react-router-dom';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import LogIn from './Pages/LogIn';
import Main from './Pages/Main';
import Navbar from './Components/Navbar';
import Register from './Pages/Register';

function App() {
   return (
      <div className="app">
         <Navbar />

         <Routes>
            <Route
               path="/main"
               element={<Main />}
            />
            <Route
               path="/"
               element={<HomePage />}
            />
            <Route
               path="/login"
               element={<LogIn />}
            />
            <Route
               path="/register"
               element={<Register />}
            />
         </Routes>
         <Footer />
      </div>
   );
}

export default App;
