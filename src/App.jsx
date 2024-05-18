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
      path: "/signIn",
      element: (

        <SignIn />

      ),
    },
    {
      path: "/signUp",
      element: (
        <SignUp />
      ),
    },
    {
      path: "/moviePlayer",
      element:(
        <MoviePlayer/>
      )
    },
    {
      path: "/favorites",
      element:(
        <Favorites/>
      )
    }

  ]);
  return <RouterProvider router={router} />;
}

export default App;
