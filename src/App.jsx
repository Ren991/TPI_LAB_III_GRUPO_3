import Home from "./Pages/Home/Home"
import SignIn from "./Pages/Signin/Signin";
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./Pages/Signup/Signup";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


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
    }

  ]);
  return <RouterProvider router={router} />;
}

export default App;
