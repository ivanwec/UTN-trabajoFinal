import React from "react";
import "./header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {

    return(
        <header>
         
<Navbar className="menunav" bg="light" expand="lg" >
  
      <Container>
        <Navbar.Brand href="./">LUMETRI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="./">Home</Nav.Link>
            <Nav.Link href="./Contacto">Enviar consulta</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="./decks">Decks de madera</NavDropdown.Item>
              <NavDropdown.Item href="./escaleras">Escaleras de madera</NavDropdown.Item>
              <NavDropdown.Item href="./muebles">Muebles de cocina</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </header>
    )
}

export default Menu;