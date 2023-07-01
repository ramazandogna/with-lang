import './Assets/Styles/global.css';

import Home from './Pages/Home';
import Introduction from './Pages/Introduction';
import Navbar from './Components/Navbar';
import SSS from './Pages/SSS';

function App() {
   return (
      <div className="app">
         <Navbar />

         <div className="container">
            <Home />
            <Introduction />
            <SSS />
         </div>
      </div>
   );
}

export default App;
