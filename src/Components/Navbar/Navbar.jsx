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
      await signOut(auth);
      console.log("Logout exitoso");
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      signOut();
      navigate('/home'); // Redirigir a la página de inicio de sesión
    } catch (error) {
      console.error("Error cerrando sesión:", error);
    }
  };




  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="me-auto">
          <Link to='/home' style={{ textDecoration: 'None', color: 'black' }}>ArgFlix</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {homeRoute === true && (
          <>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <NavDropdown title="Que Ver" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Que Ver</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
                <NavDropdown title="Genero" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Genero</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
              <Form className="d-flex me-auto">
                <FormControl
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Navbar.Collapse>
            <Nav>
              <Nav.Link href="#home">Mis Favoritos</Nav.Link>

            </Nav>
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
