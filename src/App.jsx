
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/Signin/Signin";
import MoviePlayer from "./Pages/MoviePlayer/MoviePlayer";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./Pages/Signup/Signup";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Favorites from "./Pages/Favorites/Favorites";
import SuperAdmin from "./Pages/SuperAdmin/SuperAdmin";
import Admin from "./Pages/Admin/Admin";
import { UserProvider } from "./Components/AuthContext/AuthContext";
import { MoviesProvider } from "./Components/MovieContext/MovieContext";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


function App() {



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/moviePlayer/:id",
      element:
        <PrivateRoute>
          <MoviePlayer />
        </PrivateRoute>
    },
    {
      path: "/favorites",
      element:
        <PrivateRoute>
          <Favorites />
        </PrivateRoute>
    },
    {
      path: "/superadmin",
      element:
        <PrivateRoute>
          <SuperAdmin />
        </PrivateRoute>
    },
    {
      path: "/admin",
      element:
        <PrivateRoute>
          <Admin />
        </PrivateRoute>
    },
    {
      path: "*",
      element: <NotFound />,
    },


  ]);

  return (
    <UserProvider>
      <MoviesProvider>
        <RouterProvider router={router} />
      </MoviesProvider>
    </UserProvider>
  );


}

export default App;