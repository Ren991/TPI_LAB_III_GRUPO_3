import Home from "./Pages/Home/Home"
import SignIn from "./Pages/Signin/Signin";
import MoviePlayer from "./Pages/MoviePlayer/MoviePlayer";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./Pages/Signup/Signup";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Favorites from "./Pages/Favorites/Favorites";


function App() {
  const router = createBrowserRouter([
    {
      path: "/home",
      element: (
        <Home />
      ),
    },
    {
      path: "/SignIn",
      element: (

        <SignIn />

      ),
    },
    {
      path: "/SignUp",
      element: (
        <SignUp />
      ),
    },
    {
      path: "/MoviePlayer",
      element:(
        <MoviePlayer/>
      )
    },
    {
      path: "/Favorites",
      element:(
        <Favorites/>
      )
    }

  ]);
  return <RouterProvider router={router} />;
}

export default App;
