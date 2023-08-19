import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidged from "../CartWidget/CartWidget";
import {Link} from 'react-router-dom';
import "../../css/Components.css";

function NavBar() {

   return (
    <Navbar expand="lg" className="barraNavegacion">    
      <Container>
        <Navbar.Brand as={Link} to='/' style ={{ marginRight: 100}}>
            <img src='/images/logo_modofit_market.png' alt="logoNavBar"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="links me-auto">
            <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/category/cereales'>Cereales</Nav.Link>
            <Nav.Link as={Link} to='/category/bebidas'>Bebidas</Nav.Link>
            <Nav.Link as={Link} to='/category/desayuno'>Desayuno</Nav.Link>
            <Nav.Link as={Link} to='/category/mermeladas'>Mermeladas y Dulces</Nav.Link>
            <Nav.Link as={Link} to='/cart'><CartWidged /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavBar;