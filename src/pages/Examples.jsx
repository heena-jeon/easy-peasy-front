import React from 'react';
import Sidebar from '../layouts/Sidebar';
import '../assets/styles/sidebars.css';
import ExamplesContent from '../features/examples/ExamplesContent';
import { 
  Container,
  Row,
  Col,
} from 'react-bootstrap';

const Examples = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Sidebar />
        </Col>
        <Col>
          <ExamplesContent />
        </Col>
        <Col>
          Test
        </Col>
      </Row>
    </Container>
  )
};

export default Examples;