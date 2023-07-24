import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoModoFit from "../images/logo_modofit_market.png"
import CartWidged from "./CartWidget";
import { NavLink } from "react-router-dom";
import "../css/Components.css";

function NavBar() {

   return (
    <Navbar expand="lg" className="barraNavegacion">    
      <Container>
        <Navbar.Brand href="#logo" style ={{ marginRight: 100}}>
            <img src={logoModoFit} alt="logoNavBar"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links me-auto">
            <Nav.Link href="/home">Inicio</Nav.Link>
            <Nav.Link href="/">Frutos Secos</Nav.Link>
            <Nav.Link href="/">Jugos y Bebidas</Nav.Link>
            <NavDropdown title="Desayuno" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">
                Mermeladas
              </NavDropdown.Item>
              <NavDropdown.Item href="/">
                Galletitas
              </NavDropdown.Item>
              <NavDropdown.Item href="/">Miel</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Cosmética Natural</Nav.Link>
            <Nav.Link href="/">Contacto</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
        <CartWidged/>
      </Container>
    </Navbar>

  );
}

export default NavBar;
