import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/NavBar.css";
import logoModoFit from "../images/logo_modofit_market.png"

function NavBar() {
  return (
    <Navbar expand="lg" className="barraNavegacion">    
      <Container>
        <Navbar.Brand idName="logoNavBar" href="#logo" style ={{ marginRight: 100}}>
            <img src={logoModoFit} alt="logoNavBar"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#link">Frutos Secos</Nav.Link>
            <Nav.Link href="#link">Jugos y Bebidas</Nav.Link>
            <NavDropdown title="Desayuno" id="basic-nav-dropdown">
              <NavDropdown.Item href="#linkDesayuno1">
                Mermeladas
              </NavDropdown.Item>
              <NavDropdown.Item href="#linkDesayuno2">
                Galletitas
              </NavDropdown.Item>
              <NavDropdown.Item href="#linkDesayuno3">Miel</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Cosmética Natural</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;
