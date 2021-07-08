
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

function Footer() {
  return (
    <Navbar fixed="bottom" expand="md" bg="light" variant="light" >
        <Container>
            <p style={{textAlign: "center", width: "100%"}}>©Ya boy Splunkin Donuts 2021</p>
        </Container>
    </Navbar>
  );
}

export default Footer;
