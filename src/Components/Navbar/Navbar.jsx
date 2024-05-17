import {  Navbar, Nav, NavDropdown,Container,Form,FormControl, Button} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

function NavBarPage() {
  const [adminRoute, setAdminRoute] = useState(false);
  const [homeRoute, setHomeRoute] = useState(false);
  const [favoritesRoute, setFavoritesRoute] = useState(false);
  const [videoPlayerRoute, setVideoPlayerRoute] = useState(false);

  const location = useLocation();
  
  useEffect(() => {
    setHomeRoute(location.pathname === "/home");
    setVideoPlayerRoute(location.pathname === "/moviePlayer");
    setAdminRoute(location.pathname === "/admin");
    setFavoritesRoute(location.pathname === "/favorites");

  }, [location.pathname]);



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="me-auto">
          ArgFlix
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {homeRoute === true && (
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
          </Navbar.Collapse>)}
          <Nav>
            <Nav.Link href="#home">Mis Favoritos</Nav.Link>
            <Nav.Link href="#link">Inicio/ Cierre sesión </Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default NavBarPage;
