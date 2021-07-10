
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar expand="md" bg="light" variant="light" style={{marginBottom: "20px"}}>
        <Container>
            <Navbar.Brand href="#home">🍩 Splunkin Donuts!</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/home"><Nav.Link as="span">Home</Nav.Link></Link>
                <Link to="/products"><Nav.Link as="span">Products</Nav.Link></Link>
                <Link to="/contact"><Nav.Link as="span">Contact Us</Nav.Link></Link>
            </Nav>
        </Container>
  </Navbar>
  );
}

export default Header;
