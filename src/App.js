import './Assets/Styles/global.css';

import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Navbar from './Components/Navbar';

function App() {
   return (
      <div className="app">
         <Navbar />

         <div className="container">
            <Home />
            <Introduction />
         </div>
      </div>
   );
}

export default App;
