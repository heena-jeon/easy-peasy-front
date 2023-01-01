import {
  Nav,
  Container,
  Form,
  Button,
  Accordion,
  Row,
} from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Container>
      <Row className="mb-3">
        <Form className="d-flex">
          <Form.Control 
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-warning">Search</Button>
        </Form>
      </Row>
      <Row className="mb-3">
        <h4>Basic Web Programming</h4>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>HTML</Accordion.Header>
            <Accordion.Body>
              <Nav>
                <Nav.Link href="/examples/html/basic">What is HTML?</Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>CSS</Accordion.Header>
            <Accordion.Body>
              <Nav>
                <Nav.Link href="/examples/css/basic">What is CSS?</Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Javascript</Accordion.Header>
            <Accordion.Body>
              <Nav>
                <Nav.Link href="/examples/javascript/basic">What is Javascript?</Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
      <Row>
        <h4>React</h4>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>React</Accordion.Header>
            <Accordion.Body>
              <Nav>
                <Nav.Link href="/examples/react/basic">What is React?</Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>React Hook Form</Accordion.Header>
            <Accordion.Body>
              <Nav>
                <Nav.Link href="/examples/react-hook-form/basic">What is React Hook form?</Nav.Link>
              </Nav>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
};

export default Sidebar;