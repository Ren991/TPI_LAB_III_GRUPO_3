import React from 'react';
import { Nav,Navbar, Button } from 'react-bootstrap';

function Footer() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center',alignItems:"center" ,height:"180px"}}>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Crear Cuenta</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Iniciar Sesion</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Github</Nav.Link>
        </Nav.Item>

      </Nav>
    </div>
  );
}

export default Footer;