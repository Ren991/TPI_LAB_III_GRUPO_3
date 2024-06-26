import React from 'react';
import { Nav,Navbar, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex', justifyContent: 'center',alignItems:"center" ,height:"180px"}}>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link onClick={()=>navigate("/signUp")}>Crear Cuenta</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" onClick={()=>navigate("/signin")}>Iniciar Sesion</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" href="https://github.com/Ren991/TPI_LAB_III_GRUPO_3" target="_blank" >Github</Nav.Link>
        </Nav.Item>

      </Nav>
    </div>
  );
}

export default Footer;