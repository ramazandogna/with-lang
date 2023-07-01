import './Assets/Styles/global.css';

import Home from './Pages/Home';
import Navbar from './Components/Navbar';

function App() {
   return (
      <div>
         <Navbar />
         <div className="app-section">
            <div className="container">
               <Home />
            </div>
         </div>
      </div>
   );
}

export default App;
