import { Container, Row, Col } from "react-bootstrap";
import DesignPanel from "../DesignPanel/DesignPanel";
import DatePanel from "../DatePanel/DatePanel";

const PropPanel = () => {
  return (
    <Container>
      <Row>
        <Col>Location</Col>
      </Row>
      <Row>
        <Col>
          <input></input>
        </Col>
      </Row>
      <Row>
        <Col>Dedication</Col>
      </Row>
      <Row>
        <Col>
          <textarea rows="2" cols="25"></textarea>
        </Col>
      </Row>
      <Row>
        <Col>Date</Col>
      </Row>
      <Row>
        <Col>
          <DatePanel />
        </Col>
      </Row>
      <Row>
        <Col>Design</Col>
      </Row>
      <Row>
        <Col>
          <DesignPanel />
        </Col>
      </Row>
    </Container>
  );
};

export default PropPanel;
