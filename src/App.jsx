import React, { useContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/Signin/Signin";
import MoviePlayer from "./Pages/MoviePlayer/MoviePlayer";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./Pages/Signup/Signup";
import Favorites from "./Pages/Favorites/Favorites";
import SuperAdmin from "./Pages/SuperAdmin/SuperAdmin";
import Admin from "./Pages/Admin/Admin";
import Private from "./Components/Routes/Private";
import { AuthContext } from "./Components/Context/AuthContext";

function App() {
  const [userRol, setUserRol] = useState('');
  const { isSignedIn } = useContext(AuthContext);

  console.log(isSignedIn);

  const router = createBrowserRouter([
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
      path: "/moviePlayer",
      element: (
        <Private>
          <MoviePlayer />
        </Private>
      ),
    },
    {
      path: "/favorites",
      element: <Favorites />,
    },
    {
      path: "/superadmin",
      element: <SuperAdmin />,
    },
    {
      path: "/admin",
      element: <Admin />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;

