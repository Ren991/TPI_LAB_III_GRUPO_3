// App.js
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


function App() {



  const router = createBrowserRouter([
    {
      path:"/",
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

          <MoviePlayer />

    },
    {
      path: "/favorites",
      element: 

        <Favorites />

    },
    {
      path: "/superadmin",
      element: <SuperAdmin />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
    {
      path: "*", // Ruta para manejar páginas no encontradas
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