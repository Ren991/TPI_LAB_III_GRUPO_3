import { Navbar, Nav, NavDropdown, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link, useLocation,  useNavigate  } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getAuth, signOut } from 'firebase/auth';
import { useUser} from "../AuthContext/AuthContext";

function NavBarPage() {
  const [adminRoute, setAdminRoute] = useState(false);
  const [homeRoute, setHomeRoute] = useState(false);
  const [favoritesRoute, setFavoritesRoute] = useState(false);
  const [videoPlayerRoute, setVideoPlayerRoute] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const {signOut} = useUser();

  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();
  

  useEffect(() => {
    setHomeRoute(location.pathname === "/home");
    setVideoPlayerRoute(location.pathname === "/moviePlayer");
    setAdminRoute(location.pathname === "/admin");
    setFavoritesRoute(location.pathname === "/favorites");

    const user = localStorage.getItem('user');
    setIsAuthenticated(!!user);
    
  }, [location.pathname]);
  

  const handleLogout = async () => {
    const auth = getAuth();
    try {
      navigate('/home'); // Redirigir a la página de inicio de sesión

      await signOut(auth);
      console.log("Logout exitoso");
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      signOut();
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };

  const getUserEmail = () => {
    if (user) {
      const namePart = user.name ? user.name.split('')[0] : user.email.split('@')[0];
      return namePart.charAt(0).toUpperCase() + namePart.slice(1);
    }
    return '';
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="me-auto">
          <Link to='/home' style={{ textDecoration: 'None', color: 'black' }}>ArgFlix</Link>
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {homeRoute === true && (
          <>
            {
              user &&<Nav>
              <Nav.Link onClick={()=> navigate("/favorites")}>Mis Favoritos</Nav.Link>
            </Nav>
            }
            
            {user?.role === "superAdmin" &&           
            <Nav>
              <Nav.Link onClick={() => navigate("/superAdmin")}>superAdmin</Nav.Link>
            </Nav>
            }
            {user?.role === "admin" &&           
            <Nav>
              <Nav.Link onClick={() => navigate("/admin")} >Admin</Nav.Link>
            </Nav>
            }
            {user && user.role !== "superAdmin" && user.role !== "admin" && (
              <Nav>
                <Nav.Link>{getUserEmail()}</Nav.Link>
              </Nav>
            )}
            
          </>
        )}
        <Nav>
          {videoPlayerRoute === true && (<Nav.Link href="#home">Mis Favoritos</Nav.Link>)}
          {isAuthenticated ? (
            <Nav.Link onClick={handleLogout}>Cerrar sesión</Nav.Link>
          ) : (
            <Nav.Link href="/signin">Inicio sesión</Nav.Link>
          )}
        </Nav>

      </Container>
    </Navbar>
  );
}

export default NavBarPage;
