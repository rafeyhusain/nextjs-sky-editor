import { Container, Row, Col } from "react-bootstrap";
import DesignPanel from "../DesignPanel/DesignPanel";
import DatePanel from "../DatePanel/DatePanel";
import styles from "./PropPanel.module.css";

const PropPanel = () => {
  return (
    <Container>
      <Row>
        <Col className={styles.label}><h4>Sample Editor</h4></Col>
      </Row>
      <Row>
        <Col className={styles.label}>Location</Col>
      </Row>
      <Row>
        <Col>
          <input className={styles.noborder}></input>
        </Col>
      </Row>
      <Row>
        <Col className={styles.label}>Dedication</Col>
      </Row>
      <Row>
        <Col>
          <textarea className={styles.noborder} rows="2" ></textarea>
        </Col>
      </Row>
      <Row>
        <Col className={styles.label}>Date</Col>
      </Row>
      <Row>
        <Col>
          <DatePanel />
        </Col>
      </Row>
      <Row>
        <Col className={styles.label}>Design</Col>
      </Row>
      <Row>
        <Col>
          <DesignPanel />
        </Col>
      </Row>
      <Row>
        <Col>
          <button className={styles.buttonpdf}>Generate PDF</button>
        </Col>
      </Row>
    </Container>
  );
};

export default PropPanel;
