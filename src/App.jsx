import Home from "./Pages/Home/Home"
import SignIn from "./Pages/Signin/Signin";
import MoviePlayer from "./Pages/MoviePlayer/MoviePlayer";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./Pages/Signup/Signup";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Favorites from "./Pages/Favorites/Favorites";
import SuperAdmin from "./Pages/SuperAdmin/SuperAdmin";
import Admin from "./Pages/Admin/Admin";
import { useEffect, useState } from "react";
import Private from "./Components/Routes/Private";



function App() {

  const [userRol, setUserRol] = useState('')

  const [isSignedIn, setIsSignedIn] = useState(true);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };


  /*useEffect(() => {

    const storedRol = localStorage.getItem('userRol');
    console.log(storedRol)
    if (storedRol) {

      setUserRol(storedRol);

    }else {
      setUserRol('')
    };

    console.log(userRol)

  }, [])*/

  

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

        <SignIn setIsSignedIn={setIsSignedIn} isSignedIn={isSignedIn}/>

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
      element: (

        <Private isSignedIn={isSignedIn}>

          <MoviePlayer isSignedIn={isSignedIn}/>

        </Private>
        
      )
    },
    {
      path: "/favorites",
      element: (
        <Favorites />
      )
    },
    {
      path: "/superadmin",
      element: (
        <SuperAdmin />
      )
    },
    {
      path: "/admin",
      element: (
        <Admin />
      )
    }

  ]);
  return <RouterProvider router={router} />;
}

export default App;
