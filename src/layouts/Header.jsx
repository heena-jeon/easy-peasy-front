import {
  Button,
  ButtonGroup,
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container fluid>
        <Navbar.Brand href="/">Easy Peasy</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Easy Peasy
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>            
            <Nav className="justify-content-end flex-glow-1 pe-3">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/courses">Couses</Nav.Link>
              <NavDropdown title="Examples" id="offcanvasNavbarDropdown-expand-lg">
                <NavDropdown.Item href="/examples">ALL</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/examples/html">HTML</NavDropdown.Item>
                <NavDropdown.Item href="/examples/css">CSS</NavDropdown.Item>
                <NavDropdown.Item href="/examples/javascript">Javascript</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/examples/react">React</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/qna">QnA</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <ButtonGroup>
              <Button variant="warning">Login</Button>
              <Button variant="outline-warning">Join</Button>
            </ButtonGroup>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;