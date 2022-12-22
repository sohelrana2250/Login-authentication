
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main';
import SingUp from './Components/SingUp/SingUp';
import Login from './Components/Login/Login';
import UserContext from './context/UserContext';
import Home from './Components/HomePage/Home';
import About from './Components/About/About';
import Register from './Components/RegisterPage/Register';


function App() {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        { path: '/', element: <Home></Home> },
        {
          path: '/SingUp', element: <SingUp></SingUp>
        },
        {
          path: '/login', element: <Login></Login>
        },
        {
          path: '/about', element: <About></About>
        },
        {
          path: '/register', element: <Register></Register>
        }
      ]


    },

  ])


  return (
    <div className="">

      <UserContext>

        <RouterProvider router={router} ></RouterProvider>
      </UserContext>

    </div>
  );
}

export default App;
