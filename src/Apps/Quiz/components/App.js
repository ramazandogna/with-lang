import '../styles/App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CheckUserExist } from '../helper/helper';
/** import components */
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

/** react routes */
const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
   },
   {
      path: '/quiz/quiz',
      element: (
         <CheckUserExist>
            <Quiz />
         </CheckUserExist>
      ),
   },
   {
      path: '/quiz/result',
      element: (
         <CheckUserExist>
            <Result />
         </CheckUserExist>
      ),
   },
]);

function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
